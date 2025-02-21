import React, { lazy, Suspense } from "react";
import { useLoaderData } from "react-router-dom";
import LazyLoad from "react-lazyload";
 // Import the CSS file

const CodeDemo = lazy(() => import("../Code/Code"));

let applyData;

export default function ArduinoAlag(props) {
  applyData = useLoaderData();

  return (
    <>
      <div className="xs:h-fit xs:w-[100%] xl:text-sm  xs:ml-[10px] xs:mt-[-1150px] xs:bg-white
      xs:p-5 xs:bg-slate-50 xs:bg-cover xs:rounded-xl xs:leading-8 xs:text-justify xs:break-words xs:text-wrap
      
      container-xl container-xl">
        <h1 className="header-title header-title-xl">
          {applyData.ExperimentName}
        </h1>
        <img className="image image-xl xs:ml-0 xs:w-full" src={applyData.image1} alt="Experiment" />
        <h2 className="xs:hidden subheading">
          {applyData.madeBy}
        </h2>
        <p className="text-content">
          {applyData.madeByinfo}
        </p>
        <h2 className="header-title header-title-xl xs:ml-[-8px] ">
          {applyData.overview}
        </h2>
        <p className="text-content xs:mt-2">
          {applyData.overviewinfo}
        </p>
        <h1 className="specifications-header">Specifications</h1>
        <LazyLoad>
          <img className="specifications-image" src={applyData.image2} alt="Specifications" />
        </LazyLoad>
        <h2 className="header-title header-title-xl">
          {applyData.pinDiagramInfo} :
        </h2>
        <LazyLoad>
          <img className="pin-diagram-image xs:ml-2 xs:h-fit" src={applyData.image3} alt="Pin Diagram 1" />
        </LazyLoad>
        <h2 className="header-title header-title-xl">
          {applyData.pinDiagramInfo2} :
        </h2>
        <LazyLoad>
          <img className="pin-diagram-image xs:ml-2 xs:h-fit" src={applyData.image4} alt="Pin Diagram 2" />
        </LazyLoad>
        <h2 className="header-title header-title-xl xs:text-3xl xs:mt-2">
          {applyData.CircuitDiagramInfo}
        </h2>
        <LazyLoad>
          <img className="circuit-diagram-image xs:ml-2 xs:h-fit" src={applyData.image5} alt="Circuit Diagram" />
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
