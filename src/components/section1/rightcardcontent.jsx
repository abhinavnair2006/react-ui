import React from 'react'

const Rightcardcontent = (props) => {
  
  return (
    <div className="absolute top-0 left-0 h-full w-full rounded-2xl flex flex-col justify-between text-2xl font-bold p-4">
        <h3 className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center">{props.id}</h3>
        <div>
            <p className="text-shadow-2xs mb-4 text-sm font-bold text-white ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
            </p>
        
        <div>
        <button style={{backgroundColor:props.color}} className=" text-white py-3 px-6 rounded-full text-sm">{props.tag}</button>
        <button className="bg-blue-600 text-gray-700 py-2 px-5 rounded-full text-sm"> <i className="ri-arrow-right-line"></i> </button>
        </div>
    </div>
    </div>
  )
}

export default Rightcardcontent
