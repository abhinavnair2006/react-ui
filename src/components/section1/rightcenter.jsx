import React from 'react'
import Rightcard from './rightcard'
const Rightcenter = (props) => {
  return (
    <div id='right' className="h-full flex overflow-x-auto flex-nowrap gap-4 w-2/3 mb-4"> 
      {props.users.map((elem, idx) => {
        return (
          <Rightcard
            key={idx}
            id={idx + 1}
            img={elem.img}
            tag={elem.tag}
            color={elem.color}
          />
        )
      })}
    </div>
  )
}

export default Rightcenter
