
  import React, { lazy, Suspense } from "react";
  import { useLoaderData } from "react-router-dom";
  import LazyLoad from "react-lazyload";
  // Import the CSS file
  
  const CodeDemo = lazy(() => import("../Code/Code"));
  
  let applyData;
  
  export default function Arduino6(props) {
    applyData = useLoaderData();
  
    return (
      <>
        <div className=" xs:h-fit xs:w-[100%] xl:text-sm  xs:ml-[10px] xs:mt-[-1150px] 
      xs:p-5 xs:bg-slate-50 xs:bg-cover xs:rounded-xl xs:leading-8 xs:text-justify xs:break-words xs:text-wrap
        
        container-xl container-xl">
          <h1 className="header-title header-title-xl">
            {applyData.ExperimentName}
          </h1>
          <img className="image image-xl xs:ml-0 xs:w-full" src={applyData.image1} alt="Experiment" />
          <h2 className="subheading">
            {applyData.madeBy}
          </h2>
          <p className="text-content">
            {applyData.madeByinfo}
          </p>
          <h2 className="header-title header-title-xl xs:mt-4 xs:ml-[-2px]">
            {applyData.overview}
          </h2>
          <p className="text-content">
            {applyData.overviewinfo}
          </p>
          <h1 className="subheading xs:text-2xl xs:text-black ">Ultrasonic Pin configuration</h1>
          <p className="text-content">{applyData.HC}</p>
          <LazyLoad>
            <img className="image image-xl xs:ml-10 xs:h-fit" src={applyData.image5} alt="Ultrasonic Pin" />
          </LazyLoad>
          <h1 className="subheading xs:text-2xl xs:text-black">Basic working principal</h1>
          <p className="text-content">{applyData.working}</p>
          <h1 className="specifications-header">Specifications</h1>
          <LazyLoad>
            <img className="specifications-image xs:h-52" src={applyData.image2} alt="Specifications" />
          </LazyLoad>
          <h2 className="header-title header-title-xl">
            {applyData.pinDiagramInfo} :
          </h2>
          <LazyLoad>
            <img className="pin-diagram-image xs:mt-4 xs:ml-4 " src={applyData.image3} alt="Pin Diagram 1" />
          </LazyLoad>
          <h2 className="header-title header-title-xl">
            {applyData.pinDiagramInfo2} :
          </h2>
          <LazyLoad>
            <img className="pin-diagram-image xs:h-fit xs:ml-10 " src={applyData.image4} alt="Pin Diagram 2" />
          </LazyLoad>
          <h2 className="header-title header-title-xl">
            {applyData.CircuitDiagramInfo}
          </h2>
          <LazyLoad>
            <img className="circuit-diagram-image xs:h-fit xs:ml-0" src={applyData.image6} alt="Circuit Diagram" />
          </LazyLoad>
          <h2 className="code-header">Code:</h2>
          <Suspense fallback={<h1>Code is Loading</h1>}>
            <CodeDemo code={props.code} />
          </Suspense>
          <h3 className="result-header">Result</h3>
          <p className="result-text">
            {applyData.result}
          </p>
          <hr className="border-black" />
        </div>
      </>
    );
  }
  

 
 