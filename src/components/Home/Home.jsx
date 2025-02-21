
import React, { lazy, Suspense, useEffect, useState } from "react";
import { NavLink, useLoaderData,} from "react-router-dom";
import LazyLoad from "react-lazyload";
import SimpleSlider from "../animatecom/Abhi";

import Aos from "aos";
import 'aos/dist/aos.css';
import RecentPosts from "../RecentPost/Recentpost";


const Footer = lazy(() => import("../Footer/Footer"));

export default function Home() {
  const images = useLoaderData();
  console.log(images);
  let [data,setData]=useState([])
  useEffect(() => {
    Aos.init({ duration: 1100 });
  }, []);

  // Define the items you want to scroll (the three images)
  

  return (
    <>
      <LazyLoad>
        <div className="xs:h-full
        xl:h-full">
          <LazyLoad>
            <SimpleSlider />
          </LazyLoad>
          <RecentPosts image={images.arduinodata} />

          <div data-aos='fade-up' className=" 
          xs:rounded xs:mt-[490px] xs:bg-green-700 xs:col-span-3 xs:w-full xs:ml-1 xs:justify-center xs:mx-auto xs:relative xs:text-center xs:p-3 xs:text-black
          xl:rounded xl:mt-24 bg-green-700 col-span-3 xl:w-[450px] justify-center mx-auto relative text-center xl:p-3 xl:text-black">
            <h1 className="xs:font-[200] xs:text-3xl xs:text-white
            xl:font-[200] xl:text-3xl xl:text-white">LATEST TECHNOLOGIES</h1>
          </div>

          <div data-aos='fade-left' className="xs:relative">
            <div className="xs:flex jxs:ustify-center xs:items-center xs:mt-[30px] xs:bg-slate-200 xs:h-fit
            xs:flex justify-center items-center xl:mt-[20px] bg-slate-200 xl:h-[300px]">
              <div className="xs:max-w-7xl xs:mx-auto
              max-w-7xl mx-auto">
                <div className="xs:scroll-wrapper
                scroll-wrapper">
                  <div className="xs:scroll-content
                  scroll-content">
                   
                    
                   
                      <div  className=" xs:h-[200px] xs:w-72 
                        xs:animate-wiggle xs:bg-gray-100 xs:shadow-lg xs:rounded xs:flex xs:flex-col xs:justify-center xs:items-center xs:p-4
                      scroll-item xl:w-fit xl:animate-wiggle  bg-gray-100 shadow-lg xl:rounded flex flex-col justify-center items-center p-4">
                        <NavLink to='arduino' className=" 
                        card-link">
                          <LazyLoad>
                            <img src='https://wokwi.com/images/homepage/arduino-uno.svg' className="
                            card-image "  />
                          </LazyLoad>
                          <p className="
                          card-title">Arduino</p>
                        </NavLink>
                      </div>
                      
                      <div  className="
                      xs:scroll-item xs:animate-wiggle xs:bg-gray-100 xs:shadow-lg xs:rounded xs:flex xs:flex-col xs:justify-center xs:items-center xs:p-4
                      scroll-item xl:animate-wiggle bg-gray-100 shadow-lg xl:rounded flex flex-col justify-center items-center p-4">
                        <NavLink to='raspberry' className="card-link">
                          <LazyLoad>
                          <img src='https://wokwi.com/images/homepage/pi-pico.svg' className="
                          card-image" alt="Raspberry Pi" />
                          </LazyLoad>
                          <p className="
                          card-title">Raspberry pi</p>
                        </NavLink>
                      </div>
                      <div  className="
                      xs:h-fit xs:w-72 xs:scroll-item xs:animate-wiggle xs:bg-gray-100 xs:shadow-lg xs:rounded xs:flex flex-col xs:justify-center xs:items-center xs:p-4
                      scroll-item xl:animate-wiggle bg-gray-100 shadow-lg xl:rounded flex flex-col justify-center items-center p-4">
                        <NavLink  to='esp' className="card-link">
                          <LazyLoad>
                          <img src='https://wokwi.com/images/homepage/esp32.svg' className="
                          card-image" alt="ESP" />
                          </LazyLoad>
                          <p className="
                          card-title">Esp</p>
                        </NavLink>
                      </div>
                      <div  className="
                      xs:h-fit xs:w-72 xs:hidden xs:scroll-item xs:animate-wiggle xs:bg-gray-100 xs:shadow-lg xs:rounded xs:flex flex-col xs:justify-center xs:items-center xs:p-4
                      scroll-item xl:animate-wiggle bg-gray-100 shadow-lg xl:rounded flex flex-col justify-center items-center p-4">
                        <NavLink  to='esp' className="card-link">
                          <LazyLoad>
                          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF8_KmwrC7d19mtC3lk2IACxLHZnO5rAjDKw&s' className="
                          card-image" alt="ESP" />
                          </LazyLoad>
                          <p className="
                          card-title">Drone</p>
                        </NavLink>
                      </div>
                      <div  className="
                      xs:h-fit xs:w-72 xs:hidden xs:scroll-item xs:animate-wiggle xs:bg-gray-100 xs:shadow-lg xs:rounded xs:flex flex-col xs:justify-center xs:items-center xs:p-4
                      scroll-item xl:animate-wiggle bg-gray-100 shadow-lg xl:rounded flex flex-col justify-center items-center p-4">
                        <NavLink  to='esp' className="card-link">
                          <LazyLoad>
                          <img src='https://static.vecteezy.com/system/resources/previews/029/228/118/non_2x/a-illustration-showcasing-electronic-components-sets-encompassing-microchips-capacitors-resistors-fuses-and-more-on-a-dark-background-vector.jpg' className="
                          card-image xl:h-28 xl:w-44" alt="ESP" />
                          </LazyLoad>
                          <p className="
                          card-title">Electronics</p>
                        </NavLink>
                      </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

          <Suspense fallback={<h1>Loading...</h1>}>
            <Footer />
          </Suspense>
        </div>
      </LazyLoad>
    </>
  );
}
