import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthProviders';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState('');


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
                        <input type="password" {...register("password", {
                            required: true
                        })} placeholder="password" name='password' className="input input-bordered" />

                        {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}

                    </div>
                    <p className='text-red-600'>{error}</p>

                    <div className="form-control mt-7">
                        <input className="btn btn-primary" type="submit" value="Login" />

                    </div>
                </form >
                <p className='text-center py-6'>New Here? <Link to='/register' className='text-blue-600 '>Create a new account</Link></p>
            </div>
        </div>
    );
};

export default Login;