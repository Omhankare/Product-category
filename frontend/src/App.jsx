import { useState } from "react";
import "./App.css";
import Category from "./components/Category";
import Product from "./components/Product";
import EditProductPage from "./components/EditProductPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Category />
      <Product />
      <EditProductPage />
    </>
  );
}

export default App;
