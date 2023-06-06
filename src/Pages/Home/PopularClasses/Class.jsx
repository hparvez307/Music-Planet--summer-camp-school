import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Class = ({image}) => {

    useEffect(() => {
        AOS.init({
            duration: 3000
        });
    }, []);
    return (
        <div className="card shadow-2xl card-compact border p-6  bg-base-100">

        <figure><img data-aos="zoom-in" className='h-80 rounded w-full' src={image} /></figure>

    </div>
    );
};

export default Class;