import React from 'react'

 const Title = () => {
    console.log("title: title render");
    
  return (
    <div>
        <h1 className='text-3xl font-medium text-amber-700 text-center underline'>CallBackHook Practice</h1>
    </div>
  )
}
export default React.memo(Title)
