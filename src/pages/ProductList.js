import { useState, useEffect } from "react";
import axios from "axios";
import notImg from "../assets/img/not.jpg";
import icono1 from "../assets/img/Aseo.jpg";
import icono2 from "../assets/img/Frutas y Verduras.jpg";
import icono3 from "../assets/img/Carnes.jpg";
import icono4 from "../assets/img/Lacteos y Granos.jpg";
import icono5 from "../assets/img/Licores.jpg";
import { Link } from "react-router-dom";

function ProductList() {
  const [loading, setLoading] = useState(true);
  const [productList, setproductList] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  async function getProducts() {
    try {
      const { data } = await axios.get(
        "http://localhost:3002/api/v1/products/all"
      );
      console.log(data);
      setproductList(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  const handleClick = (categoryId) => {
    console.log(categoryId);
    setCategoryId(categoryId);
  };

  useEffect(() => {
    loading && getProducts();
  }, [loading]);

  const filteredProductList = categoryId
    ? productList.filter((item) => item.category_id === categoryId)
    : productList;

  return (
    <section className="bg-gray-background">
      <div className="flex flex-wrap justify-between w-full">
        <button
          className="flex flex-row bg-secondary h-15 p-2 rounded width-custom"
          onClick={() => handleClick("Aseo")}
        >
          <img src={icono1} alt="" className="h-11 w-11 mt-3 ml-1 mr-10" />
          <div className="flex flex-row items-center justify-center font-bold text-terciary text-2xl h-full">
            Aseo
          </div>
        </button>
        <button
          className="flex flex-row bg-secondary h-15 p-2 rounded width-custom"
          onClick={() => handleClick("Frutas y Verduras")}
        >
          <img src={icono2} alt="" className="h-11 w-11 mt-3 ml-1 mr-10" />
          <div className="flex flex-row items-center justify-center font-bold text-terciary text-2xl h-full">
            Frutas y Verduras
          </div>
        </button>
        <button
          className="flex flex-row bg-secondary h-15 p-2 rounded width-custom"
          onClick={() => handleClick("Carnes")}
        >
          <img src={icono3} alt="" className="h-11 w-11 mt-3 ml-1 mr-10" />
          <div className="flex flex-row items-center justify-center font-bold text-terciary text-2xl h-full">
            Carnes
          </div>
        </button>
        <button
          className="flex flex-row bg-secondary h-15 p-2 rounded width-custom"
          onClick={() => handleClick("Lacteos y Granos")}
        >
          <img src={icono4} alt="" className="h-11 w-11 mt-3 ml-1 mr-10" />
          <div className="flex flex-row items-center justify-center font-bold text-terciary text-2xl h-full">
            Lacteos y Granos
          </div>
        </button>
        <button
          className="flex flex-row bg-secondary h-15 p-2 rounded width-custom"
          onClick={() => handleClick("Licores")}
        >
          <img src={icono5} alt="" className="h-11 w-11 mt-3 ml-1 mr-10" />
          <div className="flex flex-row items-center justify-center font-bold text-terciary text-2xl h-full">
            Licores
          </div>
        </button>
      </div>

      <div className="flex flex-wrap justify-between w-full">
        {productList.map((item) => (
          <div
            key={item.product_name}
            className="h-80 border border-gray-light w-56 my-3 mx-3 p-2"
          >
            <Link to="/product?manzana">
              <img
                src={item.product_image || notImg}
                alt=""
                className="flex flex-row justify-center image-cart mx-20 my-5"
              />
              <p className="font-bold text-2xl my-2 ml-2">
                {item.product_name}
              </p>
              <p className=" font-bold text-primary text-xl my-2 ml-2">
                {item.product_price}
              </p>
              <p className="text-lg my-2 ml-2">{item.description}</p>
            </Link>
            <button className="flex flex-column items-center bg-primary rounded px-3 py-1 m-4 ml-14 text-terciary text-lg">
              Comprar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;
