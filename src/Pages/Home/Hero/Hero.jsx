import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div>
            <div className='hero  bg-[url("https://i.ibb.co/QkpgvVb/image-2.png")]     h-[90vh]    '>

                <div className='w-full bg-gradient-to-b h-full from-[#f1f1f1]  space-y-5  text-center '>
                    <h1 className='text-7xl md:pt-20  pt-8 text-bold tracking-wider   '>Music Planet</h1>

                   

                    <h1 className='text-4xl  text-red-600 pt-8 text-bold tracking-wider  '>Learn Music with Professionals</h1>
                    <p className='md:w-7/12 font-bold mx-auto'>
                        The concepts of games and toys have a very important role in childrens lives. It contributes to the development of cognitive, motor, psychosocial, emotional, and linguistic skills. It also plays a key role in raising self-confident, creative, and happy children. Therefore, attention should be paid to the concepts of games and toys, which are so important for the child to be a part of society as a healthy individual at every stage of his development.
                        The concepts of games and toys have a very important role in childrens lives. It contributes to the development of cognitive, motor, psychosocial, emotional, and linguistic skills. It also plays a key role in raising self-confident, creative, and happy children. Therefore, attention should be paid to the concepts of games and toys, which are so important for the child to be a part of society as a healthy individual at every stage of his development.
                    </p>
                </div>

                {/* <div className='w-full max-[571px]:pt-8'>
                    <Lottie animationData={car} loop={true} />
                </div> */}

            </div>
        </div>
    );
};

export default Hero;