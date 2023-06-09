import React from 'react';
import { Outlet } from 'react-router-dom';
import Nabvar from '../Pages/Shared/Nabvar/Nabvar';
import Footer from '../Pages/Shared/Footer/Footer';
import './Main.css'

const Main = () => {
    return (
        <div className='max-w-[1300px] mx-auto main'>
            <Nabvar></Nabvar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;