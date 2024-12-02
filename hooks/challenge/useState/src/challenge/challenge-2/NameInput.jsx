import { useState } from "react";

const NameInput = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => setName(e.target.value);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Name Here"
        style={{
          padding: "10px",
          fontSize: "1.2em",
          margin: "10px",
          borderRadius: "5px",
        }}
      />
      <h1>{name ? name : "Please enter your name"}</h1>{" "}
      {/* Validasi jika kosong */}
    </div>
  );
};

export default NameInput;
