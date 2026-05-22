import React from 'react'
import Rightcardcontent from './rightcardcontent'
const Rightcard = (props) => {
  console.log(props)
  return (
    <div className="h-full shrink-0 overflow-hidden relative w-60  rounded-2xl   ">
     <img src={props.img} alt="image" className='h-full w-full  object-cover' /> 
     <Rightcardcontent  id={props.id} tag={props.tag} color={props.color} />
    </div>
  )
}


export default Rightcard
