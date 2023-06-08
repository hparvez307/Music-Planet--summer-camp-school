import React from 'react';

const UsersRow = ({sl, user, refetch}) => {

    const handleMakeAdmin = () => {
        
    }
    const handleMakeInstructor = () => {

    }



    return (
        <tr >
        <th>{sl}</th>
        <td>{user?.name}</td>
        <td>{user?.email}</td>
        <td>{user?.role}</td>
        <td>{
            
                <button disabled={user.role === 'admin'} onClick={() => handleMakeAdmin()} className="btn bg-green-600 text-white btn-ghost btn-md ">Make Admin</button>
        }</td>
        <td>
            <button disabled={user.role === 'instructor'} onClick={() => handleMakeInstructor()} className="btn bg-orange-700 text-white btn-ghost btn-md ">Make Instructor</button>
        </td>
    </tr>
    );
};

export default UsersRow;