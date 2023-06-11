import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import PaymentHistoryRow from './PaymentHistoryRow';

const PaymentHistory = () => {



    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access-token')}`

        }
    };

    const { data: paymentHistories = [] } = useQuery({
        queryKey: ['myPaymentHistory', config],
        queryFn: async () => {
            const response = await axios.get('https://music-planet-server.vercel.app/myPaymentHistory', config)

            return response.data;
        }
    })

    console.log(paymentHistories)


    return (
        <div className='w-11/12'>
            <h1 className=' text-center text-4xl mt-20 font-bold text-red-500 bg-black py-5 mb-10 '>My Payment History</h1>



            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th className='text-md font-extrabold'>Image</th>
                            <th className='text-md font-extrabold'>Class</th>
                            <th className=' text-md font-extrabold'>Instructor</th>
                            <th className='text-md font-extrabold'>Price</th>
                            <th className=' text-md font-extrabold'>Transaction Id</th>
                            <th className=' text-md font-extrabold'>Payment Date</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            paymentHistories.map((clas, index) => <PaymentHistoryRow key={index + 1} clas={clas}></PaymentHistoryRow>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;