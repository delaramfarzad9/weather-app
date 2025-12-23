import React from 'react'

export default function InformationBox({Icon,
  details:{
    title,
    value,
    unit
  }
}) {
  return (
    <div className="flex bg-white/20 flex-col  gap-2 justify-center items-center  rounded-lg p-4 shadow-md ">
<div >
    <Icon className="md:w-10 md:h-10 w-8 h-8 " />
</div>
<p className="md:text-xl text-lg font-medium">{title}</p>
<div className="flex flex-row justify-center items-center gap-2"><span className=" md:text-2xl text-lg font-semibold "> </span><span className="font-medium text-yellow-600 font-manrope">{value}</span><span className="font-medium  font-manrope">{"  "}{unit}</span></div>
</div>
  )
}
