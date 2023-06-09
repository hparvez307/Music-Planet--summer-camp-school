import React, { useContext } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProviders';
import './checkoutForm.css'

const CheckoutForm = ({ price, classForPay }) => {

    const { user } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('')
    const [cardError, setCardError] = useState('')




    // get client secret
    useEffect(() => {
        if (price > 0) {
            fetch('https://music-planet-server.vercel.app/create-payment-intent', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                },
                body: JSON.stringify({ price })
            })
                .then(res => res.json())
                .then(data => {

                    setClientSecret(data.clientSecret);
                })

        }
    }, [price])







    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setCardError(error.message)
        } else {
            setCardError('')
        }


        setProcessing(true);


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous',
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError)
        }

        console.log(paymentIntent)

        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const paymentInfo = {
                classImage: classForPay?.image,
                studentName: user?.displayName,
                classId: classForPay?._id,
                previousClassId: classForPay?.classId,
                email: user?.email,
                class: classForPay?.className,
                instructorName: classForPay?.instructorName,
                instructorEmail: classForPay?.instructorEmail,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
            }

            fetch('https://music-planet-server.vercel.app/classPayments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(paymentInfo)
            })
                .then(res => res.json())
                .then(data => {

                    console.log("payment history save successfully", data)
                })
        }
    }





    return (
        <>
            <form className='w-2/3 m-8' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary ' type="submit" disabled={!stripe || processing || !clientSecret}>
                    Pay
                </button>
            </form>


            {transactionId && <p className='text-green-500'>Transaction complete. Your transactionId: {transactionId}</p>}
            {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}

        </>
    );
};

export default CheckoutForm;