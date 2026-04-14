import "./App.css";
import { Routes, Route } from "react-router-dom";

import Category from "./components/Category";
import Product from "./components/Product";
import CreateProductPage from "./components/CreateProductPage";
import EditProductPage from "./components/EditProductPage";
import EditCategoryPage from "./components/EditCategoryPage";
import CreateCategoryPage from "./components/CreateCategoryPage";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/products" element={<Product />} />
        <Route path="/create-product" element={<CreateProductPage />} />
        <Route path="/edit-product/:id" element={<EditProductPage />} />
        <Route path="/create-category" element={<CreateCategoryPage />} />
        <Route path="/edit-category/:id" element={<EditCategoryPage />} />
      </Routes>
    </>
  );
}

export default App;
