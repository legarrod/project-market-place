import React, { useState, useEffect } from "react";
import "./category.css";
import beer from "./img/beer.png";
import bread from "./img/bread.png";
import fruit from "./img/fruit.png";
import meats from "./img/meats.png";
import clean from "./img/clean.png";
import notImg from "./img/not.jpg";
import twiter from "./img/twitter.png";
import ig from "./img/ig.png";
import facebook from "./img/facebook.png";
import axios from "axios";

const Category = () => {
  const [loading, setLoading] = useState(true);
  const [catregoryList, setcatregoryList] = useState([]);

  async function getCategoryes() {
    try {
      const { data } = await axios.get(
        "http://localhost:3002/api/v1/products/all-categories"
      );
      setcatregoryList(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loading && getCategoryes();
  }, [loading]);

  return (
    <>
      <h1 className="pt-40 subtitle">Categorias</h1>
      <div class="grid grid-cols-5 pt-20 pb-20 container-p">
        {catregoryList.map((item) => (
          <div key={item.id} class="m-auto">
            <img
              src={item.image_category || notImg}
              class="m-auto "
              alt={item.name_category}
            />
            <p>{item.name_category}</p>
          </div>
        ))}

        {/* <div>
        <img src={bread} class="m-auto  " />
        <p>Harinas y lacteos</p>
        </div>
        <div> 
          <img src={fruit} class="m-auto  " />
          <p>Frutas y verduras</p>
        </div>
        <div>
          <img src={meats} class="m-auto  " />
          <p>Carnes Frías</p>
          </div>
        <div>
           <img src={clean} class="m-auto   "  />
           <p>Limpieza</p>
           </div> */}
      </div>
      <button className="bg-green text-white btn-category">
        Ver todos los productos!
      </button>

      <h1 className="pt-40 subtitle-icon">Encuentranos en:</h1>
      <div class="grid grid-cols-3 pt-20 pb-20 container-p-icon">
        <div class="m-auto">
          <img src={twiter} class="m-auto" />
          <p>Twitter</p>
        </div>
        <div>
          <img src={ig} className="m-auto icon-ig" />
          <p className="icon-gf-p">Instagram</p>
        </div>
        <div>
          <img src={facebook} class="m-auto icon-face" />
          <p className="icon-face-p">Facebook</p>
        </div>
      </div>
    </>
  );
};

export default Category;
