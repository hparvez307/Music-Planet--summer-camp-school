import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProviders";
import { FaGoogle } from 'react-icons/fa';
import { Helmet } from "react-helmet";

const Registration = () => {

    const { createUser, updateUserProfile, googleLogin } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const [firebaseError, setFirebaseError] = useState('')



    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Imagebb_Upload_Token}`;


    const handleGoogleLogIn = () => {

        googleLogin()
            .then(res => {

                const loggedUser = res.user;

                const user = { name: loggedUser.displayName, email: loggedUser.email, role: 'student' }

                fetch('https://music-planet-server.vercel.app/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        navigate('/')
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Login successful',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
            })
            .catch(er => {
                console.log(er.message);
                setFirebaseError(er.message);
            })
    }




    const onSubmit = data => {


        setError('');
        if (data.password !== data.confirmPassword) {
            setError("Password doesn't match");
            return;
        }


        const formData = new FormData();
        formData.append('image', data.photo[0]);
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                const imageUrl = imgData.data.display_url;


                createUser(data.email, data.password)
                    .then(() => {
                        updateUserProfile(data.name, imageUrl)
                            .then(() => {

                                const user = { name: data.name, email: data.email, image: imageUrl, role: 'student' }

                                fetch('https://music-planet-server.vercel.app/users', {
                                    method: "POST",
                                    headers: {
                                        'content-type': 'application/json'
                                    },
                                    body: JSON.stringify(user)
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        console.log(data)
                                        if (data.insertedId) {
                                            Swal.fire({
                                                position: 'center',
                                                icon: 'success',
                                                title: 'Registration successful',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            reset();
                                            navigate('/login');
                                        }
                                    })

                            }).catch((error) => {
                                console.log(error.message)
                            });

                    })
                    .catch(er => {
                        console.log(er.message);
                        setFirebaseError(er.message);
                    })

            })
    }




    return (
        <div>
             <Helmet>
                <title>Music Planet | Registration</title>
            </Helmet>
            <h1 className=' text-center text-4xl mt-20 font-bold text-red-500 bg-black py-5 mb-10 '>Registration</h1>


            <div className=" max-w-xl mx-auto shadow-2xl bg-gray-200 ">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body bg-gray-200 w-11/12">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-bold text-xl">Name<span className='text-red-600'>*</span></span>
                        </label>
                        <input type="text" {...register("name", { required: true })} name='name' placeholder="name"  />
                        {errors.name && <span className="text-red-500">Name is required</span>}
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-bold text-xl">Email<span className='text-red-600'>*</span></span>
                        </label>
                        <input type="email" {...register("email", { required: true })} name='email' placeholder="email"  />
                        {errors.email && <span className="text-red-500">Email is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-bold text-xl">Password<span className='text-red-600'>*</span></span>
                        </label>
                        <input type="password" {...register("password", {
                            required: true,
                            pattern: /(?=.*[!@#$&*])(?=.*[A-Z])(?=.*[0-9])/,
                            minLength: 6
                        })} placeholder="password" name='password' />
                        {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one number, one uppercase, & one special character</span>}
                        {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                        {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 character</span>}


                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-bold text-xl">Confirm Password<span className='text-red-600'>*</span></span>
                        </label>
                        <input type="password" {...register("confirmPassword", {
                            required: true,
                        })} placeholder="confirm password" name='confirmPassword'  />

                        {errors.password?.type === 'required' && <span className="text-red-600">Confirm Password is required</span>}

                    </div>
                    <p className="text-red-600">{error}</p>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-bold text-xl">Photo<span className='text-red-600'>*</span></span>
                        </label>
                        <input type="file" {...register("photo", { required: true })} />
                        {errors.photoUrl && <span className="text-red-500">Photo is required</span>}
                    </div>
                    <p>{firebaseError}</p>

                    <div className="form-control">
                        <input className="btn btn-primary" type="submit" value="Register" />
                    </div>

                </form >


                <div className='-mt-16'>
                    <p className='text-center '>Already have an account? <Link to='/login' className='text-blue-700 '>Login</Link></p>
                    <div className='divider'></div>


                    {/* socail login */}

                    <div className=' text-center pb-6'>
                        <button onClick={handleGoogleLogIn} className="btn text-white bg-blue-600 btn-outline btn-circle">
                            <FaGoogle></FaGoogle>
                        </button>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Registration;