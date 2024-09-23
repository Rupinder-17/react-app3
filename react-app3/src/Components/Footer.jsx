
import React from 'react'
import { MdOutlineAdminPanelSettings } from "react-icons/md";

export const Footer = () => {
  return (
    <div className='flex justify-between px-5 text-sm items-center text-gray-500 '>
        <div  className='flex items-center gap-2'>
            <MdOutlineAdminPanelSettings className='text-black text-lg'/>
            Admin Panal
        </div>
        <div className='flex gap-9 py-2'>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
            2023 Your Company .All rights reserved
        </div>
    </div>
  )
}
