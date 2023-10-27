import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import AuthProvider from './AuthProvider/AuthProvider'
import axios from 'axios'

axios

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto font-inter'>
    <React.StrictMode>
     <AuthProvider>
         <RouterProvider router={router}></RouterProvider>
     </AuthProvider>
    </React.StrictMode>,
  </div>
  
)
