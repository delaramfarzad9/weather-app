import React from 'react'

export default function InformationBox({Icon,
  details:{
    title,
    value,
    unit
  }
}) {
  return (
    <div className="flex shrink-0 flex-col  gap-2 justify-center items-center border  border-white/30 rounded-lg p-4 shadow-md ">
<div >
    <Icon className="md:w-10 md:h-10 w-8 h-8 " />
</div>
<p className="md:text-xl text-lg font-medium">{title}</p>
<div className="flex flex-row justify-center items-center gap-2"><span className=" md:text-2xl text-lg font-semibold "> </span><span className="font-medium font-manrope">{value}{"  "}{unit}</span></div>
</div>
  )
}
