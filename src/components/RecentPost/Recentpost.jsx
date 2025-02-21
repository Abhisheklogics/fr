/*import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const RecentPosts = (props) => {  // Default to empty array if images is undefined
  const listRef = useRef(null);
console.log(props.image)
  // Ensure images is an array and has the required structure
  const processedImages = props.image.map((arr) => {
    if (arr && typeof arr.ExperimentName === 'string') {
      arr.ExperimentName = arr.ExperimentName.replace(/How to|HOW TO|\./g, '');
    }
    return arr;
  });

  useEffect(() => {
    const list = listRef.current;
    let scrollAmount = 0;
    const maxScroll = list.scrollHeight - list.clientHeight;

    const scrollList = () => {
      scrollAmount += 1;
      if (scrollAmount > maxScroll) {
        scrollAmount = 0;
      }
      list.scrollTo({
        top: scrollAmount,
        behavior: 'smooth'
      });
    };

    const interval = setInterval(scrollList, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="xs:h-[400px] xs:shadow-lg xs:w-[350px] xs:bg-white xs:mt-[40px] xs:ml-[2px] xs:absolute xs:rounded-md xs:overflow-hidden

    xl:h-[450px] xl:shadow-lg xl:w-[360px] xl:bg-white xl:mt-[-450px] xl:ml-[870px] xl:absolute xl:rounded-md xl:overflow-hidden">
      <div className="xs:text-start xs:font-bold xs:text-2xl xs:text-white xs:bg-gradient-to-r from-green-700 xs:bg-green-300 xs:rounded-sm xs:p-4

      xl:text-start xl:font-bold xl:text-2xl xl:text-white bg-gradient-to-r from-green-700 bg-green-300 xl:rounded-sm p-4">
        <h1>RECENT POST</h1>
      </div>
      <ul className="xs:h-full xs:overflow-auto xs:text-sm
      h-full overflow-auto xl:text-sm" ref={listRef}>
        {processedImages.map((image, index) => (
          <NavLink key={image.ExperimentId} to={`arduino/ex${image.ExperimentId}`}>
            <li className={`xs:hover:bg-gray-200 xs:mt-10 xs:p-2 xs:ml-2 ${index === 0 ? 'xs:mt-6' : ''}
            
            xl:hover:bg-gray-200 xl:mt-10 xl:p-2 xl:ml-2 ${index === 0 ? 'mt-6' : ''}`} >
              <img src={image.image1} className="xs:h-10 xs:w-20
              xl:h-10 xl:w-20" alt={image.ExperimentName} />
              <p className="xs:mt-[-40px] xs:word-break xs:text-wrap xs:h-10 xs:p-1 xs:ml-[90px] xs:rounded
              
              xl:mt-[-40px] xl:word-break xl:text-wrap xl:h-10 xl:p-1 xl:ml-[90px] xl:rounded">
                {image.ExperimentName}
              </p>
              <hr className="xs:mt-2
              xl:mt-2" />
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default RecentPosts;*/
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

const RecentPosts = (props) => {
  const listRef = useRef(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false); // State to track user interaction
  const [scrollInterval, setScrollInterval] = useState(null); // Store interval ID

  // Ensure images is an array and has the required structure
  const processedImages = props.image ? props.image.map((arr) => {
    if (arr && typeof arr.ExperimentName === 'string') {
      arr.ExperimentName = arr.ExperimentName.replace(/How to|HOW TO|\./g, '');
    }
    return arr;
  }) : [];

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    let scrollAmount = 0;
    const maxScroll = list.scrollHeight - list.clientHeight;

    const scrollList = () => {
      if (!isUserInteracting) {
        scrollAmount += 1;
        if (scrollAmount > maxScroll) {
          scrollAmount = 0;
        }
        list.scrollTo({
          top: scrollAmount,
          behavior: 'smooth'
        });
      }
    };

    const interval = setInterval(scrollList, 50);
    setScrollInterval(interval);

    return () => clearInterval(interval);
  }, [isUserInteracting]);

  const handleUserInteractionStart = () => {
    setIsUserInteracting(true);
  };

  const handleUserInteractionEnd = () => {
    setIsUserInteracting(false);
  };

  return (
    <div className="relative xs:h-[400px] xs:shadow-lg xs:w-[300px] xs:bg-white xs:mt-[60px] xs:ml-[10px] xs:absolute xs:rounded-md xs:overflow-hidden
      xl:h-[450px] xl:shadow-lg xl:w-[360px] xl:bg-white xl:mt-[-400px] xl:ml-[870px] xl:absolute xl:rounded-md xl:overflow-hidden">
      <div className="xs:text-start xs:font-bold xs:text-2xl xs:text-white xs:bg-gradient-to-r from-green-700 xs:bg-green-300 xs:rounded-sm xs:p-4
        xl:text-start xl:font-bold xl:text-2xl xl:text-white bg-gradient-to-r from-green-700 bg-green-300 xl:rounded-sm p-4">
        <h1>RECENT POST</h1>
      </div>
      <ul
        className="xs:h-full xs:overflow-auto xs:text-sm h-full overflow-auto xl:text-sm"
        ref={listRef}
        onMouseEnter={handleUserInteractionStart}
        onMouseLeave={handleUserInteractionEnd}
        onTouchStart={handleUserInteractionStart}
        onTouchEnd={handleUserInteractionEnd}
      >
        {processedImages.map((image, index) => (
          <NavLink key={image.ExperimentId} to={`arduino/ex${image.ExperimentId}`}>
            <li className={`xs:hover:bg-gray-200 xs:mt-10 xs:p-2 xs:ml-2 ${index === 0 ? 'xs:mt-6' : ''}
            xs:hover:bg-gray xs:mt-10 xs:p-2 xs:ml-2 ${index===0? 'xs:mt-6':''}
              xl:hover:bg-gray-200 xl:mt-10 xl:p-2 xl:ml-2 ${index === 0 ? 'mt-6' : ''}`}>
              <img src={image.image1} className="xs:h-10 xs:w-20 xl:h-10 xl:w-20" alt={image.ExperimentName} />
              <p className="xs:mt-[-40px] xs:word-break xs:text-wrap xs:h-10 xs:p-1 xs:ml-[90px] xs:rounded
                xl:mt-[-40px] xl:word-break xl:text-wrap xl:h-10 xl:p-1 xl:ml-[90px] xl:rounded">
                {image.ExperimentName}
              </p>
              <hr className="xs:mt-2 xl:mt-2" />
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default RecentPosts;
