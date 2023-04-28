import { useState, useEffect } from "react";
import "./productcrud.css";
import notImg from "../assets/img/not.jpg";
import axios from 'axios';
import { FaTrash, FaEdit } from "react-icons/fa";

function ProductCrud() {
  const [showFormCreate, setshowFormCreate] = useState(false);
  const [product_name, setproduct_name] = useState('');
  const [description, setdescription] = useState('');
  const [product_price, setproduct_price] = useState('');
  const [loading, setLoading] = useState(true)
  const [productList, setproductList] = useState([])
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loadingCategoryes, setLoadingCategoryes] = useState(true)
  const [catregoryList, setcatregoryList] = useState([])
  const [selectedValue, setSelectedValue] = useState('');
  const [productSelecte, setProductSelecte] = useState({})
  const [swhoUpdate, setShowupdate] = useState(false)

  function handleFileChange(event) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFile(selectedFile);
        setPreview(reader.result);
      };

      reader.readAsDataURL(selectedFile);
    } else {
      setFile(null);
      setPreview(null);
    }
  }

  async function getProducts() {
    try {
      const {data} = await axios.get('http://localhost:3002/api/v1/products/all');
      console.log(data);
      setproductList(data)
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  }

  async function handlerDelete(id) {
    try {
      const {data} = await axios.delete(`http://localhost:3002/api/v1/products/delete/${id}`);
      data && getProducts()
    } catch (error) {
      console.error(error);
    }
  }

  async function handlerCreate(id) {
    try {
      const dataToSave = {
          product_name: product_name,
          product_price: product_price,
          product_image: "",
          description: description,
          category_id: selectedValue
      }
      const {data} = await axios.post(`http://localhost:3002/api/v1/products/create`, dataToSave);
      setshowFormCreate(false)
      data && getProducts()
    } catch (error) {
      console.error(error);
    }
  }
  

  async function getCategoryes() {
    try {
      const {data} = await axios.get('http://localhost:3002/api/v1/products/all-categoryes');
      setcatregoryList(data)
      setLoadingCategoryes(false)
    } catch (error) {
      console.error(error);
    }
  }

  function handleSelectChange(event) {
    setSelectedValue(event.target.value);
  }

  const [image, setImage] = useState(null);

  async function handlerUdate(dataToSave) {
    try {
    
      const data = await axios.put(`http://localhost:3002/api/v1/products/update`, dataToSave);
      setshowFormCreate(false)
      setShowupdate(false)
      data && getProducts()
    } catch (error) {
      console.error(error);
    }
  }

  function handleUpdate(id) {
    const formData = {
      id: parseInt(productSelecte.id),
      product_price: parseInt(productSelecte.product_price),
      product_name: productSelecte.product_name,
      category_id: parseInt(productSelecte.category_id),
      description: productSelecte.description,
      product_image: image || ''
    }
 
    if (image) {
      formData.append('image', image);
    }
    
    handlerUdate(formData)
 
  }

  const onCancel = ()=>{
    setShowupdate(false)
    setshowFormCreate(false)
  }

  useEffect(()=>{
    loadingCategoryes && getCategoryes()
  }, [loadingCategoryes])

  useEffect(()=>{
    loading && getProducts()
  }, [loading])

  return (
    <div className="w-full px-3 sm:p-0">
      <div className="header-crud">
        <h2 className="font-semibold text-3xl">CREAR PRODUCTO</h2>
        <div>
           <button
          className="bg-secondary hover:bg-green text-white p-3 rounded-md tex"
          onClick={() => setshowFormCreate(true)}
        >
          CREAR PRODUCTO
        </button>
        <button
          className="bg-orange hover:bg-green text-white p-3 rounded-md tex ml-2"
          onClick={() => setshowFormCreate(true)}
        >
          CREAR CATEGORIA
        </button>
        </div>
       
      </div>
      {!showFormCreate ? (
        <section className="flex px-3 py-3 w-full ml-auto mr-auto flex-col justify-center sm:justify-around form-create-product sm:p-14">
          {productList.map((item) => (
            <div className="w-full flex flex-row justify-between" key={item.id}>
              <div className="flex flex-row items-center">
                <img
                  src={item.product_image || notImg}
                  alt={item.product_name}
                  className="img-products-list"
                />
                <p className="font-medium text-lg">{item.product_name}</p>
                <p className="ml-5 text-base truncate">{item.description}</p>
              </div>

              <div className="flex flex-row items-center">
                <p className="font-medium text-lg mr-10">{item.product_price}</p>
                <button className="w-12 h-12 mx-5 flex justify-center items-center" onClick={()=>handlerDelete(item.id)}>
                  <FaTrash />
                  
                </button>
                <button className="w-12 h-12 mx-5 flex justify-center items-center" onClick={()=>{setProductSelecte(item); setShowupdate(true)}}>
                <FaEdit />
                </button>
              </div>
            </div>
          ))}
        </section>
      ) : null}
      {showFormCreate ? (
        <section className="flex px-3 w-full ml-auto mr-auto flex-col justify-center sm:flex-row sm:justify-around form-create-product sm:p-14">
          <div className="flex flex-col justify-start items-center">
            <div className="flex flex-col w-full my-10">
              <label className="text-lg">Nombre:</label>
              <input
                className="inputs-form border-zinc-400"
                placeholder="Nombre del producto"
                value={product_name}
                onChange={(e)=> setproduct_name(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full my-10">
              <label className="text-lg">Precio:</label>
              <input
                className="inputs-form border-zinc-400"
                placeholder="Precio del producto"
                value={product_price}
                onChange={(e)=> setproduct_price(e.target.value)}
              />
            </div>
            <select
             onChange={handleSelectChange}
              className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 block w-full leading-5 focus:outline-none focus:bg-white focus:border-blue-500"
            >
              {catregoryList.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name_category}
                </option>
              ))}
            </select>
            <div className="flex flex-col w-full my-10">
              <label className="text-lg">Descripcion:</label>
              <textarea
                className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 block w-full leading-5 focus:outline-none focus:bg-white focus:border-blue-500"
                value={description}
                onChange={(e)=> setdescription(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full sm:flex-row justify-center items-center">
            <input
              type="file"
              accept="image/*"
              className="bg-terciary mx-3 my-3 text-white p-3 button-save-img"
              onChange={handleFileChange}
            />
              <button
                className="bg-orange mx-3 my-3 text-white p-3 button-save-img-exte"
                onClick={() => setshowFormCreate(false)}
              >
                CANCELAR
              </button>
              <button className="bg-primary mx-3 my-3 text-white p-3 button-save-img-exte" onClick={()=>handlerCreate()}>
                GUARDAR
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center mt-4 ml-3 sm:mt-0">
            <img
              alt="img"
              className="w-auto h-auto img-miniature"
              src={preview || notImg}
            />
          </div>
        </section>
      ) : null}
      { swhoUpdate &&
        <section className="mt-10 flex px-3 w-full ml-auto mr-auto flex-col justify-center sm:flex-row sm:justify-around form-create-product sm:p-14">
        <div className="flex flex-col justify-start items-center">
          <div className="flex flex-col w-full my-10">
            <label className="text-lg">Nombre:</label>
            <input
              className="inputs-form border-zinc-400"
              placeholder="Nombre del producto"
              value={productSelecte.product_name}
              onChange={(e)=> setProductSelecte({...productSelecte, product_name:e.target.value})}
            />
          </div>
          <div className="flex flex-col w-full my-10">
            <label className="text-lg">Precio:</label>
            <input
              className="inputs-form border-zinc-400"
              placeholder="Precio del producto"
              value={productSelecte.product_price}
              onChange={(e)=> setProductSelecte({...productSelecte, product_price:e.target.value})}
            />
          </div>
          <select
            value={productSelecte.category_id}
            onChange={(e)=> setProductSelecte({...productSelecte, category_id:e.target.value})}
            className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 block w-full leading-5 focus:outline-none focus:bg-white focus:border-blue-500"
          >
            {catregoryList.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name_category}
              </option>
            ))}
          </select>
          <div className="flex flex-col w-full my-10">
            <label className="text-lg">Descripcion:</label>
            <textarea
              className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 block w-full leading-5 focus:outline-none focus:bg-white focus:border-blue-500"
              value={productSelecte.description}
              onChange={(e)=> setProductSelecte({...productSelecte, description:e.target.value})}
            />
          </div>
          <div className="flex flex-col w-full sm:flex-row justify-center items-center">
            <input
              type="file"
              accept="image/*"
              className="bg-terciary mx-3 my-3 text-white p-3 button-save-img"
              onChange={handleFileChange}
            />
            <button
              className="bg-orange mx-3 my-3 text-white p-3 button-save-img-exte"
              onClick={onCancel}
            >
              CANCELAR
            </button>
            <button
              className="bg-primary mx-3 my-3 text-white p-3 button-save-img-exte"
              onClick={handleUpdate}
            >
              ACTUALIZAR
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center mt-4 ml-3 sm:mt-0">
          <img
            alt="img"
            className="w-auto h-auto img-miniature"
            src={preview || notImg}
          />
        </div>
      </section>
      }
    </div>
  );
}

export default ProductCrud;
