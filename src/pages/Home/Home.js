import Carrusel from "./slider/carrusel";
import Category from "./category/category";

const Home = () => {
  return (
    <div className="flex flex-col w-full center" >
      <Carrusel />
      <Category />
    </div>
  );
};

export default Home;
