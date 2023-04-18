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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
        rel="stylesheet"
      />
      <Header />
 
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
