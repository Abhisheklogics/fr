import React from "react";
import { NavLink, Outlet } from "react-router-dom";



export default function smallRes()
{
 
  
   
    return(
        <>
         
         
        
       
          
          <div className=" xs:hidden xl:mt-4 xl:ml-6 xl:w-[250px]   xl:p-2 xl:bg-white  xl:rounded-xl xl:shadow-lg ">
          <h1 className=" xl:font-bold xl:text-center "> All Experiments</h1>
     
           <ul className="xl:grid xl:gap-4 xl:ml-4 xl:mt-2 xl:text-sm">
          
          
           
           <NavLink to="res2" className={({isActive})=>`${isActive?"text-red-950":"text-gray-900"}`}>
           <li className=" xl:hover:bg-slate-100">
           Raspberry Pi With LED
           </li>
           </NavLink>
           <NavLink to="res3" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
           <li className=" xl:hover:bg-slate-100">
           Raspberry Pi With DC MOTOR L298D MOTOR Driver
           </li>
           </NavLink>
           <NavLink to="res4" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
           <li className=" xl:hover:bg-slate-100">
           Raspberry Pi With DHT11
           </li >
           </NavLink>
           <NavLink to="res5" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
           
           <li className=" xl:hover:bg-slate-100" >
           Raspberry Pi With Ultrasonic Sensor
           </li>
           </NavLink>
           <NavLink to="res6" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
           <li className=" xl:hover:bg-slate-100">
               Raspberry Pi With PULSE RATE Sensor
           </li>
           </NavLink>
           <NavLink to="res7" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
           <li className=" xl:hover:bg-slate-100">
           Raspberry Pi With PUSH BUTTON
           </li>
           </NavLink>
           <NavLink to="res8" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
           <li className=" xl:hover:bg-slate-100" >
           Raspberry Pi With PIR Sensor
           </li>
           </NavLink>
           <NavLink to="res8" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
           <li className=" xs:text-white xl:hover:bg-slate-100" >
           Raspberry Pi Experiment 8
           </li>
           </NavLink>
            </ul>
          </div>
         
          

        
         <div>
        <Outlet/>
       </div>
       
        </>
    )
}
/* */
            
       