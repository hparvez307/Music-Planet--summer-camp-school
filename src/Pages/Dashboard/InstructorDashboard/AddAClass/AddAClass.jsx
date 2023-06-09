import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../Providers/AuthProviders';

const AddAClass = () => {


    const {
        register,
        formState: { errors },
        handleSubmit,

    } = useForm();


    const { user } = useContext(AuthContext);


    const handleAddClass = (data) => {
        // fetch('https://toy-land-server.vercel.app/addAToy', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: 'Success!',
        //                 text: 'Successfully Added Toy Car',
        //                 icon: 'success',
        //                 confirmButtonText: 'Ok'
        //             })
        //         }
        //     })

        console.log(data)
    }



    return (
        <>

            <h1 className=' w-full text-center  text-4xl font-bold text-red-600 tracking-wider bg-black p-5 ml-5 mb-10 '>Add Class</h1>



            <form className='container w-10/12 mx-auto p-10' onSubmit={handleSubmit(handleAddClass)}>


                <div className='md:flex justify-between gap-14'>
                    <div className="my-4 w-full">
                        <label className="input-group input-group-vertical">
                            <span className='text-red-600 bg-black  text-bold'>Class Name</span>
                            <input className="input px-4 input-bordered"
                                {...register('className', { required: true })}
                                type='text'
                                placeholder='Class Name'
                            /> </label>
                    </div>


                    <div className="my-4 w-full">
                        <label className="input-group input-group-vertical">
                            <span className='text-red-600 bg-black  text-bold'>Class Image</span>
                            <input className="input px-4 input-bordered"
                                {...register('image', { required: true })}
                                type='file'
                                placeholder='image'
                            /> </label>
                    </div>
                </div>


                <div className='md:flex justify-between gap-14'>
                    <div className="my-5 w-full">
                        <label className="input-group input-group-vertical">
                            <span className='text-red-600 bg-black  text-bold'>Instructor Name</span>
                            <input className="input px-3 input-bordered"
                                {...register('instructorName')}
                                type='text'
                                readOnly
                                defaultValue={user?.displayName}
                            /> </label>
                    </div>


                    <div className="my-5 w-full">
                        <label className="input-group input-group-vertical">
                            <span className='text-red-600 bg-black  text-bold'>Instructor Email</span>
                            <input className="input px-4 input-bordered"
                                {...register('instructorEmail')}
                                type='text'
                                readOnly
                                defaultValue={user?.email}
                            /> </label>
                    </div>
                </div>





                <div className='md:flex justify-between gap-14'>
                    <div className="my-6 w-full">
                        <label className="input-group input-group-vertical">
                            <span className='text-red-600 bg-black  text-bold'>Available Seats</span>
                            <input className="input px-3 input-bordered"
                                {...register('availableSeats', { required: true })}
                                type='text'
                                placeholder='Available Seats'
                            /> </label>
                    </div>


                    <div className="my-6 w-full">
                        <label className="input-group input-group-vertical">
                            <span className='text-red-600 bg-black  text-bold'>Price</span>
                            <input className="input px-3 input-bordered"
                                {...register('price', { required: true })}
                                type='number'
                                placeholder='Price'
                            /> </label>
                    </div>
                </div>









                <button className='btn btn-block text-red-600 bg-black'><input type="submit" value='Add Class' className='text-3xl' /></button>

            </form>


        </>
    );
};

export default AddAClass;