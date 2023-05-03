import { useState, useEffect } from "react";
import axios from "axios";

function Product() {
  const [loading, setLoading] = useState(true);
  const query = window.location.search
  const [product, setproduct] = useState([]);
  
  async function getProducts() {
    try {
      const { data } = await axios.get(
        `http://localhost:3002/api/v1/products/product?search=${query.replace("?", "")}`
      );
      setproduct(data[0]);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loading && getProducts();
  }, [loading]);

    return (
      <div>
       <div className="flex flex-col sm:flex-row mt-10 px-5">
        <div className="w-full sm:w-1/2 flex justify-center parent">
        <div className="child image-pdp-wrapper image-pdp">
          <img src={product?.product_image} alt={product?.product_name}/>
        </div>
        </div>
        
       
        <div className="flex flex-col w-full sm:w-1/2">
          <h2 className="font-semibold text-5xl my-5">{product?.product_name}</h2>
          <p className="text-lg my-1">{product?.product_price}</p>
          <p className="text-lg my-5">{product?.description}</p>
          <button className="text-3xl font-medium bg-secondary my-5 text-white rounded-xl py-4">
            COMPRAR
          </button>
        </div>
       </div>
      </div>
      
    );
  }
  
  export default Product;
  