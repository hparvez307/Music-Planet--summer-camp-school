import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import './Nabvar.css'
import { AuthContext } from '../../../Providers/AuthProviders';
import { FaMoon, FaSun } from 'react-icons/fa';

const Nabvar = () => {


    const { user, logOut } = useContext(AuthContext);



    // toggel dark mode
    const [icon, handleIcon] = useState(false);
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
      );
    
      // update state on toggle
      const handleToggle = (e) => {
        handleIcon(!icon)
        if (e.target.checked) {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      };
    
      // set theme state in localstorage on mount & also update localstorage on state change
      useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        // add custom data-theme attribute to html tag required to update theme using DaisyUI
        document.querySelector("html").setAttribute("data-theme", localTheme);
      }, [theme]);




    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(er => {
                console.log(er.message)
            })
    }





       
  








    return (
        <div className="navbar py-6   md:px-5   header">
            <div className="navbar-start ml-4">
                <div className="dropdown z-10">
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

                <Link><img className='h-10 w-12' src="https://i.ibb.co/b6CHFgV/download-8-1-removebg-preview.png" alt="" /></Link>

                <NavLink to="/" ><h1 className=' text-4xl font-extrabold tracking-wider'>Music<span className='text-red-600'>Planet</span></h1></NavLink>
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

                 {/* Toggle button here */}
                 <div className='flex flex-col justify-start items-center'>
                { icon ? <span className=""><FaMoon/></span>:
            <span className="text-yellow-500"><FaSun/></span>}
            
            <button  className="btn mt-0  -mt-2 btn-square btn-ghost">
       
            <input
            className='w-5 h-5'
              type="checkbox"
              onChange={handleToggle}
              // show toggle image based on localstorage theme
              checked={theme === "light" ? false : true}
            />
 
        </button>
                 </div>
        
            </div>
        </div>
    );
};

export default Nabvar;