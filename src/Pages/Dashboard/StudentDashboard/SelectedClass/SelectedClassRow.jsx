import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SelectedClassRow = ({ clas, refetch }) => {




    // delete class form booked class
    const handleDeleteClass = (id) => {


        fetch(`https://music-planet-server.vercel.app/deleteBookClass/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data?.deletedCount) {

                    Swal.fire({
                        title: 'Success!',
                        text: `Successfully Deleted ${clas?.className} Class`,
                        icon: 'success',
                        position: 'center',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch();
                }
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
            <td>{clas?.price}</td>

            <td>
                <button onClick={() => handleDeleteClass(clas?._id)} className="btn bg-red-600 text-white  btn-outline text">Delete</button>
            </td>
            <td>
                <button className="btn bg-blue-600 text-white  btn-outline text"><Link to={`/classPayment/${clas?._id}`}>Pay</Link></button>
            </td>
        </tr>
    );
};

export default SelectedClassRow;