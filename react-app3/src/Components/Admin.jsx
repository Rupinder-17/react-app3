import React, { useState } from "react";
import { TiHomeOutline } from "react-icons/ti";
import { FaUserGroup } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FiUserCheck } from "react-icons/fi";
import { LuClock } from "react-icons/lu";

export const Admin = () => {
  const [hidemenu , setHideMenu] = useState(false)
  return (
    <div className="flex h-screen ">
      <div className="h-screen w-56 bg-slate-800 text-slate-300 border-r  sticky top-0 px-5 ">
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <div className="flex justify-between">
            <h1 className="text-3xl font-semibold">Admin</h1>
            <span className="text-4xl"><IoReorderThreeOutline/></span>
          </div>
          <div className="flex  items-center gap-3">
            <ul className=" space-y-4 my-5">
              <li className="flex items-center gap-2">
                <TiHomeOutline className=" text-2xl" />
                Dashboard
              </li>
              <li className="flex  flex-col items-center gap-4">
                <div className="flex justify-between  items-center">
                  <div className="flex items-center gap-3">
                    <FaUserGroup />
                    Users
                  </div>
                  { hidemenu ?(<FaAngleDown
                    onClick={() => {
                      setHideMenu(!hidemenu);
                    }}
                    className=" ml-20"
                  />):(
                    <IoIosArrowForward 
                    onClick={()=>setHideMenu(!hidemenu)}
                    className="ml-20"
                    />
                  )}
                </div>
                {hidemenu && (
                  <ul className=" text-white ">
                    <div className="flex items-center gap-2">
                      <FiUserCheck/>
                    <li className="flex items-center">Active users</li>
                    </div>
                    <div className="flex items-center gap-2">
                      <LuClock/>
                    <li className="flex items-center">Pending users</li>
                    </div>
                  </ul>
                )}
              </li>
              <li className="flex items-center gap-3">
                <MdOutlineSettings />
                setting
              </li>
            </ul>
            <h2 className="text-lg"></h2>
          </div>
          <div className="flex items-center justify-between  gap-3">
            <div className="flex items-center gap-3">
              <h3 className="text-lg"></h3>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
