import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CheckoutForm from './CheckoutForm';





const stripePromises = loadStripe(import.meta.env.VITE_PAYMENT_STRIPE_PK);
const ClassPayment = () => {

    const { id } = useParams();


    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access-token')}`

        }
    };

    const { data: selectedClasses = [] } = useQuery({
        queryKey: ['bookClass', config],
        queryFn: async () => {
            const response = await axios.get('https://music-planet-server.vercel.app/bookClass', config)

            return response.data;
        }
    })

    const classForPay = selectedClasses.find(item => item._id === id);
    const price = parseInt(classForPay?.price)


    return (
        <div>
            <h1 className=' text-center text-4xl mt-20 font-bold text-red-500 bg-black py-5 mb-10 '>Payment For Classes</h1>

            <Elements stripe={stripePromises}>
                <CheckoutForm classForPay={classForPay} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default ClassPayment;