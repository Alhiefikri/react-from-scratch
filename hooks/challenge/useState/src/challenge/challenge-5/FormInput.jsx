import { useState } from "react";

const FormInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Both fields are required!");
      return;
    }
    alert(`Name: ${name}, Email: ${email}`);
    setName(""); // Reset input setelah submit
    setEmail(""); // Reset email setelah submit
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Input your name here"
            style={{
              padding: "10px",
              fontSize: "1.2em",
              marginBottom: "20px",
              width: "300px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </label>
        <br />
        <label>
          Email:{" "}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Input your email here"
            style={{
              padding: "10px",
              fontSize: "1.2em",
              marginBottom: "20px",
              width: "300px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </label>
        <br />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "1.2em",
            cursor: "pointer",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginTop: "20px",
          }}
        >
          Submit
        </button>
      </form>
      <h1>Form</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default FormInput;
