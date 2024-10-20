import { useCounter } from '@/hooks/useCounter';
import React, { useState } from 'react'

export const CustomHook = () => {
   const [counter, increment, decrement]= useCounter(0) 
  return (
    <div>
      <button
        onClick={increment}
        className="text-4xl text-center text-white bg-gray-600 px-5"
      >
        +
      </button>
      <span className='px-7'> {counter}</span>
      <button
        onClick={decrement}
        className="text-4xl text-white text-center bg-gray-600 px-5"
      >
        -
      </button>
    </div>
  );
}
