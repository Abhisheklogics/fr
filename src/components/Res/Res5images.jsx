
import React ,{lazy,Suspense}from "react";
import { useLoaderData } from "react-router-dom";
import LazyLoad from "react-lazyload";
const CodeDemo = lazy(()=>import("../Code/Code"))



 export default function Res5images(props)
 {
  let data= useLoaderData()
  
  
  return(
    <>
     <>
    <div className="xl:h-fit xl:w-1/2 xl:absolute xl:ml-72 xl:mt-32  xl:p-5 xl:bg-slate-50
     xl:bg-cover xl:rounded-xl xl:leading-8 xl:text-justify xl:top-0 xl:break-words">
      
        <h1 className="text-2xl text-center text-black-900">
         {data.ExperimentName}
        </h1>
        <img className="h-48 xl:w-80 ml-32 mt-6" src={data.image1} />
        <h1 className=" text-sm  xl:text-gray-950 xl: mt-6">
         {data.madeBy }
        </h1>
        <p className="xl:text-wrap xl:leading-8 xl:mt-6">
         {data.madeByinfo}
        </p>
        <h1 className="xl:text-2xl  xl:text-black-900 xl:mt-6">
       {data.overview}
       </h1>
        <p className="xl:text-wrap xl:leading-8 xl:mt-6">
         {data.overviewinfo}
        </p>
        <h1 className="  xl:text-gray-950 xl:mt-6 xl:text-2xl ">
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
      
      <h1 className="text-wrap leading-8 mt-6 text-2xl">Specification</h1>
      <LazyLoad> 
        <img src={data.image2} className="xl:h-60 xl:mt-6 xl:ml-[10px] xl:rounded" />
        < img  className="xl:h-72 xl:mt-10  xl:rounded xl:ml-[20px] "src={data.image3}/>
        </LazyLoad> 
        <h1 className="text-2xl text-black-900 mt-6"> {data.
pinDiagramInfo}</h1>
<LazyLoad> 
< img  className="h-40  mt-10   rounded-xl xl:ml-32"src={data.image4}/>
</LazyLoad> 
<h1 className="text-2xl  text-black-900 mt-6 xl:ml-10">{data.CircuitDiagramInfo}</h1>
<LazyLoad> 
<img className="h-40  mt-10 ml-52 rounded-xl " src={data.image5}/>
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
{data.step6? <p className="xs:text-wrap xs:leading-8 xs:mt-6
xl:text-wrap xl:leading-8 xl:mt-6">6:  { data.step6}</p>:''}
{data.step7? <p className="xs:text-wrap xs:leading-8 xs:mt-6
xl:text-wrap xl:leading-8 xl:mt-6">7:  { data.step7}</p>:''}
<h1 className="text-2xl  text-black-900 mt-8">Code:</h1>
<div >
  <Suspense fallback={<h1>Code is loading</h1>}>
<CodeDemo code={props.code}/>
</Suspense>
    </div>
<h1  className="xl:text-2xl xl:text-black-900 xl:mt-6">Result:</h1>
<p className="xl:text-wrap xl:leading-8">{data.result}</p>
<hr className=" xl:border-black xl:mt-10"/>
    </div>
    </>
    </>
  )
 }
 