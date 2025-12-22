import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './routes/Router.jsx'
import { RouterProvider } from 'react-router'
import HomePageLayout from './layout/HomePageLayout.jsx'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    
  </RouterProvider>
)
