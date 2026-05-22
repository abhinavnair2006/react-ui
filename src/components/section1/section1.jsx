import React from 'react'
import Navbar from './navbar'
import Center from './center'
const Section1 = (props) => {
console.log(props) 
  return (
    <div className="h-screen w-full font-bold text-3xl bg-white p-8">
      <Navbar />
      <Center users={props.users} />
    </div>
  )
}

export default Section1