import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { FaBook, FaCalendarAlt, FaClipboard, FaClipboardList, FaHome, FaSchool, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProviders';
import { Helmet } from 'react-helmet';


const Dashboard = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [isAdmin, setIsAdmin] = useState(false);
    const [isInstructor, setIsInstructor] = useState(false);
    const [isStudent, setIsStudent] = useState(false);


    useEffect(() => {
        fetch(`https://music-planet-server.vercel.app/checkUser?email=${user?.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.role === 'admin') {
                    setIsAdmin(true);
                } else if (data.role === 'instructor') {
                    setIsInstructor(true);
                } else if (data.role === 'student') {
                    setIsStudent(true);
                } else {
                    navigate('/')
                }
            })
    }, [localStorage.getItem('access-token')])








    return (
        <div className="drawer lg:drawer-open">
            <Helmet>
                <title>Music Planet | Dashboard</title>
            </Helmet>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu  p-4 w-80 h-full bg-black text-base-content">


                    {
                        isAdmin ? <>

                            <li><NavLink className={({ isActive }) => isActive ? "border-2 border-red-600" : "text-white"} to='/dashboard/adminHome'><span className='text-white flex gap-2'><FaHome />Admin Home</span></NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? "border-2 border-red-600" : "text-white"} to='/dashboard/manageUsers'><span className='text-white flex gap-2'><FaUsers />Manage Users</span></NavLink></li>

                            <li ><NavLink className={({ isActive }) => isActive ? "border-2 border-red-600" : "text-white"} to='/dashboard/manageClasses'><span className='text-white flex gap-2'><FaSchool />Manage Classes</span></NavLink></li>




                        </> : isInstructor ?

                            <>

                                <li className='text-white'><NavLink className={({ isActive }) => isActive ? "border-2 border-red-600" : "text-white"} to='/dashboard/instructorHome'><span className='text-white flex gap-2'><FaHome />Instructor Home</span></NavLink></li>
                                <li className='text-white'><NavLink className={({ isActive }) => isActive ? "border-2 border-red-600" : "text-white"} to='/dashboard/addClass'><span className='text-white flex gap-2'><FaClipboardList />Add Class</span></NavLink></li>
                                <li className='text-white'><NavLink className={({ isActive }) => isActive ? "border-2 border-red-600" : "text-white"} to='/dashboard/myClasses'><span className='text-white flex gap-2'><FaClipboard />My Classes</span></NavLink></li>




                            </>

                            : isStudent ?
                                <>

                                    <li ><NavLink className={({ isActive }) => isActive ? "border-2 border-red-600 " : ""} to='/dashboard/studentHome'><span className='text-white flex gap-2'><FaHome />Student Home</span></NavLink></li>
                                    <li><NavLink className={({ isActive }) => isActive ? "border-2 border-red-600 " : "text-white"} to='/dashboard/selectedClasses'><span className='text-white flex gap-2'><FaCalendarAlt />My Selected Classes</span></NavLink></li>
                                    <li><NavLink className={({ isActive }) => isActive ? "border-2 border-red-600 " : "text-white"} to='/dashboard/enrolledClasses'><span className='text-white flex gap-2'><FaCalendarAlt />My Enrolled Classes</span></NavLink></li>
                                    <li><NavLink className={({ isActive }) => isActive ? "border-2 border-red-600 " : "text-white"} to='/dashboard/paymentHistory'><span className='text-white flex gap-2'><FaWallet />Payment History</span></NavLink></li>


                                </>

                                :

                                <>
                                </>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Dashboard;