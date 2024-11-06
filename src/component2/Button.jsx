import React from 'react'

 const Button = ({onHandle}) => {
    console.log("button: button render");
    
  return (
    <div>
      <button onClick={onHandle} className='bg-blue-500 px-11 rounded-lg py-2 font-semibold text-white '>Click</button>
    </div>
  )
}
export default React.memo(Button)
