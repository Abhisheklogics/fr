
import { Route, createRoutesFromElements } from 'react-router-dom';
import React,{Suspense, lazy} from 'react';
  
import { getAllData } from './dataFecht.js';
import Form from '../../Form.jsx';
const App=lazy(()=>import('../../App.jsx'))
const Home = lazy(() => import('../Home/Home.jsx'));
const Resall = lazy(() => import('../Res/Resall.jsx'));
const Res5images = lazy(() => import('../Res/Res5images.jsx'));
const ResNotSp = lazy(() => import('../Res/ResNotsp.jsx'));
const ResAllExperiment = lazy(() => import('../Res/AllRes.jsx'));
const AllExperiment = lazy(() => import('../Arduino/AllExperiment.jsx'));
const Arduino = lazy(() => import('../Arduino/Arduino.jsx'));
const Arduino6 = lazy(() => import('../Arduino/Aduino6.jsx'));
const ArduinoOne5 = lazy(() => import('../Arduino/ArduinoOne5.jsx'));
const ArduinoTwo5 =lazy(()=>import('../Arduino/ArduinoTwo.jsx'))
const ArduinoThree5 =lazy(()=>import('../Arduino/ArduinoThree.jsx'))
const ArduinoAlag = lazy(() => import('../Arduino/Arduinoalag.jsx'));
const Esp = lazy(() => import('../esp/Esp.jsx'));
const EspExperiments = lazy(() => import('../esp/AllEspexperiments.jsx'));

  const Contact = lazy(()=>import('../Contact/Contact.jsx'));




const Search =lazy(()=>import('../Search/Search.jsx')) 

