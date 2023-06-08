import React from 'react';

const UsersRow = ({ sl, user, refetch }) => {


    // handle make admin
    const handleMakeAdmin = (id) => {

        fetch(`https://music-planet-server.vercel.app/makeAdmin/${id}`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`

            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })

    }


    // handle make instructor
    const handleMakeInstructor = (id) => {


        fetch(`https://music-planet-server.vercel.app/makeInstructor/${id}`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`

            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })

    }



    return (
        <tr >
            <th>{sl}</th>
            <td>{user?.name}</td>
            <td>{user?.email}</td>
            <td>{user?.role}</td>
            <td>{

                <button disabled={user.role === 'admin'} onClick={() => handleMakeAdmin(user?._id)} className="btn bg-green-600 text-white btn-ghost btn-md ">Make Admin</button>
            }</td>
            <td>
                <button disabled={user.role === 'instructor'} onClick={() => handleMakeInstructor(user?._id)} className="btn bg-orange-700 text-white btn-ghost btn-md ">Make Instructor</button>
            </td>
        </tr>
    );
};

export default UsersRow;