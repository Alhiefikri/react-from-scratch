import "./App.css";
import ProductList from "./components/ProductList";
import { useEffect, useState } from "react";
import { Products } from "./data/Product";
import ProductCreate from "./components/ProductCreate";
import axios from "axios";

import {
  createProductApi,
  deleteProductApi,
  editProductApi,
  fetchProductsApi,
} from "./api/productsAPI";

function App() {
  const [products, setProducts] = useState(Products);
  const fetchProducts = async () => {
    const response = await fetchProductsApi();
    setProducts(response.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const onEditProduct = async (id, data) => {
    const response = await editProductApi(id, data);

    const updatedProducts = products.map((prod) => {
      if (prod.id === id) {
        return { ...prod, ...response.data };
      }
      return prod;
    });
    setProducts(updatedProducts);
  };

  const onCreateProduct = async (product) => {
    const response = await createProductApi(product);

    setProducts([...products, response.data]);
  };

  const onDeleteProduct = async (id) => {
    await deleteProductApi(id);
    const updatedProduct = products.filter((prod) => {
      return prod.id != id;
    });
    setProducts(updatedProduct);
  };
  return (
    <>
      <div className="app-title">Belanja Mobil</div>
      <ProductCreate onCreateProduct={onCreateProduct} />
      <ProductList
        products={products}
        onDeleteProduct={onDeleteProduct}
        onEditProduct={onEditProduct}
      />
    </>
  );
}

export default App;
