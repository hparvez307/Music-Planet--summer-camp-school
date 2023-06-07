import React from 'react';

const InstructorsCard = ({ins}) => {
    return (
        <div className="card rounded-none mx-auto w-96 glass group">
        <figure><img className='rounded-none group-hover:scale-150 duration-700' src={ins}/></figure>
        <div className="card-body bg-black text-white">
          <h2 className="card-title">Parvez Hossain</h2>
          <p>Number of students: 100</p>
          <p>Number of Classes: 100</p>
          <div className="card-actions w-full justify-center">
            <button className="btn text-white border-none bg-red-600 btn-outline">View Instructors</button>
          </div>
        </div>
      </div>
    );
};

export default InstructorsCard;