/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [term, setTerm] = useState("Jakarta");
  const [data, setData] = useState({});
  const prayerTime = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

  useEffect(() => {
    fetch(`http://api.aladhan.com/v1/timingsByAddress?address=${term}`)
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, [term]);
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5 bg-[url('./assets/bg-pray.jpg')] bg-cover text-white">
      <div className="absolute top-5 flex w-full flex-col items-center justify-between gap-3">
        <div className="flex w-full justify-between px-[70px] text-[#e3e6e3]">
          <div className="">
            <div className="">
              {data.date && data.date.gregorian.weekday.en}
            </div>
            <div className="">{data.date && data.date.readable}</div>
          </div>
          <div className="">{term}</div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setTerm(input);
            setInput("");
          }}
        >
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Search Prayer Time by City"
            className="w-[250px] rounded-full px-4 py-2 text-[14px] text-slate-400 outline-none focus:italic focus:shadow-lg"
          />
          <input type="submit" value="" />
        </form>
      </div>
      <div>
        <ul className="flex w-[200px] flex-col rounded-xl bg-[#0d0d0d] py-2">
          {data &&
            prayerTime.map((p) => {
              return (
                <li className="flex justify-between p-2 odd:text-[#26a767] even:text-[#dbdbd9]">
                  <div>{p}</div>
                  <div className="font-bold">
                    {data.timings && data.timings[`${p}`]}
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
