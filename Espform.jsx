

import React, { useState } from "react";
import axios from "axios";
export default function Form() {

 
  let [ExperimentId,setExperimentId]= useState('')
  let [ ExperimentName,setExperimentName]=useState('')
 
 
  let [ overview,setoverview]=useState('')


 let [ component1,setcomponent1]=useState('')
 let [ component2,setcomponent2]=useState('')
 let [ component3,setcomponent3]=useState('')

  let [pinDiagramInfo,setpinDiagramInfo]=useState('')

  let [ CircuitDiagramInfo,setCircuitDiagramInfo]=useState('')
  let [step1,setStep1]=useState(' ')
  let [step2,setStep2]=useState(' ')
  let [step3,setStep3]=useState(' ')
  let [step4,setStep4]=useState(' ')
  let [step5,setStep5]=useState(' ')
  let [step6,setStep6]=useState(' ')
  
  let [step7,setStep7]=useState(' ')
  let [step8,setStep8]=useState(' ')
  let [step9,setStep9]=useState(' ')
  let [step10,setStep10]=useState(' ')
  let [step11,setStep11]=useState(' ')
  let [step12,setStep12]=useState(' ')
  let [step13,setStep13]=useState(' ')
  let [step14,setStep14]=useState(' ')
  let [step15,setStep15]=useState(' ')
  let [step16,setStep16]=useState(' ')
  let [step17,setStep17]=useState(' ')
  let [step18,setStep18]=useState(' ')

  let [result,setresult]=useState('')
  let [image1,setimage1]=useState('')
  let [image2,setimage2]=useState('')
  let [image3,setimage3]=useState('')
  let [image4,setimage4]=useState('')

  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let form= new FormData()
  
   form.append('ExperimentId',ExperimentId)
   form.append('ExperimentName',ExperimentName)
  
  
   
   form.append('overview',overview)
  
   form.append(' component1', component1)
   form.append(' component2', component2)
   form.append(' component3', component3)
   

  form.append('pinDiagramInfo',pinDiagramInfo)
 
   form.append('CircuitDiagramInfo',CircuitDiagramInfo)
   form.append('step1',step1)
   form.append('step2',step2)
   form.append('step3',step3)
   form.append('step4',step4)
   form.append('step5',step5)
   form.append('step6',step6)
   form.append('step7',step7)
   form.append('step8',step8)
   form.append('step9',step9)
   form.append('step10',step10)
   form.append('step11',step11)
   form.append('step12',step12)
   form.append('step13',step13)
   form.append('step14',step14)
   form.append('step15',step15)
   form.append('step16',step16)
   form.append('step17',step17)
   form.append('step18',step18)
   
  
  
   form.append('result',result)
  
   form.append('image1',image1)  
   form.append('image2',image2)
   form.append('image3',image3)
   form.append('image4',image4)
   
    
     axios.post('/arduino/datasave2',form).then((res)=>console.log(res)).catch((err)=>console.log(err))
  };

  return (
    <form onSubmit={handleSubmit} action="/arduino/datasave2" method="post" encType="multipart/form-data" className="mt-10 ml-96">
       <div>
      
      <label>exid</label>
      <input
        type="text"
        
        name="ExperimentId"
        
        onChange={(e)=>setExperimentId(e.target.value)}
        required
      />
    </div>
    <div>
      
      <label>ExperimentName</label>
      <input
        type="text"
        
        name="ExperimentName"
        
        onChange={(e)=>setExperimentName(e.target.value)}
        required
      />
    </div>
   
   
    
   
    <div>
      
      <label>overview</label>
      <input
        type="text"
        
        name="overview"
        
        onChange={(e)=>setoverview(e.target.value)}
        
      />
    </div>
    
    
    
      
      
     
    <div>
      
      <label> component1</label>
      <input
        type="text"
        
        name="component1"
        
        onChange={(e)=>setcomponent1(e.target.value)}
        required
      />
    </div>
    <div>
      
      <label>component2</label>
      <input
        type="text"
        
        name="componen2"
        
        onChange={(e)=>setcomponent2(e.target.value)}
        required
      />
    </div>
    <div>
      
      <label>component3</label>
      <input
        type="text"
        
        name="component3"
        
        onChange={(e)=>setcomponent3(e.target.value)}
        required
      />
    </div>
   
    
    <div>
    <div>
      
      <label>pinDiagramInfo</label>
      <input
        type="text"
        
        name="pinDiagramInfo"
        
        onChange={(e)=>setpinDiagramInfo(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>CircuitDiagramInfo</label>
      <input
        type="text"
        
        name="CircuitDiagramInfo"
        
        onChange={(e)=>setCircuitDiagramInfo(e.target.value)}
       
      />
    </div>
      <label>step1</label>
      <input
        type="text"
        
        name="step1"
        
        onChange={(e)=>setStep1(e.target.value)}
        
      />
    </div>
    <div>
      
      <label>step2</label>
      <input
        type="text"
        
        name="step2"
        
        onChange={(e)=>setStep2(e.target.value)}
        
      />
    </div>
    <div>
      
      <label>step3</label>
      <input
        type="text"
        
        name="step3"
        
        onChange={(e)=>setStep3(e.target.value)}
      
      />
    </div>
    <div>
      
      <label>step4</label>
      <input
        type="text"
        
        name="step4"
        
        onChange={(e)=>setStep4(e.target.value)}
        
      />
    </div>
    <div>
      
      <label>step5</label>
      <input
        type="text"
        
        name="step5"
        
        onChange={(e)=>setStep5(e.target.value)}
        
      />
    </div>
    <div>
      
      <label>step6</label>
      <input
        type="text"
        
        name="step6"
        
        onChange={(e)=>setStep6(e.target.value)}
       
      />
    </div>
    
      <div>
      <label>result</label>
      <input
        type="text"
        
        name="result"
        
        onChange={(e)=>setresult(e.target.value)}
        required
      />
    </div>
      <div>
      
        <label>image1</label>
        <input
          type="file"
          
          name="image1"
          
          onChange={(e)=>setimage1(e.target.files[0])}
          required
        />
      </div>
      <div>
        <label >image2</label>
        <input
          type="file"
          
          name="image2"
         
          onChange={(e)=>setimage2(e.target.files[0])}
          required
        />
      </div>
      <div>
        <label >image3</label>
        <input
          type="file"
          
          name="image3"
          
          onChange={(e)=>setimage3(e.target.files[0])}
          required
        />
      </div>
      <div>
        <label >image4</label>
        <input
          type="file"
          
          name="image4"
         
          onChange={(e)=>setimage4(e.target.files[0])}
          required
        />
      </div>
      
      
     
     
      
      <button type="submit">Submit</button>
    </form>
  );
}