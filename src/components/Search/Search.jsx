
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function Search() {
  const [search, setSearch] = useState('');
  const [applyData, setApplyData] = useState([]);
  const [showApplyData, setShowApplyData] = useState(false); // State to manage showing/hiding applyData div
  const inputref=useRef(null)
  useEffect(() => {
    if (search === '') {
      setApplyData([]);
      setShowApplyData(false); // Hide applyData div when search is empty
      return;
    }

    const getDataSearch = async () => {
      try {
        const response = await axios.get(`/arduino/getDataSearch?search=${search}`);
        setApplyData(response.data);
        setShowApplyData(true); // Show applyData div when data is fetched
      } catch (error) {
        console.log(error);
        setApplyData([]); // Handle error case gracefully
        setShowApplyData(false); // Hide applyData div on error
      }
    };

    getDataSearch();
  }, [search]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if ( !inputref.current.contains(event.target)) {
        setShowApplyData(false); // Hide applyData div when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  const handleInputChange = (e) => {
    setSearch(e.target.value);
    setApplyData([]); // Clear applyData when input changes
    setShowApplyData(false); // Hide applyData div when input changes
  };

  const handleNavLinkClick = () => {
    setApplyData([]); // Clear applyData when NavLink is clicked
    setShowApplyData(false);
    setSearch(''); // Hide applyData div when NavLink is clicked
  };
 
  return (
    <div className="xs:ml-[30px]
    xl:flex xl:justify-evenly ">
      <input
        className=" xs:h-9 xs:w-72 xs:absolute xs:left-16  xs:top-3 xs:rounded-xl xs:p-2
                 xl:h-8 xl:w-[500px] xl:absolute xl:left-[30%] xl:bg-white xl:shadow-md xl:shadow-inner xl:placeholder:text-gray-700 xl:placeholder:font-bold xl:top-2 xl:rounded-xl xl:p-2 xl:mt-1"
        value={search}
       ref={inputref}
        onChange={handleInputChange}
        placeholder="Search the Experiments..."
        
      />
  
      

      {applyData.length > 0 && search !== '' && (  // Show applyData div only when data is available and search is not empty
        <div className={` xs:h-fit xs:rounded-lg xs:p-3 xs:w-[400px] xs:bg-white xs:mt-[0px] xs:ml-[-25px] xs:fixed xs:z-30 
          xl:h-fit xl:rounded-lg xl:p-3 xl:w-[550px] xl:bg-white xl:mt-[50px] xl:ml-[-20px] xl:fixed xl:z-30  ${showApplyData ? 'opacity-100' : 'opacity-0'}`}>
          {applyData.map((data, index) => (
            <div key={data.ExperimentId} className="xs:p-3
            xl:p-3" >
              <NavLink to={`arduino/ex${data.ExperimentId}`} onClick={handleNavLinkClick}>
                <img src={data.image1} className="xs:rounded xs:h-10 xs:ml-4 xs:mt-2
                xl:rounded h-10 xl:ml-4 xl:mt-2" alt="" />
                <h1 className="xs:mt-[-40px] xs:ml-[100px] xs:p-1 xs:hover:bg-gray-200 xs:hover:rounded-xl xs:h-[50px]
                xl:mt-[-40px] xl:ml-[100px] xl:p-1 xl:hover:bg-gray-200 xl:hover:rounded-xl xl:h-[50px]">{data.ExperimentName}</h1>
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
