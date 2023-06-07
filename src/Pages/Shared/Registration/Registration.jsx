import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProviders";

const Registration = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate();



    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Imagebb_Upload_Token}`;

    const onSubmit = data => {


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
                        updateUserProfile(data.name, data.photoUrl)
                            .then(() => {

                                const user = { name: data.name, email: data.email, image: imageUrl, role: 'student' }

                                fetch('http://localhost:5000/users', {
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
                        console.log(er.message)
                    })

            })
    }




    return (
        <div>
          


                <div className=" max-w-xl mx-auto shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-500">Name is required</span>}
                        </div>


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
                                required: true,
                                minLength: 6,
                                maxLength: 12,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} placeholder="password" name='password' className="input input-bordered" />

                            {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}

                            {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 character</span>}
                            {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less then 12 character</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one number, one special character, one uppercase, and one lower case</span>}

                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="file" {...register("photo", { required: true })} className="input pt-2 input-bordered" />
                            {errors.photoUrl && <span className="text-red-500">Photo is required</span>}
                        </div>

                        <div className="form-control mt-7">
                            <input className="btn btn-primary" type="submit" value="Register" />

                        </div>
                    </form >
                    <p className='text-center py-6'>Already have an account? <Link to='/login' className='text-blue-700 '>Login</Link></p>

                </div>
           


        </div>
    );
};

export default Registration;