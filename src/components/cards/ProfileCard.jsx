import React, { useEffect, useState } from 'react'

export default function ProfileCard() {
    const [size, setSize] = useState(100);
    useEffect(()=>{

    },[size])
  return (
    <div className={`w-[${size*2}px] h-[${size}px] rounded-xl shadow-xl hover:scale-1.5 flex items-center justify-around pointer`}  onClick={()=> setSize((prev)=>prev+100)}>
      <div className='bg-gray-300 rounded-[50%] w-[30%] h-[100%]'>
      </div>
      <div className='flex flex-col gap-3 text-xl font-semibold text-black'>
        <p>Pratham Ck</p>
        <p>19 Year old</p>
        <p>Puttur, karnataka</p>
      </div>
    </div>
  )
}
