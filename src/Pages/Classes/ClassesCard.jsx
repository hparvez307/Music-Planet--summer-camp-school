import React, { useState } from 'react';

const ClassesCard = ({ clas }) => {



  const [seat, setSeat] = useState(1);


  return (
    <div className="card mx-auto w-96 glass group">
      <figure><img className=' group-hover:scale-150 duration-700' src={clas} /></figure>
      <div className={`card-body ${seat === 0 ? 'bg-red-600' : 'bg-black'} text-white`}>
        <h2 className="card-title">piano</h2>
        <p>Name: </p>
        <p>Instructor: </p>
        <p>Available Seat: </p>
        <p>Price: {seat}</p>

        <div className=" w-full mt-6 justify-center">
          <button onClick={() => setSeat(0)} disabled={seat === 0} className="btn w-full text-white border-none bg-red-600 btn-outline">See Classes</button>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;