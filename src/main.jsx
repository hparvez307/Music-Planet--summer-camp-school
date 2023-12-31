import React from 'react'
import ReactDOM from 'react-dom/client'
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
import Feedback from './Pages/Dashboard/AdminDashboard/ManageClasses/Feedback.jsx';
import InstructorHome from './Pages/Dashboard/InstructorDashboard/InstructorHome/InstructorHome.jsx';
import AddAClass from './Pages/Dashboard/InstructorDashboard/AddAClass/AddAClass.jsx';
import MyClasses from './Pages/Dashboard/InstructorDashboard/MyClasses/MyClasses.jsx';
import AdminHome from './Pages/Dashboard/AdminDashboard/AdminHome/AdminHome.jsx';
import UpdateClass from './Pages/Dashboard/InstructorDashboard/MyClasses/UpdateClass.jsx';
import SelectedClass from './Pages/Dashboard/StudentDashboard/SelectedClass/SelectedClass.jsx';
import ClassPayment from './Pages/Dashboard/StudentDashboard/SelectedClass/ClassPayment.jsx';
import MyEnrolledClasses from './Pages/Dashboard/StudentDashboard/MyEnrolledClass/MyEnrolledClasses.jsx';
import PaymentHistory from './Pages/Dashboard/StudentDashboard/PaymentHistory/PaymentHistory.jsx';
import StudentHome from './Pages/Dashboard/StudentDashboard/StudentHome/StudentHome.jsx';
import { HelmetProvider } from 'react-helmet-async';
import ErrorPage from './Pages/Shared/ErrorPage/ErrorPage';


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
            path: 'adminHome',
            element: <AdminHome></AdminHome>
          },
          {
            path: 'manageUsers',
            element: <ManageUsers></ManageUsers>
          },
          {
            path: 'manageClasses',
            element: <ManageClasses></ManageClasses>
          },
          {
            path: 'instructorHome',
            element: <InstructorHome></InstructorHome>
          },
          {
            path: 'addClass',
            element: <AddAClass></AddAClass>
          },
          {
            path: 'myClasses',
            element: <MyClasses></MyClasses>
          },
          {
            path: 'studentHome',
            element: <StudentHome></StudentHome>
          },
          {
            path: 'selectedClasses',
            element: <SelectedClass></SelectedClass>
          },
          {
            path: 'enrolledClasses',
            element: <MyEnrolledClasses></MyEnrolledClasses>
          },
          {
            path: 'paymentHistory',
            element: <PaymentHistory></PaymentHistory>
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
      {
        path: '/feedback/:id',
        element: <Feedback></Feedback>
      },
      {
        path: '/updateClass/:id',
        element: <UpdateClass></UpdateClass>
      },
      {
        path: 'classPayment/:id',
        element: <ClassPayment></ClassPayment>
      }
    ]
  },
  {
    path: '/*',
    element: <ErrorPage></ErrorPage>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}>
          </RouterProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
