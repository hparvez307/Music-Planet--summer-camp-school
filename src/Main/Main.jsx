import React from 'react';
import { Outlet } from 'react-router-dom';
import Nabvar from '../Pages/Shared/Nabvar/Nabvar';
import Footer from '../Pages/Shared/Footer/Footer';
import './Main.css'
import { Helmet } from 'react-helmet';

const Main = () => {
    return (
        <div className='max-w-[1300px] mx-auto main'>
            <Helmet>
                <title>Music Planet | Home</title>
            </Helmet>

            <Nabvar></Nabvar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;