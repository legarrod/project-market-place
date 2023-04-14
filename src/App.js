import './assets/css/App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import ProductCrud from './pages/ProductCrud'

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
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
      
          <li>
            <Link to="/product-list">Tienda</Link>
          </li>
          <li>
            <Link to="/product-crud">Gestionar productos</Link>
          </li>
        </ul>
      </nav>

      <hr />
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
    
  );
}

export default App;
