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

    console.log(users)


    return (
        <>
            <h1 className=' w-full text-center text-4xl font-bold text-red-600 tracking-wider bg-black p-5 ml-5 mb-10 '>Manage Users</h1>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
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