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
import Instructors from './Pages/Instructors/Instructors.jsx';
import Classes from './Pages/Classes/Classes.jsx';
import AuthProvider from './Providers/AuthProviders.jsx';
import Registration from './Pages/Shared/Registration/Registration.jsx';
import Login from './Pages/Shared/LogIn/Login.jsx';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import ManageUsers from './Pages/Dashboard/AdminDashboard/ManageUsers/ManageUsers.jsx';
import ManageClasses from './Pages/Dashboard/AdminDashboard/ManageClasses/ManageClasses.jsx';

const queryClient = new QueryClient()

const router = createBrowserRouter([

  {
    path: '/',
    element: <Main></Main>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/instructors',
        element: <Instructors></Instructors>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: 'manageUsers',
            element: <ManageUsers></ManageUsers>
          },
          {
            path: 'manageClasses',
            element: <ManageClasses></ManageClasses>
          }
        ]
      },

      {
        path: '/register',
        element: <Registration></Registration>
      },
      {
        path: '/login',
        element: <Login></Login>
      },




    ]
  },
  {
    path: '/*',
    element: <div><h1>You are in the wrong path, 404 not found</h1></div>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
        </RouterProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
