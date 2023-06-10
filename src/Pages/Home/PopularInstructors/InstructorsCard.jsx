import React from 'react';
import { useNavigate } from 'react-router-dom';

const InstructorsCard = ({ ins }) => {


  const navigate = useNavigate();

  const handleIns = () => {

    navigate('/instructors');
  }


  return (
    <div className="card w-full p-2 rounded-none bg-black mx-auto  group">
      <figure><img className='rounded-none h-[300px] w-full group-hover:scale-150 duration-700' src={ins?.image} /></figure>
      <div className="card-body bg-black text-white">
        <h2 className="text-3xl text-bold text-center">{ins?.name}</h2>
        <div className='flex'>
          <p>Total Students: {ins?.students}</p>
          <p>Total Classes: {ins?.classes}</p>
        </div>
        <div className="card-actions w-full justify-center">
          <button onClick={handleIns} className="btn text-white border-none bg-red-600 btn-outline">View Instructors</button>
        </div>
      </div>
    </div>
  );
};

export default InstructorsCard;