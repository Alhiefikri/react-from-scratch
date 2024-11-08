import ProductList from "./components/ProductList";
import ProductCreate from "./components/ProductCreate";
import "./App.css";
import { useContext, useEffect, useState } from "react";
import ProductContext from "./context/products";

const App = () => {
  const [count, setCount] = useState(0)
  const { fetchProducts } = useContext(ProductContext);
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div clasName="app-title">Hello World</div>
      <div className="app-title">Belanja Mobil</div>
      <ProductCreate />
      <ProductList />
    </>
  );
};

export default App;
