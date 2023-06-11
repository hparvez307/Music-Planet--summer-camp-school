import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import MyClassesRow from './MyClassesRow';

const MyClasses = () => {




    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access-token')}`

        }
    };

    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes', config],
        queryFn: async () => {
            const response = await axios.get(`https://music-planet-server.vercel.app/instructorsClasses`, config)

            return response.data;
        }
    })




    return (
        <>
            <h1 className=' w-11/12 text-center  text-4xl font-bold text-red-600 tracking-wider bg-black p-5  mb-10 '>My Classes</h1>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th className='text-md font-extrabold'>Image</th>
                            <th className='text-md font-extrabold'>Class</th>
                            <th className='text-md font-extrabold'>Seats</th>
                            <th className='text-md font-extrabold'>Enrolled Students</th>
                            <th className='text-center text-md font-extrabold'>Status</th>
                            <th className='text-center text-md font-extrabold'>Feedback</th>
                            <th className='text-center text-md font-extrabold'>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            classes.map((clas, index) => <MyClassesRow refetch={refetch} key={index + 1} clas={clas}></MyClassesRow>)
                        }

                    </tbody>


                </table>
            </div>

        </>
    );
};

export default MyClasses;