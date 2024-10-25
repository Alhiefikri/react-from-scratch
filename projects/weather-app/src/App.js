import { useEffect, useState } from "react";
import "./App.css";
import humidity from "./assets/humidity.png";
import rain from "./assets/rain.png";
import wind from "./assets/wind.png";

function App() {
  const [input, setInput] = useState("");
  const [term, setTerm] = useState("jakarta");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=51e034840776cf8ea4fe0b9087c468a2&units=metric`,
    )
      .then((res) => res.json())
      .then((datas) => setData(datas));
  }, [term]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div
        className={`${data && data.weather[0].icon.slice(-1) === "n" ? "bg-night" : "bg-day"} h-[600px] w-[500px] rounded-[10px] p-8`}
      >
        <div className="flex items-center justify-between gap-3">
          <input
            onChange={(e) => setInput(e.target.value)}
            className="w-full rounded-full px-4 py-2 text-[14px] text-slate-400 outline-none focus:italic focus:shadow-lg focus:shadow-slate-500"
            type="text"
            placeholder="Search"
          />
          <div
            onClick={() => {
              setTerm(input);
              setInput("");
            }}
            className="rounded-full bg-white p-2 hover:scale-110"
          >
            <svg
              className="w-[20px] text-slate-400"
              data-name="Layer 1"
              fill="currentcolor"
              id="Layer_1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <path d="M16.57,16.15A9,9,0,1,0,15,17.46h0l6.25,6.25,1.42-1.42Zm-3-.14a7.07,7.07,0,1,1,1.56-1.28A6.88,6.88,0,0,1,13.59,16Z" />
            </svg>
          </div>
        </div>
        <div className="mt-5 flex justify-center">
          {data && (
            <img
              width={150}
              height={150}
              src={require(`./assets/${data.weather[0].icon}.png`)}
              alt=""
            />
          )}
        </div>
        <div className="mt-1 flex justify-center text-[70px] text-white">
          {data && data.main.temp} &deg; C
        </div>
        <div className="mt-[-10px] flex flex-col items-center justify-center text-white">
          <div className="text-[40px] font-bold">{data && data.name}</div>
          <div className="text-[24px]"> Precipitations</div>
          <div className="flex gap-6">
            <span>Min: {data && data.main.temp_min} &deg; C </span>
            <span>Max: {data && data.main.temp_min} &deg; C </span>
          </div>
        </div>
        <div className="relative mt-10 flex justify-between rounded-full p-4">
          <div className="absolute bottom-0 left-0 right-0 top-0 w-full rounded-full bg-[#001026] opacity-30"></div>
          <div className="z-10 flex gap-2 text-[20px] text-white">
            <img width={30} src={rain} alt="" />
            <span>{data && data.clouds.all} %</span>
          </div>
          <div className="z-10 flex gap-2 text-[20px] text-white">
            <img width={30} src={humidity} alt="" />
            <span>{data && data.main.humidity} %</span>
          </div>
          <div className="z-10 flex gap-2 text-[20px] text-white">
            <img width={30} src={wind} alt="" />
            <span>{data && data.wind.speed}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
