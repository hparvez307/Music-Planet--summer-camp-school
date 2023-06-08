import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { FaBook, FaCalendarAlt, FaHome, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProviders';


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

                            <li className=''><NavLink to='/dashboard/adminhome'><FaHome />Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addItem'><FaUtensils />Add an Items</NavLink></li>
                            <li><NavLink to='/dashboard/manageitems'><FaWallet />Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/history'><FaBook />Manage Bookings</NavLink></li>
                            <li><NavLink to='/dashboard/allusers'><FaUsers />All Users</NavLink></li>


                        </> : isInstructor ?

                            <>

                                <li><NavLink to='/dashboard/adminhome'><FaHome />Instructor Home</NavLink></li>
                                <li><NavLink to='/dashboard/addItem'><FaUtensils />Add an Items</NavLink></li>
                                <li><NavLink to='/dashboard/manageitems'><FaWallet />Manage Items</NavLink></li>
                                <li><NavLink to='/dashboard/history'><FaBook />Manage Bookings</NavLink></li>
                                <li><NavLink to='/dashboard/allusers'><FaUsers />All Users</NavLink></li>


                            </>

                            : isStudent ?
                                <>

                                    <li><NavLink to='/dashboard/userhome'><FaHome />Student Home</NavLink></li>
                                    <li><NavLink to='/dashboard/reservation'><FaCalendarAlt />Reservation</NavLink></li>
                                    <li><NavLink to='/dashboard/history'><FaWallet />Payment History</NavLink></li>


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