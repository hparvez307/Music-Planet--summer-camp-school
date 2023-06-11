import React from 'react';
import './Hero.css'
import Lottie from 'lottie-react';
import hero from '../../../assets/hero.json'

const Hero = () => {
    return (
        <div className='hero flex items-center max-[600px]:mt-24 flex-col-reverse md:flex-row  max-[700px]:h-[800px] h-[700px] '>


            <div className='w-full h-full flex flex-col justify-center    space-y-4 max-[600px]:text-center '>
                <h1 className='text-5xl uppercase text-bold tracking-widest'>Welcome to Music Planet School</h1>

                <h1 className='text-2xl  text-red-600  text-bold tracking-wider  '>Learn Music with Professionals</h1>
                <p className=' max-[600px]:px-4 text-lg  font-bold mx-auto'>
                    Music Planet is a vibrant and dynamic music school dedicated to nurturing and empowering musicians of all ages and skill levels. Located at the heart of the city, Music Planet offers a diverse range of music programs and classes to inspire a lifelong love for music.
                    At Music Planet, we believe in fostering creativity and fostering a deep understanding of music.
                </p>
            </div>


            <div className='w-full '>
                <Lottie className=' mx-auto ' animationData={hero} loop={true} />
            </div>
        </div>
    );
};

export default Hero;