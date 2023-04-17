import icono1 from "../assets/img/Aseo.jpg";
import icono2 from "../assets/img/Frutas y Verduras.jpg";
import icono3 from "../assets/img/Carnes.jpg";
import icono4 from "../assets/img/Lacteos y Granos.jpg";
import icono5 from "../assets/img/Licores.jpg";

function ProductList() {
  return (
    <section className="bg-gray-background">
      <div className="flex flex-wrap justify-between w-full">
        <div className="flex flex-row bg-secondary h-15 p-2 rounded width-custom">
          <img src={icono1} alt="" className="h-11 w-11 mt-3 ml-1 mr-10" />
          <p className="flex flex-row items-center font-bold text-terciary text-2xl">
            Aseo
          </p>
        </div>
        <div className="flex flex-row bg-secondary h-15 p-2 rounded width-custom">
          <img src={icono2} alt="" className="h-11 w-11 mt-3 ml-1 mr-10" />
          <p className="flex flex-row items-center font-bold text-terciary text-2xl">
            Frutas y Verduras
          </p>
        </div>
        <div className="flex flex-row bg-secondary h-15 p-2 rounded width-custom">
          <img src={icono3} alt="" className="h-11 w-11 mt-3 ml-1 mr-10" />
          <p className="flex flex-row items-center font-bold text-terciary text-2xl">
            Carnes
          </p>
        </div>
        <div className="flex flex-row bg-secondary h-15 p-2 rounded width-custom">
          <img src={icono4} alt="" className="h-11 w-11 mt-3 ml-1 mr-10" />
          <p className="flex flex-row items-center font-bold text-terciary text-2xl">
            Lacteos y Granos
          </p>
        </div>
        <div className="flex flex-row bg-secondary h-15 p-2 rounded width-custom">
          <img src={icono5} alt="" className="h-11 w-11 mt-3 ml-1 mr-10" />
          <p className="flex flex-row items-center font-bold text-terciary text-2xl">
            Licores
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-between w-full">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((index) => (
          <div
            key={index}
            className="h-80 border border-gray-light w-56 my-3 mx-3 p-2"
          >
            <img
              src="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="flex flex-row justify-center image-cart mx-20 my-5"
            />
            <p className="font-bold text-2xl my-2 ml-2">Lorem ipsum</p>
            <p className=" font-bold text-primary text-xl my-2 ml-2">$100</p>
            <p className="text-lg my-2 ml-2">lorem ipsum</p>
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
