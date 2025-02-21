
/*import React ,{useState,useEffect}from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

export default function SimpleSlider({image}) {
  
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  
  return (
    <Slider className="xl:mt-[40px] xl:w-[800px] xl:h-[300px] xl:ml-20 xl:flex xl:items-center xl:justify-center" {...settings}>
      
      <div className="bg-gray-400 mt-0 shadow-lg rounded-lg flex items-center justify-center overflow-hidden">
        <NavLink to='Esp' >
        <img src={image[0].image1} className="xl:h-[200px] xl:w-full object-cover" />
        </NavLink>
      </div>
      <NavLink to='Arduino' >      <div className="bg-gray-400 mt-0 shadow-lg rounded-lg flex items-center justify-center overflow-hidden">
        <img src={image[0].image1} className="xl:h-[400px] xl:w-full object-cover" />
      </div>
      </NavLink>
      <NavLink to='raspberry'>

      <div className="bg-gray-400 mt-0 shadow-lg rounded-lg flex items-center justify-center overflow-hidden">
        <img src={image[0].image1} className="xl:h-[400px] xl:w-full object-cover" />
      </div>
      </NavLink>

      
    </Slider>
  );
}*/

/*import React, { useEffect } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function SimpleSlider({ image }) {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:1500, // milliseconds
  };

  return (
    <Slider className="xl:mt-10 xl:ml-32 xl:w-[800px] xl:h-[450px] xl:mx-auto" {...settings}>
      <div  className="bg-gray-400 shadow-lg rounded-lg overflow-hidden">
        <NavLink to='Esp'>
          <img src={image[0].image2} className="xl:h-[450px] xl:w-[800px]
         object-cover" alt="ESP" />
        </NavLink>
      </div>
      <div  className="bg-gray-400 shadow-lg rounded-lg overflow-hidden">
        <NavLink to='Arduino'>
          <img src={image[0].image3} className="xl:h-[450px] xl:w-full object-cover" alt="Arduino" />
        </NavLink>
      </div>
      <div  className="bg-gray-400 shadow-lg rounded-lg overflow-hidden">
        <NavLink to='raspberry'>
          <img src={image[0].image4} className="xl:h-[450px] xl:w-full object-cover" alt="Raspberry Pi" />
        </NavLink>
      </div>
    </Slider>
  );
}
*/
import React, { useEffect } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import 'aos/dist/aos.css';

