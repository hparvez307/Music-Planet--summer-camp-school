import React, { useContext } from 'react';
import { NavLink, Link } from "react-router-dom";
import './Nabvar.css'
import { AuthContext } from '../../../Providers/AuthProviders';

const Nabvar = () => {


    const { user, logOut } = useContext(AuthContext);


    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(er => {
                console.log(er.message)
            })
    }


    return (
        <div className="navbar py-6   md:px-5  header rounded">
            <div className="navbar-start ml-4">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "border-2 border-red-600" : ""} ><span className=' font-bold '>HOME</span></NavLink></li>

                        <li>
                            <NavLink to="/instructors" className={({ isActive }) => isActive ? "border-2 border-red-600" : ""} ><span className=' font-bold '>INSTRUCTORS</span></NavLink>
                        </li>

                        <li> <NavLink to="/classes" className={({ isActive }) => isActive ? "border-2 border-red-600" : ""} ><span className=' font-bold '>CLASSES</span></NavLink>
                        </li>
                        {
                            user ? <li> <NavLink to="/dashboard" className={({ isActive }) => isActive ? "border-2 border-red-600" : ""} ><span className=' font-bold '>DASHBOARD</span></NavLink>
                            </li>
                                : ""
                        }
                    </ul>
                </div>

                <Link><img className='h-10 bg-black' src="https://i.ibb.co/2ST6VWF/planet-music-portfolio-4x-removebg-preview.png" alt="" /></Link>

                <NavLink to="/" ><h1 className=' text-3xl font-extrabold tracking-wider'>Music<span className='text-red-600'>Planet</span></h1></NavLink>
            </div>


            {/* dasktop nabver item */}

            <div className="navbar-end mr-4">

                <ul className="gap-5 max-[600px]:hidden menu-horizontal px-1 mr-6">

                    <li><NavLink to="/" className={({ isActive }) => isActive ? "border-2 border-red-600" : ""} ><span className=' font-bold  '>HOME</span></NavLink></li>

                    <li>
                        <NavLink to="/instructors" className={({ isActive }) => isActive ? "border-2 border-red-600" : ""} ><span className=' font-bold '>INSTRUCTORS</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/classes" className={({ isActive }) => isActive ? "border-2 border-red-600" : ""} ><span className=' font-bold '>CLASSES</span></NavLink>
                    </li>

                    {
                        user ? <li> <NavLink to="/dashboard" className={({ isActive }) => isActive ? "border-2 border-red-600" : ""} ><span className=' font-bold '>DASHBOARD</span></NavLink>
                        </li>
                            : ""
                    }
                </ul>

                {
                    user ? <> <img title={user?.displayName} className='w-12 h-14 rounded-full mt-2'
                        src={user?.photoURL} alt="" />

                        <button onClick={handleLogout} className='btn btn-outline bg-blue-500 text-white  font-bold ml-2'>LOGOUT</button>
                    </>
                        : <NavLink to="/login" className={({ isActive }) => isActive ? "border-2 border-red-600" : ""} ><span className=' font-bold px-3 '>LOGIN</span></NavLink>
                }
            </div>
        </div>
    );
};

export default Nabvar;