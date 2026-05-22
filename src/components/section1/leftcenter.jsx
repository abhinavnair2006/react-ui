import React from 'react'
import 'remixicon/fonts/remixicon.css'
import hero from './hero'
import arrow from './arrow'

const leftcenter = () => {
  return (
    <div className=" h-full  flex flex-col justify-between w-1/3  ">
    {hero()}
    {arrow()}
     
    </div>
  )
}

export default leftcenter
