import React, { useEffect } from 'react'
import { useState } from 'react';
import { memo } from 'react'

 const Input = ({onpress,   value}) => {

    const [inputValue, setInputValue] = useState("")
    console.log("input", inputValue);
    
    const handleInput = (e)=>{
        setInputValue(e.target.value)
        // onpress(e)
    }
    useEffect(()=>{
       console.log("input", value);
       
   },[])
   
    
  return (
    <div>
        <input type="text"  className='bg-slate-400' onChange={onpress} value={value}/>
    </div>
  )
}
export default memo (Input)
