import React from 'react';

const PaymentHistoryRow = ({ clas }) => {
    return (
        <tr >
        <td><div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
                <img src={clas?.classImage} />
            </div></div> </td>
        <td>{clas?.class}</td>
        <td>{clas?.instructorName}</td>
        <td>{clas?.price}</td>
        <td>{clas?.transactionId}</td>
        <td>{clas?.date.slice(0,10)}</td>


    </tr>
    );
};

export default PaymentHistoryRow;