import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import SelectedClassRow from './SelectedClassRow';

const SelectedClass = () => {


    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access-token')}`

        }
    };

    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['bookClass', config],
        queryFn: async () => {
            const response = await axios.get('https://music-planet-server.vercel.app/bookClass', config)

            return response.data;
        }
    })

    console.log(selectedClasses)


    return (
        <div className='w-11/12'>
            <h1 className=' text-center text-4xl mt-20 font-bold text-red-500 bg-black py-5 mb-10 '>My Selected Classes</h1>



            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        
                        <th className='text-md text-black font-extrabold'>Image</th>
                        <th className='text-md text-black font-extrabold'>Class</th>
                        <th className='text-center text-md text-black font-extrabold'>Instructor</th>
                        <th className='text-center text-md text-black font-extrabold'>Instructor Email</th>
                        <th  className='text-md text-black font-extrabold'>Price</th>
                        <th className='text-end text-md pl-20 text-black font-extrabold'>Action</th>

                    </tr>
                    </thead>
                    <tbody>

                        {
                           selectedClasses.map((clas, index) => <SelectedClassRow key={index + 1} refetch={refetch} clas={clas}></SelectedClassRow>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default SelectedClass;