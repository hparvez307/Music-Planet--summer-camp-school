import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Feedback = () => {

    const { id } = useParams();
    console.log(id)

    const navigate = useNavigate();



    // send feedback to instructor and store in the database
    const handleSubmit = (event) => {

        event.preventDefault();
        const form = event.target;
        let feedback = form.feedback.value;

        fetch(`https://music-planet-server.vercel.app/feedback/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('access-token')}`

            },
            body: JSON.stringify({ feedback })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/dashboard/manageClasses')
            })
    }


    return (
        <div>
            <h1 className=' w-full text-center  text-4xl font-bold text-red-600 tracking-wider bg-black p-5 ml-5 my-8 '>Feedback</h1>


            <form onSubmit={handleSubmit} className='pt-3 w-11/12 mx-auto'>
                <label className="label">
                    <span className="label-text text-4xl text-bold">Write your feedback</span>
                </label>
                <textarea name='feedback' className="textarea textarea-bordered textarea-lg w-full h-44" placeholder="feedback"></textarea>

                <div className='flex gap-6 justify-end'>
                    <button className='btn w-2/12 text-white mt-5 btn-outline border-none bg-red-600'><Link to='/dashboard/manageClasses'>back to dashboard</Link></button>

                    <input className='btn w-4/12 mt-5 text-white mr-5 btn-outline border-none bg-orange-500' type="submit" value="send feedback" />
                </div>
            </form>
        </div>
    );
};

export default Feedback;