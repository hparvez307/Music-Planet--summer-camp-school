import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import { Link, json } from 'react-router-dom';

const ClassesRow = ({ clas, refetch }) => {



  // handle approve class
  const handleApprove = (id) => {

    fetch(`https://music-planet-server.vercel.app/approveClasses/${id}`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('access-token')}`

      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        refetch();
      })

  }



  // handle deny class

  const handleDeny = (id) => {

    fetch(`https://music-planet-server.vercel.app/denyClasses/${id}`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('access-token')}`

      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        refetch();
      })

  }




  return (
    <tr >
      <td><div className="avatar">
        <div className="mask mask-squircle w-12 h-12">
          <img src={clas?.image} />
        </div></div> </td>
      <td>{clas?.className}</td>
      <td>{clas?.instructorName}</td>
      <td>{clas?.instructorEmail}</td>
      <td>{clas?.availableSeats}</td>
      <td>${clas?.price}</td>
      <td>{clas?.status}</td>
      <td>

        <button disabled={clas?.status !== 'pending'} onClick={() => handleApprove(clas?._id)} className="btn bg-green-600 text-white  btn-xs text">Approve</button>
        
        <button disabled={clas?.status !== 'pending'} onClick={() => handleDeny(clas?._id)} className="btn bg-red-800 text-white  btn-xs mx-2 ">Deny</button>


        {/* feedback modal */}
        
          <button disabled={clas?.feedback || clas?.status === 'pending'  || clas?.status === 'approved'} className="btn bg-orange-700 text-white btn-xs" ><Link to={`/feedback/${clas?._id}`}>Feedback</Link></button>
          

      </td>
    </tr>
  );
};

export default ClassesRow;