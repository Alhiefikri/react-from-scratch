import React, { useContext } from "react";
import { useState } from "react";
import ProductContext from "../context/products";

const ProductCreate = () => {
  const { onCreateProduct } = useContext(ProductContext);
  const initialState = {
    nama: "",
    deskripsi: "",
    imageUrl: "",
  };
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { nama, deskripsi, imageUrl } = formData;
  const handleShow = () => {
    setShowForm(!showForm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateProduct(formData);
    setFormData(initialState);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="product-create">
      <div className="toggle-add">
        <button onClick={handleShow} className="edit-input-submit add-toggle">
          {showForm ? "Close Form" : "Add Product"}
        </button>
      </div>
      {showForm && (
        <form onSubmit={handleSubmit} action="" className="form">
          <div className="form-add-title">Add Product</div>
          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              name="nama"
              value={nama}
              placeholder="Nama Product"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              name="deskripsi"
              value={deskripsi}
              placeholder="Deskripsi Product"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              name="imageUrl"
              value={imageUrl}
              placeholder="Image Product"
              onChange={handleChange}
            />
          </div>
          <input
            type="submit"
            className="edit-input-submit add"
            value="Submit"
          />
        </form>
      )}
    </div>
  );
};

export default ProductCreate;
