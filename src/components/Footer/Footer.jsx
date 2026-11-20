import React from "react";

export default function Footer() {
  return (
    <footer className="w-full max-w-2xl text-sm text-gray-300 py-4 px-10 flex flex-row justify-between  items-center  ">
      <span>© 2025 My Weather App</span>

      <div className="flex gap-4">
        <a
          href="https://github.com/delaramfarzad9/weather-app"
          className="transition hover:text-yellow-400"
        >
          GitHub
        </a>
        {/* <a href="https://yourportfolio.com" className="hover:text-rose-500">Portfolio</a> */}
      </div>
    </footer>
  );
}
