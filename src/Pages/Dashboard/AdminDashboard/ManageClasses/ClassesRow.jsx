import React from 'react';

const ClassesRow = ({  clas, refetch }) => {

    const handleMakeAdmin = (id) =>{
        
    }
    const handleMakeInstructor = (id) =>{

    }


    return (
        <tr >
            <td><div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={clas?.image}  />
              </div></div> </td>
            <td>{clas?.className}</td>
            <td>{clas?.instructorName}</td>
            <td>{clas?.instructorEmail}</td>
            <td>{clas?.availableSeats}</td>
            <td>${clas?.price}</td>
            <td>{clas?.status}</td>
            <td>

                <button disabled={clas?.status !== 'pending'}  onClick={() => handleMakeAdmin(user?._id)} className="btn bg-green-600 text-white  btn-xs text">Approve</button>
                <button disabled={clas?.status !== 'pending'}  onClick={() => handleMakeInstructor(user?._id)} className="btn bg-red-800 text-white  btn-xs mx-2 ">Deny</button>
                <button  onClick={() => handleMakeInstructor(user?._id)} className="btn bg-orange-700 text-white btn-xs ">Feedback</button>
              
            </td>
        </tr>
    );
};

export default ClassesRow;