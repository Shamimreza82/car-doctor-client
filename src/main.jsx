import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto font-inter'>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>,
  </div>
  
)
