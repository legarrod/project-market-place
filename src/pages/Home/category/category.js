import React from "react";
import "./category.css";
import beer from "./img/beer.png";
import bread from "./img/bread.png";
import fruit from "./img/fruit.png";
import meats from "./img/meats.png";
import clean from "./img/clean.png";
import twiter from "./img/twitter.png"
import ig from "./img/ig.png"
import facebook from "./img/facebook.png"

const category = () => {
  return (
    <>
      <h1 className="pt-40 subtitle">Categorias</h1>
      <div class="grid grid-cols-5 pt-20 pb-20 container-p">
        <div class="m-auto">
        <img src={beer} class="m-auto "  />
        <p>Licores</p>
        </div>
        <div>
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
           </div>

      
       
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
        <p className="icon-gf-p" >Instagram</p>
        </div>
        <div> 
          <img src={facebook} class="m-auto icon-face" />
          <p className="icon-face-p" >Facebook</p>
        </div>
        </div>
    </>
  );
};

export default category;
