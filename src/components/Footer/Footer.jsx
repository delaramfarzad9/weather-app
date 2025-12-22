import React from 'react'

export default function Footer() {
  return (
    
           <footer className="w-screen  text-sm py-4 px-10 flex flex-row justify-between  items-center border-t border-white/30 ">
      <span>© 2025 My Weather App</span>
      
      <div className="flex gap-4">
        <a href="https://github.com/delaramfarzad9/weather-app" className="hover:text-rose-500">GitHub</a>
        {/* <a href="https://yourportfolio.com" className="hover:text-rose-500">Portfolio</a> */}
      </div>
    </footer>
   
  )
}
