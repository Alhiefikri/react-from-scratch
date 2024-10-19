import "./App.css";

const ProductCard = () => {
  return (
    <div className="card">
      <img
        style={{
          width: "100%",
          height: "200px",
          borderRadius: "10px 10px 0px 0px",
        }}
        src="https://images.unsplash.com/photo-1551830820-330a71b99659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTQ2MDgwOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
        alt=""
      />
      <div className="container">
        <h4>
          <b>Ford</b>
        </h4>
        <p>Mobil For adalah mobil yang sangat bagus</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="cards">
      <ProductCard />
    </div>
  );
}

export default App;
