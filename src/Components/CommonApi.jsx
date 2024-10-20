import React, { useState } from 'react'
import { PostapiData } from './PostapiData'

export const CommonApi = () => {
    const [postData , setPostData] = useState()
  return (
    <div>
        <button onClick={()=>{
            setPostData(<PostapiData />);
        }}>postdata</button>
    </div>
  )
}
