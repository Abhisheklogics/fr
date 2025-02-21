import React ,{useState}from "react";
import { NavLink, Outlet  } from "react-router-dom";

export default function Esp() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
     <div className="xs:bg-gray-900  xl:hidden xs:h-10 xs:w-10 xs:mt-2 xs:ml-4 xs:rounded">
      <button
      className="xs:block xl:hidden xs:absolute xs:z-30 xs:top-[8px] xs:left-[15px] xs:text-gray-100
      xl:hidden xs:relative xs:top-4 xs:right-4 xs:text-gray-500"
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
   >
     
      {isSidebarOpen ? "✕" : "☰"}
   </button>
   </div>
     
        <div
            className={`  xs:fixed  xl:ml-4 xl:mt-[20px] xs:inset-0 xs:ml- xs:bg-white xs:relative xs:w-72 xs:h-fit xs:mt- xs:bg-white xl:rounded-xl xs:shadow-md xs:p-4
             xs:transition-transform ${isSidebarOpen ? "xs:translate-x-0" : "xs:-translate-x-full"} xs:translate-x-0}
 

            xl:fixed xl:inset-0 xl:bg-white xl:relative xl:w-72 xl:h-fit xl:mt-24 xl:bg-white xl:rounded-xl xl:shadow-md xl:p-4 transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} xl:translate-x-0`}
         >
          <h1 className="text-xl font-bold text-center text-gray-800 mb-4">
            All Experiments
          </h1>
          <ul className="space-y-2 xl:ml-4">
            {[
              { to: "Esp2", text: "ESP With Dht11 Sensor" },
              { to: "Esp3", text: "ESP With HC-SR04 Ultrasonic Sensor" },
              { to: "Esp4", text: "ESP With Sound Sensor" },
              { to: "Esp5", text: "ESP with HW-040 Potentiometer" },
              { to: "Esp6", text: "ESP with IR Receiver" },
              { to: "Esp7", text: "ESP with Servo Motor" },
              { to: "Esp8", text: "ESP Experiment 8" },
              { to: "Esp9", text: "ESP Experiment 9" }
            ].map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md text-sm xl:w-60 ${ 
                    isActive ? "text-red-950 bg-gray-100" : "text-gray-900 hover:bg-gray-100"
                  }`
                }
              >
                {item.text}
              </NavLink>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 xl:p-4">
          <Outlet />
        </div>
      
    </>
  );
}
