import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main.jsx';
import Home from './Pages/Home/Home/Home.jsx';


const router = createBrowserRouter([

  {
    path: '/',
    element: <Main></Main>,
    children: [
      
      {
        path: '/',
        element: <Home></Home>
      }



    ]
  },
  {
    path: '/*',
    element: <div><h1>You are in the wrong path, 404 not found</h1></div>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}>

   </RouterProvider>
  </React.StrictMode>,
)
