import React, { lazy, Suspense } from "react";
import { useLoaderData } from "react-router-dom";
import LazyLoad from "react-lazyload";
 // Adjust path as necessary

const CodeDemo = lazy(() => import("../Code/Code"));

let applyData;

export default function ArduinoThree5(props) {
  applyData = useLoaderData();

  return (
    <>
      <div className=" xs:h-fit xs:w-[100%] xl:text-sm  xs:ml-[10px] xs:mt-[-1150px] xs:bg-white
      xs:p-5 xs:bg-slate-50 xs:bg-cover xs:rounded-xl xs:leading-8 xs:text-justify xs:break-words xs:text-wrap
      
      container-xl container-xl">
        <h1 className="title xs:text-2xl">{applyData.ExperimentName}</h1>
        <img
          className="image image-xl xs:ml-0 xs:w-full"
          src={applyData.image1}
          alt="Experiment"
        />
        <h2 className="subtitle xs:hidden">{applyData.madeBy}</h2>
        <p className="text xs:mt-4">{applyData.madeByinfo}</p>
        <h2 className="title xs:mt-4 xs:text-2xl">{applyData.overview}</h2>
        <p className="text xs:mt-4 ">{applyData.overviewinfo}</p>

        <h3 className="xs:mt-4 xs:text-2xl">Specifications</h3>

        <LazyLoad>
          <img className="image xs:h-fit xs:mt-4 " src={applyData.image2} alt="Specifications" />
        </LazyLoad>
        Arduino Specifications
        <LazyLoad>
          <img className="image xs:h-fit xs:mt-4 " src={applyData.image3} alt="Arduino Specifications" />
        </LazyLoad>

        <h2 className="title xs:ml-[-10px] xs:mt-4 xs:text-2xl">{applyData.pinDiagramInfo}</h2>
        <LazyLoad>
          <img className="image-xl xs:ml-10 xs:mt-4" src={applyData.image4} alt="Pin Diagram" />
        </LazyLoad>

        <h2 className="title xs:mt-4 xs:text-2xl">{applyData.CircuitDiagramInfo}</h2>
        <LazyLoad>
          <img className="image" src={applyData.image5} alt="Circuit Diagram" />
        </LazyLoad>

        <h1 className="title">Steps:</h1>
        <div className="steps">
          {applyData.step1 && <p className="text">1: {applyData.step1}</p>}
          {applyData.step2 && <p className="text">2: {applyData.step2}</p>}
          {applyData.step3 && <p className="text">3: {applyData.step3}</p>}
          {applyData.step4 && <p className="text">4: {applyData.step4}</p>}
          {applyData.step5 && <p className="text">5: {applyData.step5}</p>}
          {applyData.step6 && <p className="text">6: {applyData.step6}</p>}
        </div>

        <h2 className="code-section">Code:</h2>
        <div>
          <Suspense fallback={<h1>Code is Loading</h1>}>
            <CodeDemo code={props.code} />
          </Suspense>
        </div>

        <h3 className="result">Result</h3>
        <p className="result">{applyData.result}</p>
        <hr className="result" />
      </div>
    </>
  );
}
