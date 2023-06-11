import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Featured = () => {
    return (
        <div className='md:h-[650px] overflow-hidden mt-28 bg-black'>


            <div className='flex bg-[url("https://i.ibb.co/WxPyhtG/image-3.png")]'>




                <div className='w-5/12 max-[600px]:w-full ml-10'>

                    <h1 className='text-gray-100 mt-10 text-center uppercase text-[40px] font-extrabold'>learn  the latest music technologies</h1>

                    <p className=' my-5 text-center text-gray-200'>Music Planet is a vibrant and dynamic music school
                        dedicated to nurturing and empowering musicians
                        of all ages and skill levels. Learn all the latest music technologies with music planet.</p>

                    <Link to='/classes' className='flex mb-5 justify-center'><button className='btn w-48  bg-red-600 text-white'>latest classes<FaArrowRight /></button></Link>
                </div>


                {/* photo section */}
                <div className='w-7/12 max-[600px]:hidden opacity-90 relative'>

                    <img className='w-[430px] h-[300px] ml-auto z-10 mt-16' src="https://i.ibb.co/fnjKNNM/photo-1466428996289-fb355538da1b-ixlib-rb-4-0.jpg" alt="" />
                    <img className='w-[530px] h-[370px] -mt-20 absolute z-20 right-0' src="https://i.ibb.co/T8JBB8c/photo-1579965852521-492eea74ef02-ixlib-rb-4-0.jpg" alt="" />
                    <img className='h-[400px] pr-10 w-[250px] z-30' src="https://i.ibb.co/9NmpF4J/photo-1484876065684-b683cf17d276-ixlib-rb-4-0.jpg" alt="" />

                </div>


            </div>



        </div>
    );
};

export default Featured;