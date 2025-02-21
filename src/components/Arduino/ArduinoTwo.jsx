import React, { Fragment, lazy, Suspense } from "react";
import { useLoaderData } from "react-router-dom";
import LazyLoad from "react-lazyload";
 // Adjust path as necessary

const CodeDemo = lazy(() => import("../Code/Code"));

let applyData;

export default function ArduinoTwo5(props) {
  applyData = useLoaderData();

  return (
    <Fragment>
      <div className=" xs:h-fit xs:w-[100%] xl:text-sm  xs:ml-[10px] xs:mt-[-1150px] xs:bg-white
      xs:p-5 xs:bg-slate-50 xs:bg-cover xs:rounded-xl xs:leading-8 xs:text-justify xs:break-words xs:text-wrap
      
      container-xl container-xl ">
        <h1 className="title-xl xl:text-2xl xs:text-2xl">{applyData.ExperimentName}</h1>
        <img
          className="image image-xl xs:w-full xs:ml-0"
          src={applyData.image1}
          alt="Experiment"
        />
        <h2 className="subtitle xs:hidden">{applyData.madeBy}</h2>
        <p className="text ">{applyData.madeByinfo}</p>
        <h2 className="title xl:text-2xl xl:mt-4 xs:mt-4 xs:text-2xl">{applyData.overview}</h2>
        <p className="text xl:mt-4 xs:mt-2">{applyData.overviewinfo}</p>

        <h3 className="xl:text-2xl xs:mt-4 xs:text-2xl">Specifications</h3>

        <LazyLoad>
          <img className="image xs:h-fit" src={applyData.image2} alt="Specifications" />
        </LazyLoad>

        <h2 className="title xl:text-2xl xs:mt-4 xs:text-2xl">{applyData.pinDiagramInfo}</h2>
        <LazyLoad>
          <img className="image xs:h-fit" src={applyData.image4} alt="Pin Diagram" />
        </LazyLoad>
        <h2 className="title xl:text-2xl xs:mt-4 xs:text-2xl">{applyData.CircuitDiagramInfo}</h2>
        <LazyLoad>
          <img className="image xs:h-fit" src={applyData.image5} alt="Circuit Diagram" />
        </LazyLoad>
        <h1 className="title xl:text-2xl">Steps:</h1>
        <div className="steps ">
          {applyData.step1 && <p className="text">1: {applyData.step1}</p>}
          {applyData.step2 && <p className="text">2: {applyData.step2}</p>}
          {applyData.step3 && <p className="text">3: {applyData.step3}</p>}
          {applyData.step4 && <p className="text">4: {applyData.step4}</p>}
          {applyData.step5 && <p className="text">5: {applyData.step5}</p>}
          {applyData.step6 && <p className="text">6: {applyData.step6}</p>}
        </div>

        <h2 className="code-section xl:text-2xl">Code:</h2>
        <div>
          <Suspense fallback={<h1>Code is Loading</h1>}>
            <CodeDemo code={props.code} />
          </Suspense>
        </div>

        <h3 className="result-header ">Result</h3>
        <p className="result-text-xl">{applyData.result}</p>
        <hr className="result" />
      </div>
    </Fragment>
  );
}
