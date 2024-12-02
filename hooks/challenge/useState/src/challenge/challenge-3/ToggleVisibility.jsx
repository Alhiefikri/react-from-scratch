import { useState } from "react";

const ToggleVisibility = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          fontSize: "1.2em",
          cursor: "pointer",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        {toggle ? "Hide Text" : "Show Text"}
      </button>
      {toggle && (
        <p
          style={{
            fontSize: "1.1em",
            maxWidth: "600px",
            margin: "0 auto",
            transition: "opacity 0.5s ease",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
          inventore eligendi labore ex aliquid, ipsa quam asperiores recusandae
          rerum aut atque ullam suscipit nostrum soluta deserunt maxime ducimus
          sint iste!
        </p>
      )}
    </div>
  );
};

export default ToggleVisibility;
