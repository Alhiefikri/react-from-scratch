import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

const App = () => {
  return <div>Selamat Datang di React Tutorial by Alhie</div>;
};

const App2 = () => {
  const name = "Alhie Fikri";
  const age = 25;
  return (
    <div>
      Perkenalkan saya {name} umur saya {age}{" "}
    </div>
  );
};

root.render(<App2 />);
