import "./assets/css/App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/footer/footer";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import ProductCrud from "./pages/ProductCrud";

import Header from "./components/header/header";

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

function App() {
  return (
    <div>
      <nav className='w-full flex flex-row px-16 justify-end header-hight'>
        <ul className=' flex flex-row h-full items-center'>
          <li className='mx-3'>
            <Link to="/">Inicio</Link>
          </li>
      
          <li className='mx-3'>
            <Link to="/product-list">Tienda</Link>
          </li>
          <li className='mx-3'>
            <Link to="/product-crud">Gestionar productos</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <div className="body-rou">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="product-list" element={<ProductList />} />
          <Route path="product-crud" element={<ProductCrud />} />
          {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
