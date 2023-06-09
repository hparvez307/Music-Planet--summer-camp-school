import React from 'react';

const MyEnrolledClassRow = ({ clas }) => {
    return (
        <tr >
            <td><div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                    <img src={clas?.classImage} />
                </div></div> </td>
            <td>{clas?.class}</td>
            <td>{clas?.instructorName}</td>
            <td>{clas?.instructorEmail}</td>
            <td>{clas?.price}</td>


        </tr>
    );
};

export default MyEnrolledClassRow;