import React from 'react';
import { NavLink, Link } from "react-router-dom";

const Nabvar = () => {


    const user = false;


    return (
        <div className="navbar py-6   md:px-5  header rounded">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "bg-red-600 text-white" : ""} ><span className=' font-bold '>HOME</span></NavLink></li>
                        
                        <li>
                            <NavLink to="/instructors" className={({ isActive }) => isActive ? "bg-red-600 text-white" : ""} ><span className=' font-bold '>INSTRUCTORS</span></NavLink>
                        </li>

                        <li> <NavLink to="/classes" className={({ isActive }) => isActive ? "bg-red-600 text-white" : ""} ><span className=' font-bold '>CLASSES</span></NavLink>
                        </li>
                        {
                            user ? <li> <NavLink to="/dashboard" className={({ isActive }) => isActive ? "bg-red-600 text-white" : ""} ><span className=' font-bold '>DASHBOARD</span></NavLink>
                            </li>
                                : ""
                        }
                    </ul>
                </div>

                <Link><img className='h-10 bg-black' src="https://i.ibb.co/2ST6VWF/planet-music-portfolio-4x-removebg-preview.png" alt="" /></Link>

                <NavLink to="/" ><h1 className=' text-3xl font-extrabold tracking-wider'>Music<span className='text-red-600'>Planet</span></h1></NavLink>
            </div>


            {/* dasktop nabver item */}

            <div className="navbar-end">

                <ul className="menu gap-4 max-[600px]:hidden menu-horizontal px-1">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "bg-red-600 text-white" : ""} ><span className=' font-bold text-md '>HOME</span></NavLink></li>

                    <li>
                        <NavLink to="/instructors" className={({ isActive }) => isActive ? "bg-red-600 text-white" : ""} ><span className=' font-bold text-md'>INSTRUCTORS</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/classes" className={({ isActive }) => isActive ? "bg-red-600 text-white" : ""} ><span className=' font-bold text-md'>CLASSES</span></NavLink>
                    </li>

                    {
                        user ? <li> <NavLink to="/dashboard" className={({ isActive }) => isActive ? "bg-red-600 text-white" : ""} ><span className='text-md font-bold '>DASHBOARD</span></NavLink>
                        </li>
                            : ""
                    }
                </ul>

                {
                    user ? <> <img title='name' className='w-10 h-10 rounded-md'
                        src="https://i.ibb.co/r0T1tyW/photo-1602233158242-3ba0ac4d2167-ixlib-rb-4-0.jpg" alt="" />

                        <button className='btn text-md font-bold '>Logout</button>
                    </>
                        : <Link to='login' className="btn text-md font-bold">Login</Link>
                }
            </div>
        </div>
    );
};

export default Nabvar;