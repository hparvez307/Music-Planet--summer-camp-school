import { Outlet } from 'react-router-dom';
import Nabvar from '../Pages/Shared/Nabvar/Nabvar';
import Footer from '../Pages/Shared/Footer/Footer';
import './Main.css'
import { Helmet } from 'react-helmet';
import { motion, useScroll, useSpring } from "framer-motion";

const Main = () => {



  

 
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
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;