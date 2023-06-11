import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero bg-[url("https://i.ibb.co/QkpgvVb/image-2.png")] max-[700px]:h-[800px] h-[700px] '>

            <div className='w-full h-full bg-gradient-to-b from-gray-300   space-y-5  text-center '>
                <h1 className='text-7xl md:pt-20  text-bold tracking-wider   '>Music Planet</h1>

                <h1 className='text-4xl  text-red-600  text-bold tracking-wider  '>Learn Music with Professionals</h1>
                <p className='md:w-8/12 max-[600px]:px-4  font-bold mx-auto'>
                    Music Planet is a vibrant and dynamic music school dedicated to nurturing and empowering musicians of all ages and skill levels. Located at the heart of the city, Music Planet offers a diverse range of music programs and classes to inspire a lifelong love for music.
                    <br />
                    <br />
                    At Music Planet, we believe in fostering creativity and fostering a deep understanding of music. Our team of experienced and passionate instructors are experts in their respective fields, providing comprehensive training in a wide array of instruments, including piano, guitar, drums, violin, and more. Whether you're a beginner taking your first steps in music or an advanced musician seeking to refine your skills, we have the perfect program for you.
                </p>
            </div>
        </div>
    );
};

export default Hero;