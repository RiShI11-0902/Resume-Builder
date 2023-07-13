import React, { useEffect, useState } from 'react'

const TextField = (props) => {
    const [value, setValue] = useState(props.value)

    useEffect(() => {
        let timeOut;
        timeOut = setTimeout(() => {
            props.onChange(value)
        }, 1000);
        return ()=>{
            clearTimeout(timeOut)
        }
    //   console.log(value);
    }, [value])
  return (
    <>
         <input className='bg-blue-400 border border-blue-500 text-white  placeholder-white  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 ml-10 p-2.5 ' type="text" value={value} placeholder={props.placeholder} id={props.id}  onChange={(e)=>setValue(e.target.value)} />
    </>
  )
}

export default TextField