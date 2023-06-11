import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MyEnrolledClassRow from './MyEnrolledClassRow';

const MyEnrolledClasses = () => {



    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access-token')}`

        }
    };

    const { data: myEnrolledClasses = [] } = useQuery({
        queryKey: ['myEnrolledClasses', config],
        queryFn: async () => {
            const response = await axios.get('https://music-planet-server.vercel.app/myEnrolledClasses', config)

            return response.data;
        }
    })




    return (
        <div className='w-11/12'>
            <h1 className=' text-center text-4xl mt-20 font-bold text-red-500 bg-black py-5 mb-10 '>My Enrolled Classes</h1>



            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th className='text-md font-extrabold'>Image</th>
                            <th className='text-md font-extrabold'>Class</th>
                            <th className=' text-md font-extrabold'>Instructor</th>
                            <th className=' text-md font-extrabold'>Instructor Email</th>
                            <th className='text-md font-extrabold'>Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myEnrolledClasses.map((clas, index) => <MyEnrolledClassRow key={index + 1} clas={clas}></MyEnrolledClassRow>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyEnrolledClasses;