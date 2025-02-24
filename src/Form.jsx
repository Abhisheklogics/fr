

import React, { useState } from "react";
import axios from "axios";
export default function Form() {

 
  let [ExperimentId,setExperimentId]= useState('')
  let [ExperimentName,setExperimentName]= useState('')
  let [heading1,setheading1]= useState('')
  let [heading2,setheading2]= useState('')
  let [heading3,setheading3]= useState('')
  let [heading4,setheading4]= useState('')
  let [heading5,setheading5]= useState('')
  let [heading6,setheading6]= useState('')
  let [heading7,setheading7]= useState('')
  let [heading8,setheading8]= useState('')
  let [heading9,setheading9]= useState('')
  let [heading10,setheading10]= useState('')

  let [heading11,setheading11]= useState('')
  let [heading12,setheading12]= useState('')
  let [heading13,setheading13]= useState('')
  let [heading14,setheading14]= useState('')
  let [heading15,setheading15]= useState('')
  let [heading16,setheading16]= useState('')
  let [heading17,setheading17]= useState('')
  let [heading18,setheading18]= useState('')
  let [heading19,setheading19]= useState('')
  let [heading20,setheading20]= useState('')

  let [heading21,setheading21]= useState('')
  let [heading22,setheading22]= useState('')
  let [heading23,setheading23]= useState('')
  let [heading24,setheading24]= useState('')
  let [heading25,setheading25]= useState('')
  let [heading26,setheading26]= useState('')
  let [heading27,setheading27]= useState('')
  let [heading28,setheading28]= useState('')
  let [heading29,setheading29]= useState('')
  let [heading30,setheading30]= useState('')

  let [heading31,setheading31]= useState('')
  let [heading32,setheading32]= useState('')
  let [heading33,setheading33]= useState('')
  let [heading34,setheading34]= useState('')
  let [heading35,setheading35]= useState('')

  let [heading36,setheading36]= useState('')
  let [heading37,setheading37]= useState('')
  let [heading38,setheading38]= useState('')
  let [heading39,setheading39]= useState('')
  let [heading40,setheading40]= useState('')

  let [para1,setpara1]= useState('')
  let [para2,setpara2]= useState('')
  let [para3,setpara3]= useState('')
  let [para4,setpara4]= useState('')
  let [para5,setpara5]= useState('')
  let [para6,setpara6]= useState('')
  let [para7,setpara7]= useState('')
  let [para8,setpara8]= useState('')
  let [para9,setpara9]= useState('')
  let [para10,setpara10]= useState('')
 
  let [para11,setpara11]= useState('')
  let [para12,setpara12]= useState('')
  let [para13,setpara13]= useState('')
  let [para14,setpara14]= useState('')
  let [para15,setpara15]= useState('')
  let [para16,setpara16]= useState('')
  let [para17,setpara17]= useState('')
  let [para18,setpara18]= useState('')
  let [para19,setpara19]= useState('')
  let [para20,setpara20]= useState('')

  let [para21,setpara21]= useState('')
  let [para22,setpara22]= useState('')
  let [para23,setpara23]= useState('')
  let [para24,setpara24]= useState('')
  let [para25,setpara25]= useState('')
  let [para26,setpara26]= useState('')
  let [para27,setpara27]= useState('')
  let [para28,setpara28]= useState('')
  let [para29,setpara29]= useState('')
  let [para30,setpara30]= useState('')

  let [para31,setpara31]= useState('')
  let [para32,setpara32]= useState('')
  let [para33,setpara33]= useState('')
  let [para34,setpara34]= useState('')
  let [para35,setpara35]= useState('')
  let [para36,setpara36]= useState('')
  let [para37,setpara37]= useState('')
  let [para38,setpara38]= useState('')
  let [para39,setpara39]= useState('')
  let [para40,setpara40]= useState('')

  let [para41,setpara41]= useState('')
  let [para42,setpara42]= useState('')
  let [para43,setpara43]= useState('')
  let [para44,setpara44]= useState('')
  let [para45,setpara45]= useState('')
  let [para46,setpara46]= useState('')
  let [para47,setpara47]= useState('')
  let [para48,setpara48]= useState('')
  let [para49,setpara49]= useState('')
  let [para50,setpara50]= useState('')

  let [para51,setpara51]= useState('')
  let [para52,setpara52]= useState('')
  let [para53,setpara53]= useState('')
  let [para54,setpara54]= useState('')
  let [para55,setpara55]= useState('')
  let [para56,setpara56]= useState('')
  let [para57,setpara57]= useState('')
  let [para58,setpara58]= useState('')
  let [para59,setpara59]= useState('')
  let [para60,setpara60]= useState('')

  let [para61,setpara61]= useState('')
  let [para62,setpara62]= useState('')
  let [para63,setpara63]= useState('')
  let [para64,setpara64]= useState('')
  let [para65,setpara65]= useState('')
  let [para66,setpara66]= useState('')
  let [para67,setpara67]= useState('')
  let [para68,setpara68]= useState('')
  let [para69,setpara69]= useState('')
  let [para70,setpara70]= useState('')

  let [para71,setpara71]= useState('')
  let [para72,setpara72]= useState('')
  let [para73,setpara73]= useState('')
  let [para74,setpara74]= useState('')
  let [para75,setpara75]= useState('')
  let [para76,setpara76]= useState('')
  let [para77,setpara77]= useState('')
  let [para78,setpara78]= useState('')
  let [para79,setpara79]= useState('')
  let [para80,setpara80]= useState('')

  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let form= new FormData()
  
  let ExperimetObj={
    ExperimentId,
    ExperimentName,
    heading1,
    heading2,
    heading3,
    heading4,
    heading5,
    heading6,
    heading7,
    heading8,
    heading9,
    heading10,
    heading11,
    heading12,
    heading13,
    heading14,
    heading15,
    heading16,
    heading17,
    heading18,
    heading19,
    heading20,
    heading21,
    heading22,
    heading23,
    heading24,
    heading25,
    heading26,
    heading27,
    heading28,
    heading29,
    heading30,
    heading31,
    heading32,
    heading33,
    heading34,
    heading35,

    heading36,
    heading37,
    heading38,
    heading39,
    heading40,
    para1,
    para2,
    para3,
    para4,
    para5,
    para6,
    para7,
    para8,
    para9,
    para10,

    para11,
    para12,
    para13,
    para14,
    para15,
    para16,
    para17,
    para18,
    para19,
    para20,

    para21,
    para22,
    para23,
    para24,
    para25,
    para26,
    para27,
    para28,
    para29,
    para30,

    para31,
    para32,
    para33,
    para34,
    para35,
    para36,
    para37,
    para38,
    para39,
    para40,

    para41,
    para42,
    para43,
    para44,
    para45,
    para46,
    para47,
    para48,
    para49,
    para50,

    para51,
    para52,
    para53,
    para54,
    para55,
    para56,
    para57,
    para58,
    para59,
    para60,

    para61,
    para62,
    para63,
    para64,
    para65,
    para66,
    para67,
    para68,
    para69,
    para70,


    para71,
    para72,
    para73,
    para74,
    para75,
    para76,
    para77,
    para78,
    para79,
    para80,
  











  }
   
   
    
     axios.post('/arduino/save',ExperimetObj).then((res)=>console.log(res)).catch((err)=>console.log(err))
    
  };

  return (
    <form onSubmit={handleSubmit} action="/arduino/save" method="post"  className="mt-10  grid gap-6 ml-96">
<h1 className="font-bold text-2xl p-2"> Experiments data form</h1>
       <div>
      
      <label>exid</label> 
      <input
        type="text"
        value={ExperimentId}
        name="ExperimentId"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setExperimentId(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>exname</label>
      <input
        type="text"
        value={ExperimentName}
        name="ExperimentName"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setExperimentName(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading1</label>
      <input
        type="text"
        value={heading1}
        name="heading1"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading1(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading2</label>
      <input
        type="text"
        value={heading2}
        name="heading2"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading2(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading3</label>
      <input
        type="text"
        value={heading3}
        name="heading3"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading3(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading4</label>
      <input
        type="text"
        value={heading4}
        name="heading4"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading4(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading5</label>
      <input
        type="text"
        value={heading5}
        name="heading5"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading5(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading6</label>
      <input
        type="text"
        value={heading6}
        name="heading6"
        className="p-2 ml-2 rounded" 
        onChange={(e)=>setheading6(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading7</label>
      <input
        type="text"
        value={heading7}
        name="heading7"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading7(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading8</label>
      <input
        type="text"
        value={heading8}
        name="heading8"
        className="p-2 ml-2 rounded" 
        onChange={(e)=>setheading8(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading9</label>
      <input
        type="text"
        value={heading9}
        name="heading9"
        className="p-2 ml-2 rounded" 
        onChange={(e)=>setheading9(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading10</label>
      <input
        type="text"
        value={heading10}
        name="heading10"
        className="p-2 ml-2 rounded" 
        onChange={(e)=>setheading10(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading11</label>
      <input
        type="text"
        value={heading11}
        name="heading11"
        className="p-2 ml-2 rounded" 
        onChange={(e)=>setheading11(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading12</label>
      <input
        type="text"
        value={heading12}
        name="heading12"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading12(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading13</label>
      <input
        type="text"
        value={heading13}
        name="heading13"
        className="p-2 ml-2 rounded" 
        onChange={(e)=>setheading13(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading14</label>
      <input
        type="text"
        value={heading14}
        name="heading14"
        className="p-2 ml-2 rounded" 
        onChange={(e)=>setheading14(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading15</label>
      <input
        type="text"
        value={heading15}
        name="heading15"
        className="p-2 ml-2 rounded" 
        onChange={(e)=>setheading15(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading16</label>
      <input
        type="text"
        value={heading16}
        name="heading16"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading16(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading17</label>
      <input
        type="text"
        value={heading17}
        name="heading17"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading17(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading18</label>
      <input
        type="text"
        value={heading18}
        name="heading18"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading18(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading19</label>
      <input
        type="text"
        value={heading19}
        name="heading19"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading19(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading20</label>
      <input
        type="text"
        value={heading20}
        name="heading20"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading20(e.target.value)}
       
      />
    </div>     
    <div>
      
      <label>heading21</label>
      <input
        type="text"
        value={heading21}
        name="heading21"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading21(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading22</label>
      <input
        type="text"
        value={heading22}
        name="heading22"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading22(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading23</label>
      <input
        type="text"
        value={heading23}
        name="heading23"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading23(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading24</label>
      <input
        type="text"
        value={heading24}
        name="heading24"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading24(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading25</label>
      <input
        type="text"
        value={heading25}
        name="heading25"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading25(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading26</label>
      <input
        type="text"
        value={heading26}
        name="heading26"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading26(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading27</label>
      <input
        type="text"
        value={heading27}
        name="heading27"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading27(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading28</label>
      <input
        type="text"
        value={heading28}
        name="heading28"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading28(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading29</label>
      <input
        type="text"
        value={heading29}
        name="heading29"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading29(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading30</label>
      <input
        type="text"
        value={heading30}
        name="heading30"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading30(e.target.value)}
       
      />
    </div>
    
    
    <div>
      
      <label>heading31</label>
      <input
        type="text"
        value={heading31}
        name="heading31"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading31(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading32</label>
      <input
        type="text"
        value={heading32}
        name="heading32"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading32(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading33</label>
      <input
        type="text"
        value={heading33}
        name="heading33"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading33(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading34</label>
      <input
        type="text"
        value={heading34}
        name="heading34"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading34(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading35</label>
      <input
        type="text"
        value={heading35}
        name="heading35"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading35(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading36</label>
      <input
        type="text"
        value={heading36}
        name="heading36"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading36(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading37</label>
      <input
        type="text"
        value={heading37}
        name="heading37"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading37(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading38</label>
      <input
        type="text"
        value={heading38}
        name="heading38"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading38(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading39</label>
      <input
        type="text"
        value={heading39}
        name="heading39"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading39(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>heading40</label>
      <input
        type="text"
        value={heading40}
        name="heading40"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setheading40(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para1</label>
      <input
        type="text"
        value={para1}
        name="para1"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara1(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para2</label>
      <input
        type="text"
        value={para2}
        name="para2"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara2(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para3</label>
      <input
        type="text"
        value={para3}
        name="para3"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara3(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para4</label>
      <input
        type="text"
        value={para4}
        name="para4"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara4(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para5</label>
      <input
        type="text"
        value={para5}
        name="para5"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara5(e.target.value)}
       
      />
    </div>
    
    
    <div>
      
      <label>para6</label>
      <input
        type="text"
        value={para6}
        name="para6"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara6(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para7</label>
      <input
        type="text"
        value={para7}
        name="para7"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara7(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para8</label>
      <input
        type="text"
        value={para8}
        name="para8"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara8(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para9</label>
      <input
        type="text"
        value={para9}
        name="para9"
        className="p-2 ml-2 rounded" 
        onChange={(e)=>setpara9(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para10</label>
      <input
        type="text"
        value={para10}
        name="para10"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara10(e.target.value)}
       
      />
    </div>


    <div>
      
      <label>para11</label>
      <input
        type="text"
        value={para11}
        name="para11"
        
        onChange={(e)=>setpara11(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para12</label>
      <input
        type="text"
        value={para12}
        name="para12"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara12(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para13</label>
      <input
        type="text"
        value={para13}
        name="para13"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara13(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para14</label>
      <input
        type="text"
        value={para14}
        name="para14"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara14(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para15</label>
      <input
        type="text"
        value={para15}
        name="para15"
        className="p-2 ml-2 rounded" 
        onChange={(e)=>setpara15(e.target.value)}
       
      />
    </div>
    
    
    <div>
      
      <label>para16</label>
      <input
        type="text"
        value={para16}
        name="para16"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara16(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para17</label>
      <input
        type="text"
        value={para17}
        name="para17"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara17(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para18</label>
      <input
        type="text"
        value={para18}
        name="para18"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara18(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para19</label>
      <input
        type="text"
        value={para19}
        name="para19"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara19(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para20</label>
      <input
        type="text"
        value={para20}
        name="para20"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara20(e.target.value)}
       
      />
    </div>



    <div>
      
      <label>para21</label>
      <input
        type="text"
        value={para21}
        name="para21"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara21(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para22</label>
      <input
        type="text"
        value={para22}
        name="para22"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara22(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para23</label>
      <input
        type="text"
        value={para23}
        name="para23"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara23(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para24</label>
      <input
        type="text"
        value={para24}
        name="para24"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara24(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para25</label>
      <input
        type="text"
        value={para25}
        name="para25"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara25(e.target.value)}
       
      />
    </div>
    
    
    <div>
      
      <label>para26</label>
      <input
        type="text"
        value={para26}
        name="para26"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara26(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para27</label>
      <input
        type="text"
        value={para27}
        name="para27"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara27(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para28</label>
      <input
        type="text"
        value={para28}
        name="para28"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara28(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para29</label>
      <input
        type="text"
        value={para29}
        name="para29"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara29(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para30</label>
      <input
        type="text"
        value={para30}
        name="para30"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara30(e.target.value)}
       
      />
    </div>

    <div>
      
      <label>para31</label>
      <input
        type="text"
        value={para31}
        name="para31"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara31(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para32</label>
      <input
        type="text"
        value={para32}
        name="para32"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara32(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para33</label>
      <input
        type="text"
        value={para33}
        name="para33"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara33(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para34</label>
      <input
        type="text"
        value={para34}
        name="para34"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara34(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para35</label>
      <input
        type="text"
        value={para35}
        name="para35"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara35(e.target.value)}
       
      />
    </div>
    
    
    <div>
      
      <label>para36</label>
      <input
        type="text"
        value={para36}
        name="para36"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara36(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para37</label>
      <input
        type="text"
        value={para37}
        name="para37"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara37(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para38</label>
      <input
        type="text"
        value={para38}
        name="para38"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara38(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para39</label>
      <input
        type="text"
        value={para39}
        name="para39"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara39(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para40</label>
      <input
        type="text"
        value={para40}
        name="para40"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara40(e.target.value)}
       
      />
    </div>

    <div>
      
      <label>para41</label>
      <input
        type="text"
        value={para41}
        name="para41"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara41(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para42</label>
      <input
        type="text"
        value={para42}
        name="para42"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara42(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para43</label>
      <input
        type="text"
        value={para43}
        name="para43"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara43(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para44</label>
      <input
        type="text"
        value={para44}
        name="para44"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara44(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para45</label>
      <input
        type="text"
        value={para45}
        name="para45"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara45(e.target.value)}
       
      />
    </div>
    
    
    <div>
      
      <label>para46</label>
      <input
        type="text"
        value={para46}
        name="para46"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara46(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para47</label>
      <input
        type="text"
        value={para47}
        name="para47"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara47(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para48</label>
      <input
        type="text"
        value={para48}
        name="para48"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara48(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para49</label>
      <input
        type="text"
        value={para49}
        name="para49"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara49(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para50</label>
      <input
        type="text"
        value={para50}
        name="para50"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara50(e.target.value)}
       
      />
    </div>

    <div>
      
      <label>para51</label>
      <input
        type="text"
        value={para51}
        name="para51"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara51(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para52</label>
      <input
        type="text"
        value={para52}
        name="para52"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara52(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para53</label>
      <input
        type="text"
        value={para53}
        name="para53"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara53(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para54</label>
      <input
        type="text"
        value={para54}
        name="para54"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara54(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para55</label>
      <input
        type="text"
        value={para55}
        name="para55"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara55(e.target.value)}
       
      />
    </div>
    
    
    <div>
      
      <label>para56</label>
      <input
        type="text"
        value={para56}
        name="para56"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara56(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para57</label>
      <input
        type="text"
        value={para57}
        name="para57"
        className="p-2 ml-2 rounded" 
        onChange={(e)=>setpara57(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para58</label>
      <input
        type="text"
        value={para58}
        name="para58"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara58(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para59</label>
      <input
        type="text"
        value={para59}
        name="para59"
        className="p-2 ml-2 rounded" 
        onChange={(e)=>setpara59(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para60</label>
      <input
        type="text"
        value={para60}
        name="para60"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara60(e.target.value)}
       
      />
    </div>

    <div>
      
      <label>para61</label>
      <input
        type="text"
        value={para61}
        name="para61"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara61(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para62</label>
      <input
        type="text"
        value={para62}
        name="para62"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara62(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para63</label>
      <input
        type="text"
        value={para63}
        name="para63"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara63(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para64</label>
      <input
        type="text"
        value={para64}
        name="para64"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara64(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para65</label>
      <input
        type="text"
        value={para65}
        name="para65"
        className="p-2 ml-2 rounded" 
        onChange={(e)=>setpara65(e.target.value)}
       
      />
    </div>
    
    
    <div>
      
      <label>para66</label>
      <input
        type="text"
        value={para66}
        name="para66"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara66(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para67</label>
      <input
        type="text"
        value={para67}
        name="para67"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara67(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para68</label>
      <input
        type="text"
        value={para68}
        name="para68"
        
        onChange={(e)=>setpara68(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para69</label>
      <input
        type="text"
        value={para69}
        name="para69"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara69(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para70</label>
      <input
        type="text"
        value={para70}
        name="para70"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara70(e.target.value)}
       
      />
    </div>


    <div>
      
      <label>para71</label>
      <input
        type="text"
        value={para71}
        name="para71"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara71(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para72</label>
      <input
        type="text"
        value={para72}
        name="para72"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara72(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para73</label>
      <input
        type="text"
        value={para73}
        name="para73"
        
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara73(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para74</label>
      <input
        type="text"
        value={para74}
        name="para74"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara74(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para75</label>
      <input
        type="text"
        value={para75}
        name="para75"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara75(e.target.value)}
       
      />
    </div>
    
    
    <div>
      
      <label>para76</label>
      <input
        type="text"
        value={para76}
        name="para76"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara76(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para77</label>
      <input
        type="text"
        value={para77}
        name="para77"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara77(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para78</label>
      <input
        type="text"
        value={para78}
        name="para78"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara78(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para79</label>
      <input
        type="text"
        value={para79}
        name="para79"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara79(e.target.value)}
       
      />
    </div>
    <div>
      
      <label>para80</label>
      <input
        type="text"
        value={para80}
        name="para80"
        className="p-2 ml-2 rounded"
        onChange={(e)=>setpara80(e.target.value)}
       
      />
    </div>
     <button className="p-2 ml-2 rounded bg-blue-500 w-40 text-white font-bold hover:text-gray-900"  type="submit">Submit</button>
    </form>
  );
}
