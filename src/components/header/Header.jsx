 import React  from "react";
import LazyLoad from "react-lazyload";
import { NavLink} from "react-router-dom";


export default function Header()
{

   return(
    <>
    
    <LazyLoad>
 
   
      <div className="xs:bg-green-700 xs:h-12 xs:w-full  xs:mt-16  xl:bg-green-700 xl:h-12 xs:ml-1 xl:w-full xl:p-2 xl:ml-0 xl:mt-16 ">
       
  <ul className=" xs:flex xs:p-4 xs:ml-[-20px] xs:text-white  xl:text-sm xs:text-sm xs:items-center 
  xl:flex xl:p-2 xl:text-white ">
  <li className="xs:mb-0 xs:ml-2 xl:mb-0 xl:ml-2">
<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="24px" ><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
</li>   
   <li id='li1' className="   xl:hover:text-gray-900  xs:active:xs:text-black xs:h-16 xs:mt-20 xs:absolute xs:top-0 xs:hover:underline
       xs:mb-0  xs:ml-8 xl:mb-0 xl:ml-8  xl:absolute  
      ">
        
   <NavLink to="/"  className={({isActive})=>`${isActive?"text-gray-950":"text-black-400"}`}> 
  
     
       HOME
       </NavLink>
      </li>
    
     
     
      

     
      <li className="xs:ml-14 xl:ml-3 xs:active:xs:text-black  xl:hover:text-gray-900 xl:absolute xl:left-24" >
      <NavLink to="arduino" className={({isActive})=>` ${isActive?"text-gray-950":"text-black-400"}`}>
          ARDUINO
          </NavLink>
      </li>
      
     

      <li className="xs:ml-4 xl:ml-3  xs:active:xs:text-black xl:hover:text-gray-900  xl:absolute xl:ml-44">
      <NavLink to="raspberry" className={({isActive})=>` ${isActive?"text-gray-950":"text-black-400"}`}> 

      RASPBERRY PI
      </NavLink>
      </li>
       
      
   
      <li className=" xs:ml-4 xl:ml-3 xs:active:xs:text-black xl:hover:text-gray-900 xl:absolute xl:ml-72" >
      <NavLink to="esp" className={({isActive})=>` ${isActive?"text-gray-950":"text-black-400"}`}>
   
         ESP32
         </NavLink>
      </li>
      <li className=" xs:hidden xs:ml-4 xl:ml-3 xs:active:xs:text-black xl:hover:text-gray-900 xl:ml-[320px]" >
      <NavLink to="Electronics" className={({isActive})=>` ${isActive?"text-gray-950":"text-black-400"}`}>
   
         ELECTRONICS
         </NavLink>
      </li>
      <li className=" xs:hidden xs:ml-4 xl:ml-5 xs:active:xs:text-black xl:hover:text-gray-900 " >
      <NavLink to="Electronics" className={({isActive})=>` ${isActive?"text-gray-950":"text-black-400"}`}>
   
         DRONE
         </NavLink>
      </li>
      
  </ul>
      
      </div>
      </LazyLoad>
      </>
    )
}

//import Search from "../Search/Search";   <Search/>