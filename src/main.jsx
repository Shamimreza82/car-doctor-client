import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import AuthProvider from './AuthProvider/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(

    <div className='max-w-7xl m-auto'>
      <React.StrictMode>
      <QueryClientProvider client={client}>
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
      </QueryClientProvider>
    </React.StrictMode>,
    </div>
  
)
