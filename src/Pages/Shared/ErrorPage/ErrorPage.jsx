import React from 'react';
import Lottie from 'lottie-react';
import errorAnime from '../../../assets/errorPage.json'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='max-w-[1300px] mx-auto'>

            <div className='flex justify-center pt-4 md:py-5'>

                <Link to='/'><button className='px-20'>Back to Music Planet</button></Link>

            </div>

            <div >
                <Lottie className='h-[800px] md:mt-5 mx-auto md:w-[1300px]' animationData={errorAnime} loop={true} />
            </div>

        </div>
    );
};

export default ErrorPage;