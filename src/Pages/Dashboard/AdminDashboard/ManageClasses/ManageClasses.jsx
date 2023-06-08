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


    return (
       <>
        <h1 className=' w-full text-center text-4xl font-bold text-white bg-black p-5 ml-5 mb-10 '>Manage Classes</h1>

       
       <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        
                        <th>Image</th>
                        <th>Class</th>
                        <th lassName='text-center'>Instructor</th>
                        <th className='text-center'>Email</th>
                        <th>Seats</th>
                        <th>Price</th>
                        <th className='text-center'>Status</th>
                        <th className='text-center'>Action</th>

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