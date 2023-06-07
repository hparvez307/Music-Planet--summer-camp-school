import React from 'react';

const InstructorsCard = ({ins}) => {
    return (
        <div className="card rounded-none mx-auto w-96 glass group">
        <figure><img className='rounded-none group-hover:scale-150 duration-700' src={ins}/></figure>
        <div className="card-body bg-black text-white">
          <h2 className="card-title">Parvez Hossain</h2>
          <p>hparvez307@gmail.com</p>
          
          <div className=" w-full mt-6 justify-center">
            <button className="btn w-full text-white border-none bg-red-600 btn-outline">See Classes</button>
          </div>
        </div>
      </div>
    );
};

export default InstructorsCard;