import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import StarRating from "./components/StarRating.jsx";
import { useState } from "react";
import App from "./App.jsx";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie has a rating of {movieRating}</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <StarRating
      maxRating={"sdd"}
      message={["Terrible", "Bad", "OK", "Good", "Great"]}
    />
    <StarRating size={24} color="red" clasName="test" defaultRating={3} />

    <Test /> */}
  </StrictMode>
);
