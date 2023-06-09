import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../Providers/AuthProviders';

const AddAClass = () => {


    const {
        register,
        formState: { errors },
        handleSubmit,
        
    } = useForm();


    const {user} = useContext(AuthContext);


    const handleAddToy = (data) => {
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



            <form className='container w-10/12 mx-auto p-10' onSubmit={handleSubmit(handleAddToy)}>


<div className='md:flex justify-between gap-10'>
    <div className="my-6 w-full">
        <label className="input-group input-group-vertical">
            <span>Toy Photo Url</span>
            <input className="input px-3 input-bordered"
                {...register('photo', { required: true })}
                type='url'
                placeholder='Photo Url'
            /> </label>
    </div>


    <div className="my-6 w-full">
        <label className="input-group input-group-vertical">
            <span>Toy Name</span>
            <input className="input px-3 input-bordered"
                {...register('name', { required: true })}
                type='text'
                placeholder='Toy Name'
            /> </label>
    </div>
</div>


<div className='md:flex justify-between gap-10'>
    <div className="my-6 w-full">
        <label className="input-group input-group-vertical">
            <span>Seller Name</span>
            <input className="input px-3 input-bordered"
                {...register('sellerName')}
                type='text'
                defaultValue={user?.displayName}
            /> </label>
    </div>


    <div className="my-6 w-full">
        <label className="input-group input-group-vertical">
            <span>Seller Email</span>
            <input className="input px-3 input-bordered"
                {...register('sellerEmail')}
                type='text'
                defaultValue={user?.email}
            /> </label>
    </div>
</div>





<div className='md:flex justify-between gap-10'>
    <div className="my-6 w-full">
        <label className="input-group input-group-vertical">
            <span>Sub Category</span>
            <input className="input px-3 input-bordered"
                {...register('subCategory', { required: true })}
                type='text'
                placeholder='Sub Category'
            /> </label>
    </div>


    <div className="my-6 w-full">
        <label className="input-group input-group-vertical">
            <span>Price</span>
            <input className="input px-3 input-bordered"
                {...register('price', { required: true })}
                type='number'
                max={1000}
                placeholder='Price'
            /> </label>
    </div>
</div>


<div className='md:flex justify-between gap-10'>
    <div className="my-6 w-full">
        <label className="input-group input-group-vertical">
            <span>Rating</span>
            <input className="input px-3 input-bordered"
                {...register('rating', { required: true })}
                type='text'
                placeholder='Rating'
            /> </label>
    </div>


    <div className="my-6 w-full">
        <label className="input-group input-group-vertical">
            <span>Available Quantity</span>
            <input className="input px-3 input-bordered"
                {...register('quantity', { required: true })}
                type='number'
                placeholder='Available Quantity'
            /> </label>
    </div>
</div>



<div className="my-6 w-full">
    <label className="input-group input-group-vertical">
        <span>Detail Description</span>
        <input className="input px-3 input-bordered"
            {...register('description', { required: true })}
            type='text'
            placeholder='Detail Description'
        /> </label>
</div>



<button className='btn btn-block'><input type="submit" value='Add Toy' className='text-3xl' /></button>

</form>


        </>
    );
};

export default AddAClass;