export const Routes = createRoutesFromElements(
  <Route path='/' element={<Suspense><App /></Suspense>}   >
    <Route path='' element={<Suspense ><Home /></Suspense>} loader={()=>getAllData('/arduino/')} />

    <Route path='arduino' element={<Suspense fallback={<div className=''>  </div>}><Arduino /></Suspense>}>
      <Route path='' element={<Suspense fallback={<div className='xl:mt-10 xl:text-4xl'>Please Wait...</div>}><AllExperiment  /></Suspense>} loader={()=>getAllData('/arduino/getDataArduino', { exId: 1 })} />
    <Route path='ex1' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment ex={1}   /></Suspense>} loader={() => getAllData('/arduino/getDataArduino', { exId: 1 })} />

      <Route path='ex2' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment /></Suspense>} loader={() =>  getAllData('/arduino/getDataArduino', { exId: 2 })} />
      <Route path='ex3' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment  /></Suspense>} loader={() =>  getAllData('/arduino/getDataArduino', { exId: 3 })} />
      <Route path='ex4' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment  /></Suspense>} loader={() => getAllData('/arduino/getDataArduino', { exId: 4 })} />
      <Route path='ex5' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment  /></Suspense>} loader={() => getAllData('/arduino/getDataArduino', { exId: 5})} />
      <Route path='ex6' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment /></Suspense>} loader={() => getAllData('/arduino/getDataArduino', { exId: 6 })} />
      <Route path='ex7' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment  /></Suspense>} loader={() => getAllData('/arduino/getDataArduino', { exId: 7 })} />
      <Route path='ex8' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment  /></Suspense>} loader={() => getAllData('/arduino/getDataArduino', { exId: 8 })} />
      <Route path='ex9' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment   /></Suspense>} loader={() => getAllData('/arduino/getDataArduino', { exId: 9 })} />
      <Route path='ex10' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment  /></Suspense>} loader={() => getAllData('/arduino/getDataArduino', { exId: 10 })} />
      <Route path='ex11' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment /></Suspense>} loader={() => getAllData('/arduino/getDataArduino', { exId: 11 })} />
      <Route path='ex12' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment  /></Suspense>} loader={() => getAllData('/arduino/getDataArduino', { exId: 12})} />
      <Route path='ex13' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment /></Suspense>} loader={() => getAllData('/arduino/getDataArduino', { exId: 13 })} />
      <Route path='ex14' element={<Suspense fallback={<div>Loading...</div>}><ArduinoOne5  /></Suspense>} loader={() => getAllData('/arduino/getDataArduino', { exId: 14 })} />
      <Route path='ex15' element={<Suspense fallback={<div>Loading...</div>}><ArduinoTwo5  /></Suspense>} loader={() => getAllData('/arduino/getDataArduino', { exId: 15 })} />
      <Route path='ex16' element={<Suspense fallback={<div>Loading...</div>}><ArduinoThree5  /></Suspense>} loader={() => getAllData('/arduino/getDataArduino', { exId: 16 })} />
      <Route path='ex17' element={<Suspense fallback={<div>Loading...</div>}><ArduinoOne5 /></Suspense>} loader={() => getAllData('/arduino/getDataArduino', { exId: 17 })} />
      <Route path='ex18' element={<Suspense fallback={<div>Loading...</div>}><ArduinoAlag  /></Suspense>} loader={() => getAllData('/arduino/getDataArduino', { exId: 18 })} />
      <Route path='ex19' element={<Suspense fallback={<div>Loading...</div>}><Arduino6 /></Suspense>} loader={() => getAllData('/arduino/getDataArduino', { exId: 19 })} />
      <Route path='ex20' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment /></Suspense>}  />
    </Route>
    <Route path='raspberry' element={<Suspense fallback={<div>Loading...</div>}><Resall /></Suspense>}>
      <Route path='' element={<Suspense fallback={<div>Loading...</div>}><ResAllExperiment /></Suspense>} loader={() => getAllData('/arduino/getDataRaspberry',{ exId :1})} />
      <Route path='res2' element={<Suspense fallback={<div>Loading...</div>}><ResAllExperiment  /></Suspense>} loader={() => getAllData('/arduino/getDataRaspberry',{ exId :2})} />
      <Route path='res3' element={<Suspense fallback={<div>Loading...</div>}><ResAllExperiment  /></Suspense>} loader={() => getAllData('/arduino/getDataRaspberry',{ exId :3})} />
      <Route path='res4' element={<Suspense fallback={<div>Loading...</div>}><ResAllExperiment  /></Suspense>} loader={() => getAllData('/arduino/getDataRaspberry',{ exId :4})} />
      <Route path='res5' element={<Suspense fallback={<div>Loading...</div>}><ResAllExperiment /></Suspense>} loader={() => getAllData('/arduino/getDataRaspberry',{ exId :5})} />
      <Route path='res6' element={<Suspense fallback={<div>Loading...</div>}><ResAllExperiment /></Suspense>} loader={() => getAllData('/arduino/getDataRaspberry',{ exId :6})} />
      <Route path='res7' element={<Suspense fallback={<div>Loading...</div>}><ResNotSp  /></Suspense>} loader={() => getAllData('/arduino/getDataRaspberry',{ exId :7})} />
      <Route path='res8' element={<Suspense fallback={<div>Loading...</div>}><Res5images /></Suspense>} loader={() => getAllData('/arduino/getDataRaspberry',{ exId :8})} />
    </Route>
    <Route path='esp' element={<Suspense fallback={<div>Loading...</div>}><Esp /></Suspense>}>
      <Route path='' element={<Suspense fallback={<div>Loading...</div>}><EspExperiments made="Aman Raj" /></Suspense>} loader={() => getAllData(  '/arduino/getespData' ,{ exId :2})} />
      <Route path='Esp2' element={<Suspense fallback={<div>Loading...</div>}><EspExperiments made="Aman Raj" /></Suspense>} loader={() => getAllData(  '/arduino/getespData',{ exId :3})} />
      <Route path='Esp3' element={<Suspense fallback={<div>Loading...</div>}><EspExperiments made="Aman Raj" /></Suspense>} loader={() => getAllData(  '/arduino/getespData' ,{ exId :4})} />
      <Route path='Esp4' element={<Suspense fallback={<div>Loading...</div>}><EspExperiments made="Aman Raj" /></Suspense>} loader={() => getAllData(  '/arduino/getespData' ,{ exId :5})} />
      <Route path='Esp5' element={<Suspense fallback={<div>Loading...</div>}><EspExperiments made="Aman Raj" /></Suspense>} loader={() => getAllData(  '/arduino/getespData',{ exId :6})} />
      <Route path='Esp6' element={<Suspense fallback={<div>Loading...</div>}><EspExperiments made="Aman Raj" 
 
/></Suspense>} loader={() => getEspData(6)} />
      <Route path='Esp7' element={<Suspense fallback={<div>Loading...</div>}><EspExperiments made="Aman Raj" /></Suspense>} loader={() => getAllData(  '/arduino/getespData',{ exId :7} )} />
    </Route>
    <Route path='Contact' element={<Contact/>}/>
    <Route path='Search' element={<Search/>}/>
    <Route path='form' element={<Form/>}/>
  </Route>
);
