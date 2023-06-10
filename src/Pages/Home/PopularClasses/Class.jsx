import React, { useEffect } from 'react';
import { useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const Class = ({ clas }) => {






    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const { availableSeats, className, feedback, image, instructorEmail, instructorName, price } = clas;



    const handleSelectClass = (id) => {

        if (!user) {
            Swal.fire({
                title: 'You have to login First!!!',
                icon: 'error',
                position: 'center',
                showConfirmButton: false,
                timer: 1500
            })
            return navigate('/login');;
        }


        const selectedClass = {
            classId: id, availableSeats, className, feedback, image, instructorEmail, instructorName, price, studentEmail: user?.email
        }


        fetch(`https://music-planet-server.vercel.app/bookClass`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('access-token')}`

            },
            body: JSON.stringify(selectedClass)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: `${clas?.className} Selected Successful`,
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })

                }
            })

    }





    return (
        <div className="card shadow-2xl bg-black group relative  card-compact rounded   bg-base-100">

            <figure><img className='h-80 border-red-600 w-full' src={clas?.image} /></figure>


            {/* Showing class info on hover on the class images and user can select classes by clicking on the select button also. without login people cant select or buy classes */}

            <div className='bg-gray-300 h-80 top-0 absolute opacity-80  invisible  group-hover:visible  w-full'>
                <div className={`card-body h-80  ${parseInt(clas?.availableSeats) === 0 ? 'bg-red-600' : 'bg-black'} text-white`}>
                    <h2 className="text-4xl text-bold mt-3 text-center">{clas?.className}</h2>
                    <p className='text-lg text-center text-semibold'>Enrolled Students: {clas?.students}</p>
                    <p className='text-lmd text-center text-semibold'>Instructor: {clas?.instructorName}</p>
                    <p className='text-lmd text-center text-semibold'>Available Seat: {clas?.availableSeats}</p>
                    <p className='text-lmd text-center text-semibold'>Price: ${clas?.price}</p>

                    <div className=" w-full mt-6 justify-center">
                        <button onClick={() => handleSelectClass(clas._id)} disabled={parseInt(clas?.availableSeats) === 0} className="btn w-full text-white border-none bg-red-600 btn-outline">Select</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Class;