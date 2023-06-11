import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateClass = () => {

    const { id } = useParams();
    const navigate = useNavigate();


    const {
        register,
        handleSubmit,
    } = useForm();

    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access-token')}`

        }
    };

    const { data: singleClass = [] } = useQuery({
        queryKey: ['singleClass', config, id],
        queryFn: async () => {
            const response = await axios.get(`https://music-planet-server.vercel.app/singleClass/${id}`, config)
            return response.data;
        }
    })



    const handleUpdateClass = (data) => {

        const { availableSeats, className, image, price } = data;

        const updateData = {
            availableSeats,
            className,
            image,
            price
        }
        console.log(updateData)



        fetch(`https://music-planet-server.vercel.app/updateClass/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('access-token')}`

            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Updated Class',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    navigate('/dashboard/myClasses')
                }
            })
    }

    return (
        <>

            <h1 className=' w-full text-center  text-4xl font-bold text-red-600 tracking-wider bg-black p-5  '>Update Class</h1>

            <form className='container bg-gray-300 w-10/12 mx-auto p-3' onSubmit={handleSubmit(handleUpdateClass)}>

                <div className='md:flex justify-between gap-14'>
                    <div className="my-4 w-full">
                        <label className="input-group input-group-vertical">
                            <span className='text-red-600 bg-black text-xl   text-bold'>Class Name*</span>
                            <input className="px-4"
                                {...register('className', { required: true })}
                                type='text'
                                defaultValue={singleClass?.className}
                                placeholder='Class Name'
                            /> </label>
                    </div>


                    <div className="my-4 w-full">
                        <label className="input-group input-group-vertical">
                            <span className='text-red-600 bg-black text-xl  text-bold'>Class Image Url*</span>
                            <input className="inputpt-2"
                                {...register('image', { required: true })}
                                defaultValue={singleClass?.image}
                                type='url'
                            /> </label>
                    </div>
                </div>


                <div className='md:flex justify-between gap-14'>
                    <div className="my-5 w-full">
                        <label className="input-group input-group-vertical">
                            <span className='text-red-600 bg-black text-xl   text-bold'>Instructor Name</span>
                            <input className="px-3"
                                {...register('instructorName')}
                                type='text'
                                readOnly
                                defaultValue={singleClass?.instructorName}
                            /> </label>
                    </div>


                    <div className="my-5 w-full">
                        <label className="input-group input-group-vertical">
                            <span className='text-red-600 bg-black text-xl   text-bold'>Instructor Email</span>
                            <input className="px-4"
                                {...register('instructorEmail')}
                                type='text'
                                readOnly
                                defaultValue={singleClass?.instructorEmail}
                            /> </label>
                    </div>
                </div>





                <div className='md:flex justify-between gap-14'>
                    <div className="my-6 w-full">
                        <label className="input-group input-group-vertical">
                            <span className='text-red-600 bg-black text-xl   text-bold'>Available Seats*</span>
                            <input className="px-3"
                                {...register('availableSeats', { required: true })}
                                type='text'
                                defaultValue={singleClass?.availableSeats}
                            /> </label>
                    </div>


                    <div className="my-6 w-full">
                        <label className="input-group input-group-vertical">
                            <span className='text-red-600 bg-black text-xl   text-bold'>Price*</span>
                            <input className="px-3"
                                {...register('price', { required: true })}
                                type='number'
                                defaultValue={singleClass?.price}
                            /> </label>
                    </div>
                </div>



                <input type="submit" value='Update Class' className='text-3xl h-14 btn btn-block text-red-600 bg-black' />


            </form>


        </>
    );
};

export default UpdateClass;