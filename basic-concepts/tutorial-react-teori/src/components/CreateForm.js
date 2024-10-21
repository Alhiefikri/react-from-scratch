import React from "react";
import { useState } from "react";

const CreateForm = ({ onCreate }) => {
  const initialState = {
    nama: "",
    hobby: "",
    agama: "",
  };
  const [data, setData] = useState(initialState);
  const { nama, hobby, agama } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    // sebelum logic atau inisiasi skrip di onsubmit harus e.preventDefault dulu
    onCreate(data);
    setData(initialState);
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nama</label>
        <input type="text" onChange={handleChange} value={nama} name="nama" />
        <label htmlFor="">Hobby</label>
        <input type="text" onChange={handleChange} value={hobby} name="hobby" />
        <label htmlFor="">Agama</label>
        <input type="text" onChange={handleChange} value={agama} name="agama" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default CreateForm;
