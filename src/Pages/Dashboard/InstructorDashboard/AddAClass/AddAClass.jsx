import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const AddAClass = () => {


    const {
        register,
        handleSubmit
    } = useForm();


    const { user } = useContext(AuthContext);



    const handleAddClass = (data) => {


        const img_hosting_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Imagebb_Upload_Token}`;

        const formData = new FormData();
        formData.append('image', data.image[0]);

        // hosting image on imgbb
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                const imageUrl = imgData.data.display_url;

                const classData = {
                    ...data,
                    image: imageUrl,
                    students: 0,
                    date: new Date(),
                    status: 'pending'

                }
                console.log(classData)

                // add class and store in database
                fetch('https://music-planet-server.vercel.app/addClasses', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('access-token')}`
                    },
                    body: JSON.stringify(classData)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'Successfully Added Class',
                                icon: 'success',
                                confirmButtonText: 'Ok'
                            })
                        }
                    })
            })
    }



    return (
        <div className=' w-full'>

            <h1 className=' text-center w-full mt-4 text-4xl font-bold text-red-600 tracking-wider p-5 bg-black'>Add Class</h1>



            <form className=' ' onSubmit={handleSubmit(handleAddClass)}>



                <div className='flex gap-4'>

                    <div className="">
                        <label className="input-group w-[400px]  input-group-vertical">
                            <span className='text-red-600 bg-black text-xl  text-bold'>Class Name*</span>

                            <input className="w-[400px] px-4 "
                                {...register('className', { required: true })}
                                type='text'
                                placeholder='Class Name'
                            />  </label>
                    </div>

                    <div className="">
                        <label className="input-group w-[400px] input-group-vertical">
                            <span className='text-red-600 bg-black text-xl  text-bold'>Class Image*</span>
                            <input className=" w-[400px] px-4 pt-2"
                                {...register('image', { required: true })}
                                type='file'
                                placeholder='image'
                            /> </label>
                    </div>

                </div>


                <div className='flex gap-4'>

                    <div className=" w-full">
                        <label className="input-group w-[400px] input-group-vertical">
                            <span className='text-red-600 bg-black  text-bold text-xl'>Instructor Name</span>
                            <input className=" w-[400px] px-3 "
                                {...register('instructorName')}
                                type='text'
                                readOnly
                                defaultValue={user?.displayName}
                            /> </label>
                    </div>


                    <div className=" w-full flex justify-end">
                        <label className="input-group w-[400px] input-group-vertical">
                            <span className='text-red-600 bg-black  text-bold text-xl'>Instructor Email</span>
                            <input className=" w-[400px] px-4 "
                                {...register('instructorEmail')}
                                type='text'
                                readOnly
                                defaultValue={user?.email}
                            /> </label>
                    </div>
                </div>




                <div className='flex gap-4'>

                    <div className="w-full">
                        <label className="input-group w-[400px] input-group-vertical">
                            <span className='text-red-600 bg-black text-xl  text-bold'>Available Seats*</span>
                            <input className=" w-[400px] px-3 "
                                {...register('availableSeats', { required: true })}
                                type='text'
                                placeholder='Available Seats'
                            /> </label>
                    </div>


                    <div className=" w-full flex justify-end">
                        <label className="input-group w-[400px] input-group-vertical">
                            <span className='text-red-600 bg-black text-xl  text-bold'>Price*</span>
                            <input className=" w-[400px] px-3 "
                                {...register('price', { required: true })}
                                type='number'
                                placeholder='Price'
                            /> </label>
                    </div>
                </div>



                <input type="submit" value='Add Class' className='text-3xl ml-3 btn  btn-block text-red-600 mt-10 bg-black' />

            </form>


        </div>
    );
};

export default AddAClass;