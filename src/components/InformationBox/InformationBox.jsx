import React from 'react'

export default function InformationBox({Icon}) {
  return (
    <div className="flex flex-1 flex-col gap-2 justify-center items-center border border-white/30 border-sm  p-4 shadow-md rounded">
<div >
    <Icon className=" w-10 h-10 " />
</div>
<p class="text-xl font-semibold">humidity</p>
<div class="flex flex-row justify-center items-center gap-2"><span class="humidity-percent text-2xl font-semibold "> </span><span class="font-medium">%</span></div>
</div>
  )
}
