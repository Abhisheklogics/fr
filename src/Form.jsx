

import React, { useState } from "react";
import axios from "axios";
export default function Form() {

 
  let [ExperimentId,setExperimentId]= useState('')
  let [ExperimentName,setExperimentName]= useState('')
  let [Experiment,setExperiment]= useState('')
  let [ExperimentIntro1,setExperimentIntro1]= useState('')
  let [ExperimentIntro2,setExperimentIntro2]= useState('')
  let [Experimentval,setExperimentval]= useState('')
  let [ExperimentType,setExperimentType]= useState('')
  let [ExperimentTypeCathVal1,setExperimentTypeCathVal1]= useState('')
  let [ExperimentTypeCathVal2,setExperimentTypeCathVal2]= useState('')
  let [ExperimentTypeCathVal3,setExperimentTypeCathVal3]= useState('')
  let [ExperimentTypeAnodeVal1,setExperimentTypeAnodeVal1]= useState('')
  let [ExperimentTypeAnodeVal2,setExperimentTypeAnodeVal2]= useState('')
  let [ExperimentTypeAnodeVal3,setExperimentTypeAnodeVal3]= useState('')
  let [ExperimentPinVal,setExperimentPinVal]= useState('')
  let [ExperimentPinVal1,setExperimentPinVal1]= useState('')
  let [ExperimentPinVal2,setExperimentPinVal2]= useState('')
  let [ExperimentPinVal3,setExperimentPinVal3]= useState('')
  
  let [ExperimentPinVal4,setExperimentPinVal4]= useState('')
  let [ExperimentCathConfig,setExperimentCathConfig]= useState('')
  let [ExperimentCathConfigVal1,setExperimentCathConfigVal1]= useState('')
  let [ExperimentCathConfigVal2,setExperimentCathConfigVal2]= useState('')
  let [ExperimentCathConfigVal3,setExperimentCathConfigVal3]= useState('')
  let [ExperimentWork,setExperimentWork]= useState('')
  let [ExperimentApplication1,setExperimentApplication1]= useState('')
  let [ExperimentApplication2,setExperimentApplication2]= useState('')
  let [ExperimentApplication3,setExperimentApplication3]= useState('')
  let [ExperimentApplication4,setExperimentApplication4]= useState('')
  let [ExperimentApplication5,setExperimentApplication5]= useState('')
  let [ExperimentApplication6,setExperimentApplication6]= useState('')
  let [ ExperimentHard1,setExperimentHard1]= useState('')
  let [ExperimentHard2,setExperimentHard2]= useState('')
  let [ExperimentHard3,setExperimentHard3]= useState('')
  let [ExperimentHard4,setExperimentHard4]= useState('')
  let [ExperimentHard5,setExperimentHard5]= useState('')
  let [ExperimentHard6,setExperimentHard6]= useState('')
  let [ ExperimentSoft1,setExperimentSoft1]= useState('')
  let [ ExperimentSoft2,setExperimentSoft2]= useState('')
  let [ ExperimentSoft3,setExperimentSoft3]= useState('')
  let [ExperimentPinCon,setExperimentPinCon]= useState('')
  let [ExperimentCommonC,setExperimentCommonC]= useState('')
  let [ ExperimentCommonC1,setExperimentCommonC1]= useState('')
  let [ExperimentCommonC2,setExperimentCommonC2]= useState('')
  let [ExperimentCommonC3,setExperimentCommonC3]= useState('')
  let [ExperimentCommonA,setExperimentCommonA]= useState('')
  let [ExperimentCommonA1,setExperimentCommonA1]= useState('')
  let [ExperimentCommonA2,setExperimentCommonA2]= useState('')
  let [ ExperimentCommonA3,setExperimentCommonA3]= useState('')
  let [  ExperimentStep1,setExperimentStep1]= useState('')
  let [ ExperimentStep2,setExperimentStep2]= useState('')
  let [ ExperimentStep3,setExperimentStep3]= useState('')
  let [  ExperimentStep4,setExperimentStep4]= useState('')
  let [ ExperimentStep5,setExperimentStep5]= useState('')
  let [ ExperimentStep6,setExperimentStep6]= useState('')
  let [  ExperimentStep7,setExperimentStep7]= useState('')
  let [ ExperimentStepVal1,setExperimentStepVal1]= useState('')
  let [ ExperimentStepVal2,setExperimentStepVal2]= useState('')
  let [  ExperimentStepVal3,setExperimentStepVal3]= useState('')
  let [ ExperimentStepVal4,setExperimentStepVal4]= useState('')
  let [ ExperimentStepVal5,setExperimentStepVal5]= useState('')
  let [ ExperimentStepVal6,setExperimentStepVal6]= useState('')
  let [ ExperimentStepVal7,setExperimentStepVal7]= useState('')
  let [ ExperimentStepVal8,setExperimentStepVal8]= useState('')
  let [ ExperimentStepVal9,setExperimentStepVal9]= useState('')
  let [ ExperimentStepVal10,setExperimentStepVal10]= useState('')
  let [ ExperimentStepVal11,setExperimentStepVal11]= useState('')
  let [ ExperimentStepVal12,setExperimentStepVal12]= useState('')
  let [ ExperimentStepVal13,setExperimentStepVal13]= useState('')
  let [ ExperimentStepVal14,setExperimentStepVal14]= useState('')
  let [ result,setresult]= useState('')



  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let form= new FormData()
  
  let ExperimetObj={
    ExperimentId,
    ExperimentName,
    Experiment,
    ExperimentIntro1,
    ExperimentIntro2,
    Experimentval,
    ExperimentType,
    ExperimentTypeCathVal1,
    ExperimentTypeCathVal2,
    ExperimentTypeCathVal3,
    ExperimentWork,
    ExperimentApplication1,
    ExperimentApplication2,
    ExperimentApplication3,
    ExperimentApplication4,
    ExperimentApplication5,
    ExperimentApplication6,
    ExperimentHard1,
    ExperimentHard2,
    ExperimentHard3,
    ExperimentHard4,
    ExperimentHard5,
    ExperimentHard6,
    ExperimentSoft1,
    ExperimentSoft2,
    ExperimentSoft3,
    ExperimentPinCon,
    ExperimentCommonC,
    ExperimentCommonC1,
    ExperimentCommonC2,
    ExperimentCommonC3,
    ExperimentCommonA,
    ExperimentCommonA1,
    ExperimentCommonA2,
    ExperimentCommonA3,
    ExperimentStep1,
    ExperimentStep2,
    ExperimentStep3,
    ExperimentStep4,
    ExperimentStep5,
    ExperimentStep6,
    ExperimentStep7,
    ExperimentStepVal1,
    ExperimentStepVal2,
    ExperimentStepVal3,
    ExperimentStepVal4,
    ExperimentStepVal5,
    ExperimentStepVal6,
    ExperimentStepVal7,
    ExperimentStepVal8,
    ExperimentStepVal9,
    ExperimentStepVal10,
    ExperimentStepVal11,
    ExperimentStepVal12,
    ExperimentStepVal13,
    ExperimentStepVal14,
    result

  











  }
   console.log(ExperimentId,ExperimentName)
   
    
     axios.post('/arduino/save',ExperimetObj).then((res)=>console.log(res)).catch((err)=>console.log(err))
    
  };

  return (
    <form onSubmit={handleSubmit} action="/arduino/save" method="post"  className="mt-10 ml-96">

       <div>
      
      <label>exid</label>
      <input
        type="text"
        value={ExperimentId}
        name="ExperimentId"
        
        onChange={(e)=>setExperimentId(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>exname</label>
      <input
        type="text"
        value={ExperimentName}
        name="ExperimentName"
        
        onChange={(e)=>setExperimentName(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>Experiment</label>
      <input
        type="text"
        value={Experiment}
        name="Experiment"
        
        onChange={(e)=>setExperiment(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentIntro1</label>
      <input
        type="text"
        value={ExperimentIntro1}
        name="ExperimentIntro1"
        
        onChange={(e)=>setExperimentIntro1(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentIntro2</label>
      <input
        type="text"
        value={ExperimentIntro2}
        name="ExperimentIntro2"
        
        onChange={(e)=>setExperimentIntro2(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>Experimentval</label>
      <input
        type="text"
        value={Experimentval}
        name="Experimentval"
        
        onChange={(e)=>setExperimentval(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentType</label>
      <input
        type="text"
        value={ExperimentType}
        name="ExperimentType"
        
        onChange={(e)=>setExperimentType(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentTypeCathVal1</label>
      <input
        type="text"
        value={ExperimentTypeCathVal1}
        name="ExperimentTypeCathVal1"
        
        onChange={(e)=>setExperimentTypeCathVal1(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentTypeCathVal2</label>
      <input
        type="text"
        value={ExperimentTypeCathVal2}
        name="ExperimentTypeCathVal2"
        
        onChange={(e)=>setExperimentTypeCathVal2(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentTypeCathVal3</label>
      <input
        type="text"
        value={ExperimentTypeCathVal3}
        name="ExperimentTypeCathVal3"
        
        onChange={(e)=>setExperimentTypeCathVal3(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentTypeAnodeVal1</label>
      <input
        type="text"
        value={ExperimentTypeAnodeVal1}
        name="ExperimentTypeAnodeVal1"
        
        onChange={(e)=>setExperimentTypeAnodeVal1(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentTypeAnodeVal2</label>
      <input
        type="text"
        value={ExperimentTypeAnodeVal2}
        name="ExperimentTypeAnodeVal2"
        
        onChange={(e)=>setExperimentTypeAnodeVal2(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentTypeAnodeVal3</label>
      <input
        type="text"
        value={ExperimentTypeAnodeVal3}
        name="ExperimentTypeAnodeVal3"
        
        onChange={(e)=>setExperimentTypeAnodeVal3(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentPinVal</label>
      <input
        type="text"
        value={ExperimentPinVal}
        name="ExperimentPinVal"
        
        onChange={(e)=>setExperimentPinVal(e.target.value)}
       
      />
    </div>
   
    <div>
      
      <label>ExperimentPinVal1</label>
      <input
        type="text"
        value={ExperimentPinVal1}
        name="ExperimentPinVal1"
        
        onChange={(e)=>setExperimentPinVal1(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentPinVal2</label>
      <input
        type="text"
        value={ExperimentPinVal2}
        name="ExperimentPinVal2"
        
        onChange={(e)=>setExperimentPinVal2(e.target.value)}
       
      />
    </div>
   
    <div>
    <div>
      
      <label>ExperimentPinVal3</label>
      <input
        type="text"
        value={ExperimentPinVal3}
        name="ExperimentPinVal3"
        
        onChange={(e)=>setExperimentPinVal3(e.target.value)}
       
      />
    </div>
      <label>ExperimentPinVal4</label>
      <input
        type="text"
        value={ExperimentPinVal4}
        name="ExperimentPinVal4"
        
        onChange={(e)=>setExperimentPinVal4(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentCathConfig</label>
      <input
        type="text"
        value={ExperimentCathConfig}
        name="ExperimentCathConfig"
        
        onChange={(e)=>setExperimentCathConfig(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentCathConfigVal1</label>
      <input
        type="text"
        value={ExperimentCathConfigVal1}
        name="ExperimentCathConfigVal1"
        
        onChange={(e)=>setExperimentCathConfigVal1(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentCathConfigVal2</label>
      <input
        type="text"
        value={ExperimentCathConfigVal2}
        name="ExperimentCathConfigVal2"
        
        onChange={(e)=>setExperimentCathConfigVal2(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentCathConfigVal3</label>
      <input
        type="text"
        value={ExperimentCathConfigVal3}
        name="ExperimentCathConfigVal3"
        
        onChange={(e)=>setExperimentCathConfigVal3(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentWork</label>
      <input
        type="text"
        value={ExperimentWork}
        name="ExperimentWork"
        
        onChange={(e)=>setExperimentWork(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentApplication1</label>
      <input
        type="text"
        value={ExperimentApplication1}
        name="ExperimentApplication1"
        
        onChange={(e)=>setExperimentApplication1(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentApplication2</label>
      <input
        type="text"
        value={ExperimentApplication2}
        name="ExperimentApplication2"
        
        onChange={(e)=>setExperimentApplication2(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentApplication3</label>
      <input
        type="text"
        value={ExperimentApplication3}
        name="ExperimentApplication3"
        
        onChange={(e)=>setExperimentApplication3(e.target.value)}
       
      />
       <div>
      
      <label>ExperimentApplication4</label>
      <input
        type="text"
        value={ExperimentApplication4}
        name="ExperimentApplication4"
        
        onChange={(e)=>setExperimentApplication4(e.target.value)}
       
      />
       <div>
      
      <label>ExperimentApplication5</label>
      <input
        type="text"
        value={ExperimentApplication5}
        name="ExperimentApplication5"
        
        onChange={(e)=>setExperimentApplication5(e.target.value)}
       
      />
       </div>
      
      <label>ExperimentApplication6</label>
      <input
        type="text"
        value={ExperimentApplication6}
        name="ExperimentApplication6"
        
        onChange={(e)=>setExperimentApplication6(e.target.value)}
       
      />
       </div>
      
      <label>ExperimentHard1</label>
      <input
        type="text"
        value={ExperimentHard1}
        name="ExperimentHard1"
        
        onChange={(e)=>setExperimentHard1(e.target.value)}
       
      />
       </div>
      
      <label>ExperimentHard2</label>
      <input
        type="text"
        value={ExperimentHard2}
        name="ExperimentHard2"
        
        onChange={(e)=>setExperimentHard2(e.target.value)}
       
      />
       <div>
      
      <label>ExperimentHard3</label>
      <input
        type="text"
        value={ExperimentHard3}
        name="ExperimentApplication3"
        
        onChange={(e)=>setExperimentHard3(e.target.value)}
       
      />
       </div>
      
      <label>ExperimentHard4</label>
      <input
        type="text"
        value={ExperimentHard4}
        name="ExperimentHard4"
        
        onChange={(e)=>setExperimentHard4(e.target.value)}
       
      />
      
      <div>
      <label>ExperimentHard5</label>
      <input
        type="text"
        value={ExperimentHard5}
        name="ExperimentHard5"
        
        onChange={(e)=>setExperimentHard5(e.target.value)}
       
      />
 </div>
       <div>
      
      <label>ExperimentHard6</label>
      <input
        type="text"
        value={ExperimentHard6}
        name="ExperimentHard6"
        
        onChange={(e)=>setExperimentHard6(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentSoft1</label>
      <input
        type="text"
        value={ExperimentSoft1}
        name="ExperimentSoft1"
        
        onChange={(e)=>setExperimentSoft1(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentSoft2</label>
      <input
        type="text"
        value={ExperimentSoft2}
        name="ExperimentSoft2"
        
        onChange={(e)=>setExperimentSoft2(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentSoft3</label>
      <input
        type="text"
        value={ExperimentSoft3}
        name="ExperimentSoft3"
        
        onChange={(e)=>setExperimentSoft3(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentPinCon</label>
      <input
        type="text"
        value={ExperimentPinCon}
        name="ExperimentPinCon"
        
        onChange={(e)=>setExperimentPinCon(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentCommonC</label>
      <input
        type="text"
        value={ExperimentCommonC}
        name="ExperimentCommonC"
        
        onChange={(e)=>setExperimentCommonC(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentCommonC1</label>
      <input
        type="text"
        value={ExperimentCommonC1}
        name="ExperimentCommonC1"
        
        onChange={(e)=>setExperimentCommonC1(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentCommonC2</label>
      <input
        type="text"
        value={ExperimentCommonC2}
        name="ExperimentCommonC2"
        
        onChange={(e)=>setExperimentCommonC2(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentCommonC3</label>
      <input
        type="text"
        value={ExperimentCommonC3}
        name="ExperimentCommonC3"
        
        onChange={(e)=>setExperimentCommonC3(e.target.value)}
       
      />
    </div>
      
      
    <div>
      
      <label>ExperimentCommonA</label>
      <input
        type="text"
        value={ExperimentCommonA}
        name="ExperimentCommonA"
        
        onChange={(e)=>setExperimentCommonA(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentCommonA1</label>
      <input
        type="text"
        value={ExperimentCommonA1}
        name="ExperimentCommonA1"
        
        onChange={(e)=>setExperimentCommonA1(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentCommonA2</label>
      <input
        type="text"
        value={ExperimentCommonA2}
        name="ExperimentCommonA2"
        
        onChange={(e)=>setExperimentCommonA2(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentCommonA3</label>
      <input
        type="text"
        value={ExperimentCommonA3}
        name="ExperimentCommonA3"
        
        onChange={(e)=>setExperimentCommonA3(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentStep1</label>
      <input
        type="text"
        value={ExperimentStep1}
        name="ExperimentStep1"
        
        onChange={(e)=>setExperimentStep1(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentStep2</label>
      <input
        type="text"
        value={ExperimentStep2}
        name="ExperimentStep2"
        
        onChange={(e)=>setExperimentStep2(e.target.value)}
       
      />
    </div>
     
    <div>
      
      <label>ExperimentStep3</label>
      <input
        type="text"
        value={ExperimentStep3}
        name="ExperimentStep3"
        
        onChange={(e)=>setExperimentStep3(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentStep4</label>
      <input
        type="text"
        value={ExperimentStep4}
        name="ExperimentStep4"
        
        onChange={(e)=>setExperimentStep4(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentStep5</label>
      <input
        type="text"
        value={ExperimentStep5}
        name="ExperimentStep5"
        
        onChange={(e)=>setExperimentStep5(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentStep6</label>
      <input
        type="text"
        value={ExperimentStep6}
        name="ExperimentStep6"
        
        onChange={(e)=>setExperimentStep6(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentStep7</label>
      <input
        type="text"
        value={ExperimentStep7}
        name="ExperimentStep7"
        
        onChange={(e)=>setExperimentStep7(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentStepVal1</label>
      <input
        type="text"
        value={ExperimentStepVal1}
        name="ExperimentStepVal1"
        
        onChange={(e)=>setExperimentStepVal1(e.target.value)}
       
      />
    </div>
      
      
    <div>
      
      <label>ExperimentStepVal2</label>
      <input
        type="text"
        value={ExperimentStepVal2}
        name="ExperimentStepVal2"
        
        onChange={(e)=>setExperimentStepVal2(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentStepVal3</label>
      <input
        type="text"
        value={ExperimentStepVal3}
        name="ExperimentStepVal3"
        
        onChange={(e)=>setExperimentStepVal3(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentStepVal4</label>
      <input
        type="text"
        value={ExperimentStepVal4}
        name="ExperimentStepVal4"
        
        onChange={(e)=>setExperimentStepVal4(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentStepVal5</label>
      <input
        type="text"
        value={ExperimentStepVal5}
        name="ExperimentStepVal5"
        
        onChange={(e)=>setExperimentStepVal5(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentStepVal6</label>
      <input
        type="text"
        value={ExperimentStepVal6}
        name="ExperimentStepVal6"
        
        onChange={(e)=>setExperimentStepVal6(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentStepVal7</label>
      <input
        type="text"
        value={ExperimentStepVal7}
        name="ExperimentStep2"
        
        onChange={(e)=>setExperimentStepVal7(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentStepVal8</label>
      <input
        type="text"
        value={ExperimentStepVal8}
        name="ExperimentStepVal8"
        
        onChange={(e)=>setExperimentStepVal8(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentStepVal9</label>
      <input
        type="text"
        value={ExperimentStepVal9}
        name="ExperimentStepVal9"
        
        onChange={(e)=>setExperimentStepVal9(e.target.value)}
       
      />
    </div>
      
      
    <div>
      
      <label>ExperimentStepVal10</label>
      <input
        type="text"
        value={ExperimentStepVal10}
        name="ExperimentStepVal10"
        
        onChange={(e)=>setExperimentStepVal10(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentStepVal11</label>
      <input
        type="text"
        value={ExperimentStepVal11}
        name="ExperimentStepVal11"
        
        onChange={(e)=>setExperimentStepVal11(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentStepVal12</label>
      <input
        type="text"
        value={ExperimentStepVal12}
        name="ExperimentStepVal12"
        
        onChange={(e)=>setExperimentStepVal12(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentStepVal13</label>
      <input
        type="text"
        value={ExperimentStepVal13}
        name="ExperimentStepVal13"
        
        onChange={(e)=>setExperimentStepVal13(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>ExperimentStepVal14</label>
      <input
        type="text"
        value={ExperimentStepVal14}
        name="ExperimentStepVal14"
        
        onChange={(e)=>setExperimentStepVal14(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>result</label>
      <input
        type="text"
        value={result}
        name="result"
        
        onChange={(e)=>setresult(e.target.value)}
       
      />
    </div>
      <button type="submit">Submit</button>
    </form>
  );
}
