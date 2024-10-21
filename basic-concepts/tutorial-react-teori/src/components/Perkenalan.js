import React from "react";

const Perkenalan = (props) => {
  const handleClick = (nama) => {
    console.log("click" + nama);
  };
  return (
    <div>
      <div>Nama saya adalah {props.nama}</div>{" "}
      <div>Hoby Saya bermain {props.hobby}</div>
      <button onClick={() => handleClick(props.nama)}>Klik ini</button>
    </div>
  );
};

export default Perkenalan;
