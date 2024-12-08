const Weather = () => {
  let temperature = 27;

  if (temperature < 15) {
    return <p>Its Cold</p>;
  } else if (temperature >= 15 && temperature <= 25) {
    return <p>Its nice outside</p>;
  } else if (temperature >= 25) {
    return <p>Its Hot Outside</p>;
  }
};
export default Weather;
