import "./assets/css/App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import ProductCrud from "./pages/ProductCrud";
import wishlisticon from './assets/img/Vector.png'
import carticon from './assets/img/Cart1.png'

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
      <nav className="flex flex-row justify-between py-4 max-nav">
        <div className="flex flex-row items-center">
          <li className=" decoration-slice ">
            <Link to="/" className="styles-logo">
              Exclusive
            </Link>
          </li>
        </div>
        <ul className="hidden sm:block flex flex-row items-center ">
          <li className="mx-5">
            <Link to="/">Inicio</Link>
          </li>

          <li className="mx-5">
            <Link to="/product-list">Tienda</Link>
          </li>
          <li className="mx-5">
            <Link to="/product-crud">Gestionar productos</Link>
          </li>
        </ul>
        <div className="hidden sm:block flex flex-row items-center">
          <div className="input-wrapper">
          <input
            placeholder="Que estas buscando?"
            className="input-search-nav"
          />
          <svg xmlns="http://www.w3.org/2000/svg" class="input-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
          </svg>
          </div>
         
          <img src={wishlisticon} alt="WishList" className="img-icon mx-2" width={20} height={20}/>
          <img src={carticon} alt="Cart" className="img-icon mx-2" width={20} height={20}/>
        </div>
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
   
    </div>
  );
}

export default App;
