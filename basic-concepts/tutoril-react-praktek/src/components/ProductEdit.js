import React from "react";
import { useState } from "react";

const ProductEdit = ({ product, onEditProduct, cancelEdit }) => {
  const initialState = {
    nama: product.nama,
    deskripsi: product.deskripsi,
    imageURL: product.imageURL,
  };
  const [FormData, setFormData] = useState(initialState);
  const { nama, deskripsi, imageURL } = FormData;
  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onEditProduct(product.id, FormData);
  };

  const onCancel = (e) => {
    e.preventDefault();
    cancelEdit();
  };

  return (
    <div className="product-edit">
      <div className="edit-title">Edit Product</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="nama"
            value={nama}
            type="text"
            className="edit-input-text"
            placeholder="Nama Product"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="deskripsi"
            value={deskripsi}
            type="text"
            className="edit-input-text"
            placeholder="Deskripsi Product"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="imageURL"
            value={imageURL}
            type="text"
            className="edit-input-text"
            placeholder="Image Product"
          />
        </div>
        <input
          type="submit"
          className="edit-input-submit save"
          value="Submit"
        />
        <button onClick={onCancel} className="edit-input-submit cancel">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ProductEdit;
