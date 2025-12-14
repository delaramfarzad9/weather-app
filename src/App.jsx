import { FaGauge } from "react-icons/fa6";
import { TbDroplet } from "react-icons/tb";
import { FiWind } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { RiCelsiusFill } from "react-icons/ri";
import "./App.css";
import InformationBox from "./components/InformationBox/InformationBox.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useState,useEffect } from "react";
import { WiCloud, WiDaySunny, WiRain, WiSnow, WiFog } from "react-icons/wi";


function App() {
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState(null);
  const [displayCity, setDisplayCity] = useState("London");

  const fetchWeather = async (city) => {
    let apiKey = "d847dbde60c3a3401aa4fcfc7cd17730";
    let baseUrl = "https://api.openweathermap.org/data/2.5/weather";
       const cityToFetch = city || cityName;   
    if (!cityToFetch) return;

    const response = await fetch(`${baseUrl}?q=${cityToFetch}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    setWeather(data);
     setDisplayCity(cityToFetch);
     setCityName("")
  };
useEffect(() => {
  fetchWeather("London");
}, []);
function getWeatherIcon(condition) {
  if (!condition) return null;

  const text = condition.toLowerCase();

  if (text.includes("cloud")) return <WiCloud className="w-12 h-12" />;
  if (text.includes("rain")) return <WiRain className="w-12 h-12" />;
  if (text.includes("snow")) return <WiSnow className="w-12 h-12" />;
  if (text.includes("clear")) return <WiDaySunny className="w-12 h-12" />;
  
  if (text.includes("fog") || text.includes("mist") || text.includes("haze")) return <WiFog className="w-12 h-12" />;

  // fallback
  return null;
}

  return (
    <>
      <div className="min-h-screen flex flex-col w-1/2 items-center justify-center mx-auto">
        {/* app  */}
        <section className="bg-white/20  backdrop-blur-md rounded-xl shadow-xl border border-white/30  p-20 m-20 mt-30">
          {/* search box */}
          <div className="flex flex-row justify-between px-4 py-2 border border-white/30 shadow-md rounded-xl font-normal">
            <input
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
              onKeyDown={(e) => {
    if (e.key === "Enter") {
      
      fetchWeather(cityName);
    }
  }}
              type="text"
              className="w-full max-w-sm text-2xl text-gray-300 bg-transparent  focus:placeholder-gray-100 outline-none hover:outline-none "
              placeholder="City name..."
            />
            <button onClick={() => fetchWeather()}
   
            >
              {" "}
              <HiOutlineSearch className="w-8 h-8  hover:text-gray-100 " />
            </button>
          </div>
          {/* city name text */}
          <h1 className="text mt-8 text-3xl font-semibold whitespace-nowrap">
            How is the weather today in
            <span className="ml-2 font-bold  city-name text-indigo-600">{displayCity.replace(/\b\w/g, char => char.toUpperCase()) || "London"}</span>
          </h1>
          {/* temperature & status */}
          <div className=" h-min flex flex-row justify-center gap-4 items-center mt-10 border  border-white/30  shadow-md py-4  rounded-full">
          {/* temp  */}
            <p className="-ml-10 flex flex-row font-manrope temp text-7xl font-bold ">
              {" "}
              
               {weather?.main ? Math.round(weather?.main?.temp) : "..."}
              <RiCelsiusFill />{" "}
            </p>
            {/* status */}
           <div className="relative">
             <p className="  text-4xl font-semibold pt-7"> {weather?.weather[0]?.main}</p>
              {/* statis icon */}
            <div className="absolute -right-10 -top-1">
              {getWeatherIcon(weather?.weather[0]?.main)}
            </div>
           </div>
           
          </div>
          {/* cards */}
          <div className="flex  flex-row flex-nowrap gap-3 justify-center items-center mt-20">
            <InformationBox Icon={FiWind} details={{title:"Wind Speed", value: weather?.wind?.speed, unit:"km/h"}}/>
            <InformationBox Icon={TbDroplet} details={{title:"Humidity", value: weather?.main?.humidity, unit:"%"}} />
            <InformationBox Icon={FaGauge} details={{title:"pressure", value: weather?.main?.pressure, unit:"hPa"}} />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
