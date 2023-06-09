import React from 'react';
import ClassesRow from './ClassesRow';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const ManageClasses = () => {


    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access-token')}`

        }
    };

    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes', config],
        queryFn: async () => {
            const response = await axios.get(`https://music-planet-server.vercel.app/classes`, config)

            return response.data;
        }
    })

    console.log(classes)

    return (
       <>
        <h1 className=' w-full text-center  text-4xl font-bold text-red-600 tracking-wider bg-black p-5 ml-5 mb-10 '>Manage Classes</h1>

       
       <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        
                        <th className='text-md text-black font-extrabold'>Image</th>
                        <th className='text-md text-black font-extrabold'>Class</th>
                        <th className='text-center text-md text-black font-extrabold'>Instructor</th>
                        <th className='text-center text-md text-black font-extrabold'>Email</th>
                        <th  className='text-md text-black font-extrabold'>Seats</th>
                        <th  className='text-md text-black font-extrabold'>Price</th>
                        <th className='text-center text-md text-black font-extrabold'>Status</th>
                        <th className='text-center text-md text-black font-extrabold'>Action</th>

                    </tr>
                </thead>
                <tbody>
                    
                   {
                    classes.map((clas, index) => <ClassesRow refetch={refetch} key={index + 1} clas={clas}></ClassesRow>)
                   }

                </tbody>


            </table>
        </div>
       
       </>
    );
};

export default ManageClasses;