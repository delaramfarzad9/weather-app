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
import { ImSpinner9 } from "react-icons/im";
import.meta.env.VITE_WEATHER_API_KEY



function App() {
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState(null);
  const [displayCity, setDisplayCity] = useState("London");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeather = async (city) => {
    
    let baseUrl = "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      try{
          setIsLoading(true);   // start loading
    setError(null);
         const cityToFetch = city || cityName;   
    if (!cityToFetch) return;

    const response = await fetch(`${baseUrl}?q=${cityToFetch}&appid=${apiKey}&units=metric`);
    
if(!response.ok){
  throw new Error(`${response.status}-${response.statusText}`);
    }
const data = await response.json();
    setWeather(data);
     setDisplayCity(cityToFetch);
     setCityName("");
  }
    catch(err){setError(err);}
finally{
    setIsLoading(false);   
    
}
  };
useEffect(() => {
  fetchWeather("London");
}, []);
if (isLoading) return <div className="flex flex-row justify-center items-center min-h-screen text-3xl"><ImSpinner9 className="animate-spin mr-2 w-8 h-8"/>
  Loading...</div>;
if (error) return <div>Error: {error.message}</div>;
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
      <div className="w-full  min-h-screen flex flex-col  items-center justify-center mx-auto">
        {/* app  */}
        <section className="bg-white/20 min-h-dvh w-full max-w-xs flex flex-col justify-center items-center sm:max-w-xl md:max-w-5xl  backdrop-blur-md rounded-xl shadow-xl border border-white/30 p-5 m-5 mt-6 md:p-20 md:m-20 md:mt-30">
          {/* search box */}
          <div className="flex flex-row w-full max-w-xs md:max-w-xl justify-between px-4 py-2 border border-white/30 shadow-md rounded-xl font-normal">
            <input
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
              onKeyDown={(e) => {
    if (e.key === "Enter") {
      
      fetchWeather(cityName);
    }
  }}
              type="text"
              className="w-full max-w-sm md:text-2xl text-lg text-gray-300 bg-transparent  focus:placeholder-gray-100 outline-none hover:outline-none "
              placeholder="City name..."
            />
            <button onClick={() => fetchWeather()}
   
            >
              {" "}
              <HiOutlineSearch className="md:w-8 md:h-8 w-7 h-7  hover:text-gray-100 " />
            </button>
          </div>
          {/* city name text */}
          <h1 className="text mt-8 text-lg md:text-3xl font-semibold whitespace-nowrap">
            How's the weather today in
            <span className="ml-2 font-bold  city-name text-indigo-600">{displayCity.replace(/\b\w/g, char => char.toUpperCase()) || "London"}</span>
          </h1>
          {/* temperature & status */}
          <div className=" w-full flex flex-row justify-center gap-4 items-baseline md:mt-10 mt-5 border  border-white/30  shadow-md py-4  rounded-full">
          {/* temp  */}
            <p className="-ml-10  flex flex-row font-manrope temp md:text-7xl text-5xl font-bold ">
              {" "}
              
               {weather?.main ? Math.round(weather?.main?.temp) : "..."}
              <RiCelsiusFill />{" "}
            </p>
            {/* status */}
           <div className="relative">
             <p className="text-2xl  md:text-4xl font-semibold pt-7"> {weather?.weather[0]?.main}</p>
              {/* statis icon */}
            <div className="absolute -right-10 -top-1">
              {getWeatherIcon(weather?.weather[0]?.main)}
            </div>
           </div>
           
          </div>
          {/* cards */}
          <div className="flex max-w-xs flex-wrap md:flex-row flex-col gap-4 justify-center items-center mt-10 md:mt-20">
        
            <InformationBox  Icon={FiWind} details={{title:"Wind Speed", value: weather?.wind?.speed, unit:"km/h"}}/>
        
           
             <InformationBox Icon={TbDroplet} details={{title:"Humidity", value: weather?.main?.humidity, unit:"%"}} />
          
         
              <InformationBox Icon={FaGauge} details={{title:"Pressure", value: weather?.main?.pressure, unit:"hPa"}} />
            
          
        
            <InformationBox Icon={FaGauge} details={{title:"Min Temp", value: weather?.main?.temp_min, unit:"°C"}} />
              <InformationBox Icon={FaGauge} details={{title:"Max Temp", value: weather?.main?.temp_max, unit:"°C"}} />
              <InformationBox Icon={FaGauge} details={{title:"Feels Like", value: weather?.main?.feels_like, unit:"°C"}} />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
