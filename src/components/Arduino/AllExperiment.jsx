import { lazy, Suspense } from "react";
import { useLoaderData } from "react-router-dom";
import LazyLoad from 'react-lazyload';// Import the CSS file

const CodeDemo = lazy(() => import("../Code/Code"));
let applyData;

export default function AllExperiment() {
  applyData = useLoaderData();

  return (
    <>
      <div className="  xs:h-fit xs:w-[100%] xl:text-sm  xs:ml-[10px] xs:mt-[-1150px] 
      xs:p-5 xs:bg-slate-50 xs:bg-cover xs:rounded-xl xs:leading-8 xs:text-justify xs:break-words xs:text-wrap
      container-xl container-xl">
        <h1 className=" 
        header-title header-title-xl">{applyData.ExperimentName}</h1>
        <img className="  xs:w-full xs:ml-2
        image image-xl" src={applyData.image1} alt="Experiment Image" />
        <h2 className="subheading">{applyData.madeBy}</h2>
        <p className="text-content">{applyData.madeByinfo}</p>
        <h2 className=" xs:mt-4
        header-title header-title-xl xl:mt-4">{applyData.overview}</h2>
        <p className="text-content">{applyData.overviewinfo}</p>

        <h1 className="specifications-header">Specifications</h1>
        <div className="bg-black xl:ml-10 xl:h-fit xl:w-fit">
          <LazyLoad fallback={<h1> Please wait.. </h1>}>
            <img className="specifications-image xs:w-full" loading="lazy" src={applyData.image2} alt="Specifications" />
          </LazyLoad>
        </div>

        <h2 className="header-title header-title-xl">{applyData.pinDiagramInfo}</h2>
        <LazyLoad fallback={<h1> Please wait.. </h1>}>
          <img className="pin-diagram-image xs:w-full xs:ml-2 xl:ml-44 xl:rounded-xl" src={applyData.image3} alt="Pin Diagram" />
        </LazyLoad>

        <h2 className="header-title header-title-xl">{applyData.CircuitDiagramInfo}</h2>
        <LazyLoad fallback={<h1> Please wait.. </h1>}>
          <img className="circuit-diagram-image xs:w-full xs:ml-2 xl:rounded-xl" src={applyData.image4} alt="Circuit Diagram" />
        </LazyLoad>

        <h1 className="steps-header">Steps:</h1>
        <div>
          <p className="xl:text-content">{applyData.step}</p>
          {applyData.step1 && <p className="step-item">1: {applyData.step1}</p>}
          {applyData.step2 && <p className="step-item">2: {applyData.step2}</p>}
          {applyData.step3 && <p className="step-item">3: {applyData.step3}</p>}
          {applyData.step4 && <p className="step-item">4: {applyData.step4}</p>}
          {applyData.step5 && <p className="step-item">5: {applyData.step5}</p>}
          {applyData.step6 && <p className="step-item">6: {applyData.step6}</p>}
        </div>

        <h2 className="code-header">Code:</h2>
        <div>
          <Suspense fallback={<h1>Code is Loading</h1>}>
            <CodeDemo code={`
 int sensor_pin = 13;
 int sensor_state = 1;

 void setup()
   {
       pinMode(13, INPUT);
       Serial.begin(9600);
   }

  void loop() {
      Serial.print("Soil Moisture Level: ");
      sensor_state = digitalRead(sensor_pin);
        if (sensor_state == 1) 
          {
             Serial.println("Wet");
         } 
       else
         {
            Serial.println("Dry");
          }
         delay(200);
       }
            `} />
          </Suspense>
        </div>

        <h3 className="result-header">Result</h3>
        <p className="result-text">{applyData.result}</p>
        <hr className="border-black xs:mt-10 xl:mt-10" />
      </div>
    </>
  );
}
