import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div>
            <div className='hero  bg-[url("https://i.ibb.co/QkpgvVb/image-2.png")]     h-[90vh]    '>

                <div className='w-full bg-gradient-to-b h-full from-[#f1f1f1]  space-y-5  text-center '>
                    <h1 className='text-7xl md:pt-28  pt-8 text-bold tracking-wider   '>Music Planet</h1>



                    <h1 className='text-4xl  text-red-600 pt-8 text-bold tracking-wider  '>Learn Music with Professionals</h1>
                    <p className='md:w-8/12 font-bold mx-auto'>
                        Music Planet is a prestigious music school that has been nurturing talent and inspiring musicians since its inception. Situated in the heart of a bustling city, Music Planet is a haven for aspiring musicians of all ages and skill levels. With a mission to ignite the passion for music in every individual, this renowned institution has become synonymous with excellence in musical education. At Music Planet, the atmosphere is vibrant and pulsating with creativity.
                        <br />

                         The dedicated faculty consists of highly skilled instructors who are not only accomplished musicians themselves but also passionate about teaching. They offer a wide range of music programs, including instrumental and vocal training, music theory, composition, and ensemble classes. Whether one desires to master the piano, guitar, violin, drums, or explore their vocal abilities, Music Planet provides a comprehensive curriculum tailored to individual aspirations.
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