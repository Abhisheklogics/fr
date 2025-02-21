
  import React,{lazy,Suspense} from "react";

  import { useLoaderData } from "react-router-dom";
  import LazyLoad from "react-lazyload";
  const CodeDemo = lazy(()=>import("../Code/Code"))

  

  export default function ResAllExperiment()
  {
    let data= useLoaderData()
  
    
    return(
      <>
      <>
      <div className="xs:h-fit xs:w-[100%] xl:text-sm xs:absolute xs:ml-0 xs:mt-10 
      xs:p-5 xs:bg-slate-50 xs:bg-cover xs:rounded-xl xs:leading-8 xs:text-justify xs:break-words xs:text-wrap
      xl:h-fit xl:w-1/2 xl:absolute xl:ml-[300px] xl:mt-32 xl:top-0
      xl:p-5 xl:bg-white xl:bg-cover xl:rounded-xl xl:leading-8 xl:text-justify xl:break-words xl:text-wrap">
        
          <h1 className="xs:text-3xl  xs:text-black-900
          xl:text-2xl xl:text-center xl:text-black-900">
          {data.ExperimentName}
          </h1>
          <img className="xs:h-48 xs:w-72 xs:ml-10   xs:mt-6
          xl:h-52 xl:w-1/2 xl:ml-36 xl:mt-6 " src={data.image1} />
          <h1 className=" xs:text-gray-950 xs:mt-6 xs:text-2xl
        xl:text-sm  xl:text-gray-950 xl:mt-6">
          {data.madeBy }
          </h1>
          <p className="xs:text-wrap xs:leading-8 xs:mt-6
          xl:text-wrap xl:leading-8 xl:mt-6">
          {data.madeByinfo}
          </p>
          <h1 className="xs:text-3xl  xs:text-black-900 xs:mt-6
          xl:text-2xl xl:text-black-900 xl:mt-6">
        {data.overview}
        </h1>
          <p className="xs:text-wrap xs:leading-8 xs:mt-6
          xl:text-wrap xl:leading-8 xl:mt-6">
          {data.overviewinfo}
          </p>
          <h1 className="  xs:text-gray-950 xs:mt-6 xs:text-2xl
          xl:text-gray-950 xl:mt-6 xl:text-2xl ">
          {data.Material}
          </h1>
          {data.Material1? <p className="xs:text-wrap xs:leading-7 xs:mt-6 xs:words-break
        xl:text-wrap xl:leading-8 xl:mt-6 " > 1: {data.Material1} </p>:''}
        
        {data.Material2? <p className="xs:text-wrap xs:leading-7 xs:mt-6 xs:words-break
        xl:text-wrap xl:leading-8 xl:mt-6 " > 2: {data.Material2} </p>:''}
        
        {data.Material3? <p className="xs:text-wrap xs:leading-7 xs:mt-6 xs:words-break
        xl:text-wrap xl:leading-8 xl:mt-6 " > 3: {data.Material3} </p>:''}
        
        
          {data.Material4? <p className="xs:text-wrap xs:leading-7 xs:mt-6 xs:words-break
        xl:text-wrap xl:leading-8 xl:mt-6 " > 4: {data.Material4} </p>:''}
        
      <LazyLoad>
          <img src={data.image2}className="xs:h-fit xs:w-fit xs:mt-6 xs:ml-0
          
        xl: h-fit xl:w-fit  xl:mt-6 xl:ml-20 xl:rounded-xl " 
          />
          </LazyLoad>
          <h1 className="xs:text-3xl  xs:text-black-900 xs:mt-6
          xl:text-2xl  xl:text-black-900 xl:mt-6"> {data.
  pinDiagramInfo}</h1>
  <LazyLoad>
        < img  className="xs:h-fit xs:w-fit  xs:mt-10 xs:ml-2
  xl:h-fit xl:w-fit xl:mt-10 xl:ml-20 xl:rounded-xl "src={data.image3}/>
  </LazyLoad>
  <h1 className="xs:text-3xl  xs:text-black-900 xs:mt-6
  xl:text-2xl  xl:text-black-900 xl:mt-6 ">{data.CircuitDiagramInfo}</h1>
  <LazyLoad>
  <img className="xs:h-fit xs:w-fit xs:mt-10 xs:ml-4 
  xl:h-60  xl:mt-10 xl:ml-36  xl:rounded-xl" src={data.image4}/>
      </LazyLoad>   

  <h1 className="xs:text-3xl  xs:text-black-900 xs:mt-8
  xl:text-2xl  xl:text-black-900 xs:mt-8">Steps</h1>
  {data.step1? <p className="xs:text-wrap xs:leading-8 xs:mt-6
  xl:text-wrap xl:leading-8 xl:mt-6">1:  { data.step1}</p>:''}
  {data.step2? <p className="xs:text-wrap xs:leading-8 xs:mt-6
  xl:text-wrap xl:leading-8 xl:mt-6">2:  { data.step2}</p>:''}
  {data.step3? <p className="xs:text-wrap xs:leading-8 xs:mt-6
  xl:text-wrap xl:leading-8 xl:mt-6">3:  { data.step3}</p>:''}
  {data.step4? <p className="xs:text-wrap xs:leading-8 xs:mt-6
  xl:text-wrap xl:leading-8 xl:mt-6">4:  { data.step4}</p>:''}
  {data.step5? <p className="xs:text-wrap xs:leading-8 xs:mt-6
  xl:text-wrap xl:leading-8 xl:mt-6">5:  { data.step5}</p>:''}
  {data.step6? <p className="xs:text-wrap xs:leading-8 xs:mt-6
  xl:text-wrap xl:leading-8 xl:mt-6">6:  { data.step6}</p>:''}
  {data.step7? <p className="xs:text-wrap xs:leading-8 xs:mt-6
  xl:text-wrap xl:leading-8 xl:mt-6">7:  { data.step7}</p>:''}
  <h1 className="xs:text-wrap xs:leading-8  xs:text-3xl xs:mt-6
  xl:text-2xl  xl:text-black-900 xl:mt-8">Code:</h1>
  <div >
    <Suspense fallback={<h1>Code is loading</h1>}>
  <CodeDemo code={data.code}/>
  </Suspense>
      </div>
  <h1  className="xs:text-3xl xs:text-black-900 xs:mt-6
  xl:text-2xl xl:text-black-900 xl:mt-6">Result:</h1>
  <p className="xs:text-wrap xs:leading-8 xs:mt-2
  xl:text-wrap xl:leading-8">{data.result}</p>
  <hr className=" xs:border-black xs:mt-10
  xl:border-black xl:mt-10"/>
      </div>
      </>
      </>
    )
  }
  
    /*
    import React, { lazy, Suspense } from "react";
  import { useLoaderData } from "react-router-dom";
  import LazyLoad from "react-lazyload";
  const CodeDemo = lazy(() => import("../Code/Code"));

  export default function ResAllExperiment() {
    let data = useLoaderData();

    return (
      <div className="container mx-auto px-4 py-8 xl:py-12">
        <div className="bg-slate-50 rounded-xl p-4 xl:bg-white xl:shadow-md xl:p-6">
          <h1 className="text-2xl font-bold text-center text-black-900 mb-4 xl:text-3xl">{data.ExperimentName}</h1>
          <img
            className="w-full h-auto rounded-xl mb-6 xl:w-1/2 xl:mx-auto xl:mb-8"
            src={data.image1}
            alt={data.ExperimentName}
          />
          <h2 className="text-xl font-semibold text-gray-900 mb-2 xl:text-2xl">{data.madeBy}</h2>
          <p className="text-base leading-relaxed mb-6 xl:text-lg">{data.madeByinfo}</p>
          <h2 className="text-xl font-semibold text-gray-900 mb-2 xl:text-2xl">{data.overview}</h2>
          <p className="text-base leading-relaxed mb-6 xl:text-lg">{data.overviewinfo}</p>
          <h2 className="text-xl font-semibold text-gray-900 mb-2 xl:text-2xl">{data.Material}</h2>
          {[data.Material1, data.Material2, data.Material3, data.Material4].map((material, index) => 
            material ? (
              <p key={index} className="text-base leading-relaxed mb-4 xl:text-lg">
                {index + 1}: {material}
              </p>
            ) : null
          )}
          <LazyLoad height={200} offset={100}>
            <img
              className="w-full h-auto rounded-xl mb-6 xl:w-3/4 xl:mx-auto"
              src={data.image2}
              alt="Pin Diagram"
            />
          </LazyLoad>
          <h2 className="text-xl font-semibold text-gray-900 mb-2 xl:text-2xl">{data.pinDiagramInfo}</h2>
          <LazyLoad height={200} offset={100}>
            <img
              className="w-full h-auto rounded-xl mb-6 xl:w-3/4 xl:mx-auto"
              src={data.image3}
              alt="Circuit Diagram"
            />
          </LazyLoad>
          <h2 className="text-xl font-semibold text-gray-900 mb-2 xl:text-2xl">{data.CircuitDiagramInfo}</h2>
          <LazyLoad height={200} offset={100}>
            <img
              className="w-full h-auto rounded-xl mb-6 xl:w-3/4 xl:mx-auto"
              src={data.image4}
              alt="Additional Diagram"
            />
          </LazyLoad>
          <h2 className="text-xl font-semibold text-gray-900 mb-2 xl:text-2xl">Steps</h2>
          {[data.step1, data.step2, data.step3, data.step4, data.step5, data.step6, data.step7].map((step, index) =>
            step ? (
              <p key={index} className="text-base leading-relaxed mb-4 xl:text-lg">
                {index + 1}: {step}
              </p>
            ) : null
          )}
          <h2 className="text-xl font-semibold text-gray-900 mb-2 xl:text-2xl">Code:</h2>
          <div className="mb-6">
            <Suspense fallback={<p>Loading code...</p>}>
              <CodeDemo code={data.code} />
            </Suspense>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2 xl:text-2xl">Result:</h2>
          <p className="text-base leading-relaxed mb-6 xl:text-lg">{data.result}</p>
          <hr className="border-gray-300 mt-8" />
        </div>
      </div>
    );
  }

    
    */