
import { FaGauge } from "react-icons/fa6";
import { TbDroplet } from "react-icons/tb";
import { FiWind } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { RiCelsiusFill } from "react-icons/ri";
import './App.css'
import InformationBox from './components/InformationBox/InformationBox.jsx'

function App() {
 

  return (
    <>
    <section className="bg-white/20 backdrop-blur-md rounded-xl shadow-xl border border-white/30  p-20 m-20">
        {/* search box */}
    <div className="flex flex-row justify-between px-4 py-2 border border-white/30 shadow-xl rounded-lg">
      <input type="text" className="w-full max-w-sm text-2xl  bg-transparent  focus:placeholder-gray-100 outline-none hover:outline-none " placeholder="City name..."/>
    <button className=""> <HiOutlineSearch className="w-8 h-8  hover:text-gray-100 " />
      
      
    </button>
  
    </div>
   {/* city name text */}
    <h1 className="text mt-8 text-3xl">How is the weather today in <span className="font-bold  city-name">...</span></h1>
    {/* temperature */}
    <div className=" h-min flex flex-row justify-center gap-4 items-center mt-10 border  border-white/30 border-sm shadow-xl py-4  rounded-full">
      <p className="temper flex flex-row temp text-7xl font-bold "> <RiCelsiusFill /> </p>
      {/* status */}
      <p className="status  text-4xl font-semibold pt-7"> Cloudy</p>
    </div>
     {/* cards */}
<div className="flex  flex-row flex-nowrap gap-3 justify-center items-center mt-20">
<InformationBox Icon={FiWind} />
<InformationBox Icon={TbDroplet} />
<InformationBox Icon={FaGauge} />
</div>
    </section>
   
    </>
  )
}

export default App
