import React from 'react';

const InstructorsCards = ({ins}) => {
  console.log(ins)
    return (
        <div className="card rounded-none  glass group">
        <figure><img className='rounded-none h-72 w-full group-hover:scale-150 duration-700' src={ins?.image}/></figure>
        <div className="card-body bg-black text-white">
          <h2 className="card-title">{ins?.name}</h2>
          <p>{ins?.email}</p>
          <p>Total Students: {ins?.students}</p>
          <p>Total Classes: {ins?.classes}</p>
          
          <div className=" w-full mt-6 justify-center">
            <button className="btn w-full text-white border-none bg-red-600 btn-outline">See Classes</button>
          </div>
        </div>
      </div>
    );
};

export default InstructorsCards;