import image1 from '../../../public/images/hr.jpg'
import image2 from '../../../public/images/led.png'
import image3 from '../../../public/images/Pic 1.png'
import image4 from '../../../public/images/DHT11.png'
import image5 from '../../../public/images/Bristo.jpg'
import image6 from '../../../public/images/Servo.png'
export default function SimpleSlider() {
  
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="
        xs:absolute xs:top-[50%] xs:right-4 xs:h-10 xs:w-10 xs:transform-translate-y-1/2 xs:text-white xs:text-xl xs:bg-gray-800 xs:bg-opacity-50 xs:p-2 xs:rounded-md xs:cursor-pointer xs:hover:bg-opacity-100
        absolute top-[50%] right-4 h-10 w-10 transform -translate-y-1/2 xl:text-white xl:text-xl xl:bg-gray-800 xl:bg-opacity-50 xl:p-2 xl:rounded-md xl:cursor-pointer xl:hover:bg-opacity-100"
        style={{ zIndex: 1 }}
        onClick={onClick}
      >
        {/* Unicode right arrow character */}
      <h1 className="xs:mt-[-2px]  xs:font-bold xs:-scale-x-75
      mt-[-2px]  font-bold -scale-x-75">  &#9666;</h1>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="
        xs:absolute xs:top-[50%] xs:right-4 xs:h-10 xs:w-10 xs:transform-translate-y-1/2 xs:text-white xs:text-xl xs:bg-gray-800 xs:bg-opacity-50 xs:p-2 xs:rounded-md xs:cursor-pointer xs:hover:bg-opacity-100
        absolute top-[50%] left-4 h-10  w-10 transform -translate-y-1/2 xl:text-white xl:text-2xl xl:bg-gray-800 xl:bg-opacity-50 xl:p-2 xl:rounded xl:cursor-pointer xl:hover:bg-opacity-100"
        style={{ zIndex: 1 }}
        onClick={onClick}
      >
        {/* Unicode left arrow character */}
       <h1 className="xs:mt-[-4px]
       mt-[-4px]"> &#9666;</h1>
      </div>
    );
  };

  var settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500, // milliseconds
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider className="xs:relative xs:mt-4 xs:ml- xs:w-full xs:h-[200px] xs:mx-auto
    relative xl:mt-7 xl:ml-4 xl:w-[800px] xl:h-[400px] xl:mx-auto" {...settings}>
      
      <div className="xs:bg-gray-400 xs:shadow-lg xs:rounded-lg xs:overflow-hidden
      bg-gray-400 shadow-lg rounded-lg overflow-hidden">
        <NavLink to="Arduino">
          <img
            //src={image[1].image1} 
           // src={homedata[0].image1}
           src={image1}
            className="xs:h-[fit] xs:w-full xs:object-cover
            xl:h-[450px] xl:w-[800px] object-cover"
            alt="Arduino"
          />
        </NavLink>
      </div>
      <div className="xs:bg-gray-400 xs:shadow-lg xs:rounded-lg xs:overflow-hidden
      bg-gray-400 shadow-lg rounded-lg overflow-hidden">
        <NavLink to="arduino/ex8">
          <img
            //src={image[2].image1}
           // src={homedata[0].image1}
           src={image2}
            className="xs:h-[fit] xs:w-full xs:object-cover
            xl:h-[450px] xl:w-[800px] object-cover"
            alt="Raspberry Pi"
          />
        </NavLink>
        
      </div>
      <div className="xs:bg-gray-400 xs:shadow-lg xs:rounded-lg xs:overflow-hidden
      bg-gray-400 shadow-lg rounded-lg overflow-hidden">
        <NavLink to="arduino/ex2">
          <img
                 //  src={homedata[0].image1}
            //src={image[3].image1}//
            src={image3}
           
            className="xs:h-[fit] xs:w-full xs:object-cover
            xl:h-[450px] xl:w-[800px] object-cover"
            alt="Raspberry Pi"
          />
        </NavLink>
        
      </div>
      <div className="xs:bg-gray-400 xs:shadow-lg xs:rounded-lg xs:overflow-hidden
      bg-gray-400 shadow-lg rounded-lg overflow-hidden">
        <NavLink to="arduino/ex11">
          <img
               // src={homedata[0].image1}
               src={image6}
            className="xs:h-[fit] xs:w-full xs:object-cover
            xl:h-[450px] xl:w-[800px] object-cover"
            alt=""
          />
        </NavLink>
        
      </div>
      <div className="xs:bg-gray-400 xs:shadow-lg xs:rounded-lg xs:overflow-hidden
      bg-gray-400 shadow-lg rounded-lg overflow-hidden">
        <NavLink to="esp">
          <img
                     // src={homedata[0].image1}
                     src={image4}
            className="xs:h-[fit] xs:w-full xs:object-cover
            xl:h-[450px] xl:w-[800px] object-cover"
            alt="Raspberry Pi"
          />
        </NavLink>
        
      </div>
      <div className="xs:bg-gray-400 xs:shadow-lg xs:rounded-lg xs:overflow-hidden
      bg-gray-400 shadow-lg rounded-lg overflow-hidden">
        <NavLink to="arduino/ex1">
          <img
                // src={homedata[0].image1}
                src={image5}  
            className="xs:h-[fit] xs:w-full object-cover
            xl:h-[450px] xl:w-[800px] object-cover"
            alt="Raspberry Pi"
          />
        </NavLink>
        
      </div>
     
    </Slider>
  );
}
