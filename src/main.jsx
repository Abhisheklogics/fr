import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider ,createBrowserRouter } from 'react-router-dom'
import {Routes} from './components/Routes/Routes'
const router = createBrowserRouter(Routes);
import Form from './Form';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Form/>
  </React.StrictMode>,
)
