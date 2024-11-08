import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

export const UseRef = () => {
    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current.focus()

    },[inputRef])
  return (
    <div className='text-center'>
        <input type="text" name="" id="" className='border border-black  px-2'  ref={inputRef}/>
        {/* <button  className='border border-black px-2 bg-slate-600 text-white' onClick={()=> inputRef.current.focus()}>Focus</button> */}
    </div>
  )
}
