

import React ,{lazy,Suspense}from "react";
const CodeDemo = lazy(()=>import("../Code/Code"))
import { useLoaderData } from "react-router-dom";
import LazyLoad from "react-lazyload";
 export default function ResNotSp(props)
 {
  let data= useLoaderData()
  
  return(
    <>
     <>
    <div className="xl:h-fit xl:w-1/2 xl:absolute xl:top-0 xl:ml-72 xl:mt-32  xl:p-5 xl:bg-slate-50 xl:bg-cover
     xl:rounded-xl xl:leading-8 xl:text-justify xl:break-words">
      
        <h1 className="text-2xl text-center text-black-900">
         {data.ExperimentName}
        </h1>
        <LazyLoad> 
        <img className="h-60 ml-36 xl:w-80 mt-6" src={data.image1} />
        </LazyLoad> 
        <h1 className=" text-sm text-gray-950 mt-6">
         {data.madeBy }
        </h1>
        <p className="text-wrap leading-8 mt-6">
         {data.madeByinfo}
        </p>
        <h1 className="text-2xl ext-black-900 mt-6">
       {data.overview}
       </h1>
        <p className="text-wrap leading-8 mt-6">
         {data.overviewinfo}
        </p>
        <h1 className="  text-gray-950 mt-6 text-2xl ">
         {data.Material}
        </h1>
        {data.Material1? <p className="xs:text-wrap xs:leading-7 xs:mt-6 xs:words-break
      xl:text-wrap xl:leading-8 xl:mt-6 " > 4: {data.Material1} </p>:''}
      
      {data.Material2? <p className="xs:text-wrap xs:leading-7 xs:mt-6 xs:words-break
      xl:text-wrap xl:leading-8 xl:mt-6 " > 4: {data.Material2} </p>:''}
      
      {data.Material3? <p className="xs:text-wrap xs:leading-7 xs:mt-6 xs:words-break
      xl:text-wrap xl:leading-8 xl:mt-6 " > 4: {data.Material3} </p>:''}
      
      
        {data.Material4? <p className="xs:text-wrap xs:leading-7 xs:mt-6 xs:words-break
      xl:text-wrap xl:leading-8 xl:mt-6 " > 4: {data.Material4} </p>:''}
      
      <h1 className="xl:text-2xl  xl:text-black-900 xl:mt-6 ">{data.CircuitDiagramInfo}</h1>  
      <LazyLoad>
< img  className="xl:h-60  xl:mt-10 xl:ml-52 "src={data.image2}/>
</LazyLoad> 

<h1 className="xs:text-2xl  xs:text-black-900 xs:mt-8
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

<h1 className="text-2xl  text-black-900 mt-8">Code:</h1>
<div >
<Suspense fallback={<h1>Code is loading</h1>}>
<CodeDemo code={props.code}/>
</Suspense>
    </div>
<h1  className="text-2xl text-black-900 mt-6">Result:</h1>
<p className="text-wrap leading-8">{data.result}</p>
<hr className=" border-black mt-10"/>
    </div>
    </>
    </>
  )
 }
