import React from "react";

export default function InformationBox({
  Icon,
  details: { title, value, unit },
}) {
  return (
    <div className="flex w-full bg-white/15 border border-white/10 flex-col gap-2 justify-center items-center rounded-2xl p-4 shadow-md transition duration-300 hover:-translate-y-1 hover:bg-white/25 hover:shadow-xl">
      <div className="text-yellow-300">
        <Icon className="md:w-9 md:h-9 w-7 h-7" />
      </div>
      <p className="md:text-lg text-base font-medium text-gray-200">{title}</p>
      <div className="flex flex-row justify-center items-baseline gap-1">
        <span className="font-bold text-xl md:text-2xl text-yellow-400 font-manrope">
          {value}
        </span>
        <span className="font-semibold text-sm md:text-base font-manrope">
          {unit}
        </span>
      </div>
    </div>
  );
}
