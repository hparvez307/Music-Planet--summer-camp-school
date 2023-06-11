import React from 'react';
import './Hero.css'
import Lottie from 'lottie-react';
import hero from '../../../assets/hero.json'

const Hero = () => {
    return (
        <div className='hero  md:pl-16 flex items-center max-[600px]:mt-8 flex-col-reverse md:flex-row  max-[700px]:h-[800px] mt-2 h-[500px] '>


            <div className='md:w-7/12 h-full flex flex-col justify-center    space-y-4 max-[600px]:text-center '>
                <h1 className='text-5xl md:pt-20 uppercase text-bold tracking-widest'>Welcome to Music Planet School</h1>

                <h1 className='text-2xl  text-red-600  text-bold tracking-wider  '>Learn Music with Professionals</h1>
                <p className=' max-[600px]:px-4 text-lg  font-bold mx-auto'>
                    Music Planet is a vibrant and dynamic music school dedicated to nurturing and empowering musicians of all ages and skill levels. Located at the heart of the city, Music Planet offers a diverse range of music programs and classes to inspire a lifelong love for music.
                    At Music Planet, we believe in fostering creativity and fostering a deep understanding of music.
                </p>
            </div>


            <div className='md:w-5/12 md:pt-10'>
                <Lottie className=' ' animationData={hero} loop={true} />
            </div>
        </div>
    );
};

export default Hero;