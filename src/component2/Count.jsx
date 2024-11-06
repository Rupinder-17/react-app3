import React from 'react'

 const Count = ({value, type}) => {
    console.log("value", value);
    
  return (
    <div>
        <p className='text-xl'>{type} {value}</p>
    </div>
  )
}
export default React.memo(Count)
