import React, { useState } from "react";
// import Perkenalan from "./components/Perkenalan";
import CreateForm from "./components/CreateForm";
import "./App.css";

const App = () => {
  const [nama, setNama] = useState("");
  const onCreate = (data) => {
    console.log("ini console dari parent component", data);
    setNama(data.nama);
  };

  return (
    <>
      {nama}
      <CreateForm onCreate={onCreate} />
    </>
  );
};

export default App;
