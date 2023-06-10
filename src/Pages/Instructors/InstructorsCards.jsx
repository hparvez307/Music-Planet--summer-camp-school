import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const InstructorsCards = ({ ins }) => {


  const navigate = useNavigate();

  const handleSeeClass = () => {
    navigate('/classes');
  }

// aos config
  useEffect(() => {
    AOS.init({
      duration: 3000
    });
  }, []);

  return (

    <div data-aos="fade-up" className="card h-[300px] lg:card-side  bg-black p-2  drop-shadow-2xl">
      <figure><img className='h-[300px] ' src={ins?.image} alt="Album" /></figure>
      <div className="card-body  rounded-r-2xl text-white">
        <h2 className="card-title">{ins?.name}</h2>
        <p>{ins?.email}</p>
        <p>Total Students: {ins?.students}</p>
        <p>Total Classes: {ins?.classes}</p>
        <div className="card-actions w-full mt-6 justify-center">
          <button onClick={handleSeeClass} className="btn w-full text-white border-none bg-red-600 btn-outline">See Classes</button>
        </div>
      </div>
    </div>
  );
};

export default InstructorsCards;




