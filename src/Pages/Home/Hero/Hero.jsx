import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className='hero bg-[url("https://i.ibb.co/0fSCt7k/image-1.png")]   px-7  h-[100vh]   pb-24 text-white'>

                <div className='w-full space-y-5 mt-12 text-center '>
                    <h1 className='text-7xl  md:pt-20 pt-8 text-bold tracking-wider mb-5  '>Toys, Cars and Games</h1>
                    <h2 className='text-3xl text-bold  tracking-wide'><span className=''>Sports Car</span> <span className='mx-7'>Truck</span> <span>Police Car</span></h2>
                    <p className=''>
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