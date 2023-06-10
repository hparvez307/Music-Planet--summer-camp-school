import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nabvar from '../Pages/Shared/Nabvar/Nabvar';
import Footer from '../Pages/Shared/Footer/Footer';
import './Main.css'
import { Helmet } from 'react-helmet';
import { motion, useScroll, useSpring } from "framer-motion";

const Main = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      const body = document.body;
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }, [isDarkMode]);
  
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });

    return (
        <div className='max-w-[1300px] mx-auto main'>
            <Helmet>
                <title>Music Planet | Home</title>
            </Helmet>
            <motion.div className="progress-bar" style={{ scaleX }} />
            <Nabvar></Nabvar>
            <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;