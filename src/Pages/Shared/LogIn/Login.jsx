import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthProviders';
import { useForm } from "react-hook-form";
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { loginUser, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState('');
    const [check, setCheck] = useState(false);


    const handleGoogleLogIn = () => {
        googleLogin()
            .then(res => {

                const loggedUser = res.user;

                const user = { name: loggedUser.displayName, email: loggedUser.email, image: loggedUser.photoURL , role: 'student' }

                fetch('https://music-planet-server.vercel.app/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        navigate(from, { replace: true })
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
                setError(er.message);
            })
    }






    const handleLogin = data => {


        loginUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: 'Login Successfully',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true })
                reset();
            })
            .catch(er => {
                console.log(er.message)
                setError(er.message);
            })

    }



    return (
        <div>


            <h1 className=' text-center text-4xl mt-20 font-bold text-red-500 bg-black py-5 mb-10 '>Login</h1>


            <div className=" max-w-xl mx-auto shadow-2xl bg-base-100">

                <form onSubmit={handleSubmit(handleLogin)} className="card-body ">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                        {errors.email && <span className="text-red-500">Email is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={check ? 'text' : 'password'} {...register("password", {
                            required: true
                        })} placeholder="password" name='password' className="input input-bordered" />

                        {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}


                        <div className='
                        flex items-center'>
                            <input
                                className='mr-2 mt-4' {...register('check', {})} type='checkbox' onClick={() => { setCheck(!check) }}
                            />
                            <p className='mt-4'>show password</p>

                        </div>
                    </div>
                    <p className='text-red-600'>{error}</p>

                    <div className="form-control mt-7">
                        <input className="btn btn-primary" type="submit" value="Login" />

                    </div>
                </form >
                <p className='text-center pb-6'>New Here? <Link to='/register' className='text-blue-600 '>Create a new account</Link></p>
                <div className='divider'></div>

                <div className='pb-6 text-center'>
                    <button onClick={handleGoogleLogIn} className="btn text-white bg-blue-800 btn-outline btn-circle">
                        <FaGoogle></FaGoogle>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;