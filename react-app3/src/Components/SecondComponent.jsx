import React, { useState } from 'react'
import { Button } from './ui/button'

export const SecondComponent = () => {
  const [button, setButton] = useState(false)
  // const [button, setButton] = useState({
  //   name:"",
  //   age: 10
  // })
  return (
    <div>
      
      <Button onClick={()=>{
        setButton(!button)
      }} >click</Button>
       {button && (
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis autem
          rem corporis qu sit totam possimus tempora, porro veniam esse at
          quisquam qui voluptas.
        </p>
      )} 
    </div> 
  );
}
