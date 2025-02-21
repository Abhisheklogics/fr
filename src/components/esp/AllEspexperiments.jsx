
import React,{lazy,Suspense} from "react";
import { useLoaderData } from "react-router-dom";
import LazyLoad from "react-lazyload";


const CodeDemo = lazy(()=>import("../Code/Code"))
 export default function EspExperiments(props)
 {
  let data= useLoaderData()
  
  console.log(props)
  return(
    <>
    
    <div className=" xs:h-fit xs:w-[100%]  xs:text-sm xs: xs:mt-[-430px]  xs:p-10 xs:bg-white xs:shadow-lg
    xs:bg-cover xs:rounded-xl xs:leading-8 xs:text-justify xs:break-words xs:text-sm
 
    xl:h-fit xl:w-1/2 xl:absolute  xl:ml-[310px] xl:mt-[-455px]  xl:p-10 xl:bg-white xl:shadow-lg
    xl:bg-cover xl:rounded-xl xl:leading-8 xl:text-justify xl:break-words xl:text-sm">
      <h1 className="xs:text-2xl  xs:text-black-900
      xl:text-2xl xl:text-center xl:text-black-900"> {data.ExperimentName}</h1>
      <img className="xs:h-48  xs:w-full xs:ml-2 xs:mt-6
      xl:h-52  xl:w-80 xl:ml-32 xl:mt-6"    src={data.image1}/>
      <span className="xs:text-sm xs:hidden xs:text-black-900 xs:text-center
      xl:mt-10 xl:text-sm xl:ml-0 xl:text-black-900   "> Made By:<span  className="xs:text-center xl:text-sm">{props.made}</span></span>
      <h1 className="xs:text-3xl  xs:text-black-900 xs:mt-4
      xl:text-2xl xl:text-center xl:mt-4 xl:text-black-900">Introduction</h1>
      <p className=" xs:mt-2">{data.overview}</p>

      <h1 className="xs:text-3xl xs:mt-6 xs:text-black-900
      xl:text-2xl xl:mt-6 xl:text-black-900">Componenets :</h1>
      <p className=" xs:mt-4 xl:ml-6 xl:mt-4">{data.component}</p>
      <h1 className="xs:text-2xl xs:mt-10 xs:text-black-900
      xl:text-2xl xl:mt-10 xl:text-black-900">Specifiction:</h1>
      <LazyLoad>
      <img className="xs:h-fit  xs:w-full xs:mt-4
      xl:h-48 xl:ml-36 xl:w-96 xl:mt-4" src={data.image2}/>
      </LazyLoad>
      <h1 className="xs:text-2xl  xs:text-black-900
      xl:text-2xl  xl:text-black-900">{data.pinDiagramInfo}:</h1>
      <LazyLoad>
      <img  className="xs:h-fit xs:mt-6  xs:w-full xs:ml-6
      xl:h-30  xl:w-72 xl:ml-36 xl:mt-4"src={data.image3}/>
      </LazyLoad>
      <h1 className="xs:text-2xl xs:mt-4 xs:text-black-900
      xl:text-2xl  xl:text-black-900">{data.CircuitDiagramInfo}</h1>
      <LazyLoad>
      <img className="xs:h-fit xs:w-full  xs:mt-4
      xl:h-60 xl:w-72 xl:ml-36 xl:mt-4" src={data.image4}/>
      </LazyLoad>
      <h1 className="xs:text-3xl xs:mt-6 xs:text-black-900
      xl:text-xl xl:mt-6 xl:text-black-900">All Steps</h1>
     {data.step1?<p className="xs:text-xl xs:mt-2
       xl:text-black-900
    xl:text-sm  xl:text-black-900">Step1: 
       <span className=" xs:text-sm xs:mt-6 xl:text-black-900
       xl:text-black-900
         xl:text-black-900
       xl:text-black-900"> { data.step1}
      </span>
      </p>:''}
      {data.step2?<p className="xs:text-xl xs:mt-2
      xl:text-black-900
      xl:mt-6 xl:text-black-900">Step2:  
       <span className=" xs:mt-2  xs:text-sm
      xl:mt-6 xl:text-black-900
 xl:text-black-900">  { data.step2}
      </span>
      </p>:''}
      {data.step3?<p className="xs:text-xl xs:mt-2
       xl:text-black-900
    xl:text-sm xl:mt-6 xl:text-black-900">Step3  : 
       <span className=" xs:text-sm xs:mt-2
         xl:text-black-900
   xl:text-sm    xl:mt-6 xl:text-black-900"> { data.step3}
      </span>
      </p>:''}
      {data.step4?<p className="xs:text-xl xs:mt-2
    xl:text-sm   xl:text-black-900
    xl:mt-6 xl:text-black-900">Step4: 
       <span className=" xs:text-sm xs:mt-2
    xl:text-sm     xl:text-black-900
     xl:mt-6 xl:text-black-900"> { data.step4}
      </span>
      </p>:''}
      {data.step5?<p className="xs:text-xl xs:mt-2
    xl:text-sm    xl:text-black-900
       xl:mt-6 xl:text-black-900"> Step5: 
       <span className="  xs:text-sm xs:mt-2
   xl:text-sm   xl:text-black-900
       xl:mt-6 xl:text-black-900">  { data.step5}
      </span>
      </p>:''}
      {data.step6?<p className="xs:text-xl xs:mt-2
     xl:text-sm xl:mxl:text-black-900
       xl:mt-6 xl:text-black-900">Step6: 
       <span className=" xs:text-sm xs:mt-2
     xl:text-sm    xl:text-black-900
    xl:mt-6 xl:text-black-900"> { data.step6}
      </span>
      </p>:''}
      {data.step7?<p className="xs:text-xl xs:mt-2
    xl:text-sm xl:text-black-900
       xl:mt-6 xl:text-black-900">Step7: 
       <span className=" xs:text-sm xs:mt-2
     xl:text-sm    xl:text-black-900
       xl:mt-6 xl:text-black-900"> { data.step7}
      </span>
      </p>:''}
      {data.step8?<p className="xs:text-xl xs:mt-2
    xl:text-sm    xl:text-black-900
       xl:mt-6 xl:text-black-900">Step8 : 
       <span className=" xs:text-sm xs:mt-2
    xl:text-sm     xl:text-black-900
   xl:mt-6 xl:text-black-900"> { data.step8}
      </span>
      </p>:''}
      {data.step9?<p className="xs:text-xl xs:mt-2
   xl:text-sm    xl:text-black-900
     xl:mt-6 xl:text-black-900">Step9: 
       <span className=" xs:text-sm xs:mt-2
      xl:text-sm   xl:text-black-900
       xl:mt-6 xl:text-black-900"> { data.step9}
      </span>
      </p>:''}
      {data.step10?<p className="xs:text-xl xs:mt-2
        xl:text-black-900
   xl:text-sm    xl:mt-6 xl:text-black-900">Step10 : 
       <span className=" xs:text-sm xs:mt-2
         xl:text-sm xl:text-black-900
      xl:mt-6 xl:text-black-900"> { data.step10}
      </span>
      </p>:''}
      {data.step11?<p className="xs:text-xl xs:mt-2
      xl:text-sm  xl:text-black-900
      xl:mt-6 xl:text-black-900">Step11 : 
       <span className=" xs:text-sm xs:mt-2
 xl:text-sm xl:text-black-900
      xl:mt-6 xl:text-black-900">  { data.step11}
      </span>
      </p>:''}
      {data.step12?<p className="xs:text-xl xs:mt-2
   xl:text-sm    xl:text-black-900
       xl:mt-6 xl:text-black-900">Step12  : 
       <span className=" xs:text-sm xs:mt-2
         xl:text-black-900
      xl:text-sm xl:mt-6 xl:text-black-900">  { data.step12}
      </span>
      </p>:''}
      {data.step13?<p className="xs:text-xl xs:mt-2
  xl:text-sm  xl:text-black-900
       xl:mt-6 xl:text-black-900">Step13  : 
       <span className=" xs:text-sm xs:mt-2
    xl:text-sm  xl:text-black-900
       xl:mt-6 xl:text-black-900">  { data.step13}
      </span>
      </p>:''}
      {data.step14?<p className="xs:text-xl xs:mt-2
     xl:text-sm  xl:text-black-900
       xl:mt-6 xl:text-black-900">Step14  : 
       <span className=" xs:text-sm xs:mt-2
      xl:text-sm  xl:text-black-900
       xl:mt-6 xl:text-black-900">  { data.step14}
      </span>
      </p>:''}
      {data.step15?<p className="xs:text-xl xs:mt-2
     xl:text-sm  xl:text-black-900
       xl:mt-6 xl:text-black-900">Step15 : 
       <span className=" xs:text-sm xs:mt-2
         xl:text-black-900
     xl:text-sm  xl:mt-6 xl:text-black-900"> { data.step15}
      </span>
      </p>:''}
      {data.step16?<p className="xs:text-xl xs:mt-2
     xl:text-sm  xl:text-black-900
       xl:mt-6 xl:text-black-900">Step16 : 
       <span className=" xs:text-sm xs:mt-2
     xl:text-sm    xl:text-black-900
       xl:mt-6 xl:text-black-900"> { data.step16}
      </span>
      </p>:''}
      {data.step17?<p className="xs:text-xl xs:mt-2
 xl:text-sm   xl:text-black-900
       xl:mt-6 xl:text-black-900">Step17  : 
       <span className=" xs:text-sm xs:mt-2
    xl:text-sm     xl:text-black-900
 xl:mt-6 xl:text-black-900"> { data.step17}
      </span>
      </p>:''}
      {data.step18?<p className="xs:text-xl xs:mt-2
    xl:text-sm    xl:text-black-900
       xl:mt-6 xl:text-black-900">Step18  : 
       <span className=" xs:text-sm xs:mt-2
        xl:text-black-900
       xl:mt-6 xl:text-black-900"> { data.step18}
      </span>
      </p>:''}
      {data.step19?<p className=" xs:mt-2
        xl:text-black-900
    xl:text-sm   xl:mt-6 xl:text-black-900">Step19 : 
       <span className=" xs:text-sm xs:mt-2
       xl:text-black-900
     xl:mt-6 xl:text-black-900"> { data.step19}
      </span>
      </p>:''}
    
      <h1 className="xl:text-2xl xl:mt-6 xl:text-black-900">Code:</h1>
      <Suspense fallback={<h1>Code is Loading</h1>}>    
        <CodeDemo code={data.code}/>
        </Suspense>


      <h1 className="xs:text-3xl xs:mt-6 xs:text-black-900
      xl:text-2xl xl:mt-6 xl:text-black-900 ">Result</h1>
      <p className="xs:mt-3 ">{data.result}</p>
    </div>    
    </>
  )
 }

 
 
  
