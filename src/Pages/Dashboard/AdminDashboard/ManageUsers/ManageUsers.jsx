import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import UsersRow from './UsersRow';

const ManageUsers = () => {


    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access-token')}`

        }
    };

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await axios.get(`https://music-planet-server.vercel.app/users`, config)
            
            return response.data;
        }
    })



    return (
        <>
            <h1 className=' w-full text-center text-4xl font-bold text-red-600 tracking-wider bg-black p-5  mb-10 '>Manage Users</h1>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-lg font-extrabold'>#</th>
                            <th className='text-lg font-extrabold'>Name</th>
                            <th className='text-lg font-extrabold'>Email</th>
                            <th className='text-lg font-extrabold'>Role</th>
                            <th className='text-lg text-right font-extrabold'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => <UsersRow refetch={refetch} key={index + 1} user={user} sl={index + 1}></UsersRow>)
                        }

                    </tbody>


                </table>
            </div>
        </>
    );
};

export default ManageUsers;