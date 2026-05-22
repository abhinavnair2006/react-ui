import React from 'react'
import Leftcenter from './leftcenter'
import Rightcenter from './rightcenter'
const Center = (props) => {
  return (
    <div className="py-12 flex items-center gap-10 h-[90vh]  px-18">
        <Leftcenter />
        <Rightcenter users={props.users} />
    </div>
  )
}

export default Center
