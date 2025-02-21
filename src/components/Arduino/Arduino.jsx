

   import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function SmallArduino() {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   return (
      <>
      <div className="xs:bg-gray-900 xs:h-10 xs:w-10 xs:mt-2 xs:ml-4 xs:rounded">
      <button
      className="xs:block xl:hidden xs:absolute xs:z-30 xs:top-[8px] xs:left-[15px] xs:text-gray-100
      xl:hidden xs:relative xs:top-4 xs:right-4 xs:text-gray-500"
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
   >
     
      {isSidebarOpen ? "✕" : "☰"}
   </button>
   </div>
      <div className="xs:flex xs:flex-col xs:flex-row xs:h-screen xs:mt-[10px] 
      xl:flex xl:flex-col xl:flex-row xl:h-screen xl:mt-[-60px] xl:ml-4" >
         {/* Sidebar */}
        
         <div
            className={` xs:fixed xs:inset-0 xs:ml- xs:bg-white xs:relative xs:w-72 xs:h-fit xs:mt- xs:bg-white xl:rounded-xl xs:shadow-md xs:p-4
             xs:transition-transform ${isSidebarOpen ? "xs:translate-x-0" : "xs:-translate-x-full"} xs:translate-x-0}
 

            xl:fixed xl:inset-0 xl:bg-white xl:relative xl:w-72 xl:h-fit xl:mt-24 xl:bg-white xl:rounded-xl xl:shadow-md xl:p-4 transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} xl:translate-x-0`}
         >
            
            <h1 className="xs:text-2xl xs:font-bold xs:text-gray-800 xs:text-center xs:mb-4 xs:mb-6
            xl:text-2xl xl:font-bold xl:text-gray-800 xl:text-center xl:mb-4 xl:mb-6">
               All Experiments
            </h1>
            <ul className="xs:space-y-4
            xl:space-y-2">
               {Array.from({ length: 19 }).map((_, index) => {
                  const experiment = `Arduino With ${[
                     "SOIL MOISTURE SENSOR",
                     "DC MOTOR",
                     "TRAFFIC LIGHT",
                     "PIR SENSOR",
                     "One Led With One Ultrasonic Sensor",
                     "ULTRASONIC and LED",
                     "SEVEN SEGMENT DISPLAY",
                     "LCD",
                     "LCD INTERFACING",
                     "LED",
                     "SERVO MOTOR",
                     "One GEAR MOTOR",
                     "OLED",
                     "One Led and One Push Button",
                     "PUSH and LED",
                     "DHT22 SENSOR",
                     "DHT22 SENSOR and LCD DISPLAY",
                     "Oled and Push Button",
                     "Ultrasonic Sensor",
                  ][index]}`;

                  return (
                     <NavLink
                        key={index}
                        to={`ex${index + 1}`}
                        className={({ isActive }) =>
                           `xs:block xs:px-4 xs:py-2 xs:rounded-md xs:text-sm ${isActive ? "xs:text-blue-950":"xs:text-gray-900 xs:hover-bg-gray-200"}
                        xl:block xl:px-4 xl:py-2 xl:rounded-md xl:text-sm ${isActive ? "xl:text-blue-950 bg-gray-100" : "xl:text-gray-900 hover:bg-gray-200"}`
                        }
                     >
                        {experiment}
                     </NavLink>
                  );
               })}
            </ul>
         </div>

         {/* Main Content */}
         <div>
            <Outlet />
         </div>
      </div>
      </>
   );
}

