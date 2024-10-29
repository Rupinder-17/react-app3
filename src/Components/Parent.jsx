import React, { useEffect } from 'react'
import { useState } from 'react'
import  Input  from './Child2'
import Child1 from './Child1'

export const Parent = () => {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const [inputValue, setInputValue] = useState("")
    
    
    const handleinput = (e)=>{
        setInputValue(e.target.value)
    }
    // console.log(inputValue);
    
    useEffect(()=>{
        console.log("Parent", count1);
        
    },[count1])

    const handleCount = ()=>{
        setCount((prev) => prev + 1);
    }
    const ParentHandle = ()=>{
        setCount1((prev) => prev + 1);
    }
  return (
    <div>
        <button className='bg-red-700 text-white px-3 py-2 rounded-md ' onClick={ParentHandle}>PrentClickButton</button>
        <p>count: {count1}</p>

        <Child1 onpress={handleCount} count={count}/>
        <Input onpress={handleinput } value={inputValue}/>
        

    </div>
  )
}
