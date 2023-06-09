import React from 'react';
import { Link } from 'react-router-dom';

const MyClassesRow = ({clas}) => {




    return (
        <tr >
      <td><div className="avatar">
        <div className="mask mask-squircle w-12 h-12">
          <img src={clas?.image} />
        </div></div> </td>
      <td>{clas?.className}</td>
      <td>{clas?.availableSeats}</td>
      <td>{clas?.students}</td>
      <td className={`${clas?.status === 'approved' ? 'text-green-600  font-bold': clas?.status === 'denied' ? 'text-red-600  font-bold' : ' font-bold text-gray-700'} `}>{clas?.status}</td>
      <td>{clas?.status === 'approved' || clas?.status === 'pending' ? '' : clas?.feedback}</td>
      
      <td>
        <button className="btn bg-orange-600 text-white  btn-outline text"><Link to={`/updateClass/${clas?._id}`}>Update</Link></button>
      </td>
    </tr>
    );
};

export default MyClassesRow;