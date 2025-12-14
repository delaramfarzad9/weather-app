import React from 'react'

export default function InformationBox({Icon,
  details:{
    title,
    value,
    unit
  }
}) {
  return (
    <div className="flex flex-1 flex-col gap-2 justify-center items-center border  border-white/30 rounded-lg p-4 shadow-md ">
<div >
    <Icon className=" w-10 h-10 " />
</div>
<p className="text-xl font-medium">{title}</p>
<div className="flex flex-row justify-center items-center gap-2"><span className=" text-2xl font-semibold "> </span><span className="font-medium font-manrope">{value}{"  "}{unit}</span></div>
</div>
  )
}
