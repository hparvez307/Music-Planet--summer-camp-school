import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaMusic, FaRegEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcStripe, FaCcPaypal } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className=' footer-container mt-20 bg-gradient-to-b from-gray-400  '>

            <div className='flex pb-5 pt-16 px-8 flex-col lg:flex-row max-[600px]:text-center justify-between '>

                <div>

                    <div className='flex  max-[600px]:mr-8 items-center'>
                        <Link><img className='h-14 rounded-xl max-[571px]:pl-20' src="https://i.ibb.co/Mc5nHn2/download-8-1-removebg-preview.png" alt="" /></Link>

                        <Link to="/" ><h1 className='text-4xl  font-extrabold'>Music<span className='text-red-600' >Planet</span></h1></Link>
                    </div>

                    <p className='my-4'>Music Planet is a vibrant and dynamic music school <br />  dedicated to nurturing and empowering musicians <br /> of all ages and skill levels.</p>

                    <p>Find us on social media:</p>
                    <div className='flex max-[600px]:justify-center gap-5 text-4xl mt-2'>
                        <Link className='text-blue-800' to='https://www.facebook.com/parvez600697/'> <FaFacebook></FaFacebook></Link>
                        <Link className='text-blue-500' to='https://twitter.com/parvezh23'> <FaTwitter></FaTwitter></Link>
                        <Link className='text-blue-600' to='https://www.linkedin.com/in/parvez-hossain-a1998020b/'> <FaLinkedin></FaLinkedin></Link>

                    </div>

                </div>

                {/* policies */}
                <div className='max-[571px]:mb-10 max-[571px]:mt-10'>
                    <h1 className='text-2xl my-3  font-bold '>Policies</h1>
                    <div className='space-y-1'>
                        <p>Privacy Policy</p>
                        <p>Terms of Conditions</p>
                        <p>Refund policy</p>
                        <p>Payment policy</p>

                    </div>
                </div>


                {/* contact info */}
                <div >
                    <h1 className='text-2xl my-3 font-bold '>Contact Us</h1>
                    <div className='flex max-[571px]:pl-14  gap-2'>
                        <div className='text-2xl mt-2'>
                            < FaMapMarkerAlt />
                        </div>
                        <p>H#05, RD#05, kaderabad housing, <br /> Mohammadpur, Dhaka-1207, Bangladesh </p>
                    </div>

                    <div className='flex max-[571px]:pl-14 my-4 gap-2'>
                        <div className='text-2xl '>
                            < FaRegEnvelope />
                        </div>
                        <p>hparvez307@gmail.com</p>
                    </div>

                    <div className='flex max-[571px]:pl-14 gap-2'>
                        <div className='text-2xl mt-1'>
                            < FaPhoneAlt />
                        </div>
                        <p>+8801838634389</p>
                    </div>

                    {/* payment card icon */}
                    <div className='text-4xl flex justify-center gap-3 mt-4'>
                        <FaCcPaypal className='text-blue-950'></FaCcPaypal>
                        <FaCcVisa className='text-blue-700'></FaCcVisa>
                        <FaCcMastercard className='text-gray-900'></FaCcMastercard>
                        <FaCcAmex className='text-blue-800'></FaCcAmex>
                        <FaCcStripe className='text-fuchsia-900'></FaCcStripe>
                    </div>


                </div>

            </div>



            <div className='max-[571px]:mb-10 flex flex-col md:flex-row max-[600px]:items-center justify-around my-10 text-bold underline decoration-2 '>


                <p>About Us</p>
                <p>Blog</p>
                <p>Contact Us</p>
                <p>Shipping Method</p>
                <p>Order Tracking</p>


            </div>

            {/* divider */}
            <div className="divider text-7xl"> <FaMusic /> </div>

            <div className='pb-9 text-bold text-center pt-4'>
                <p> &copy; 2023 MusicPlanet.<span className=' text-red-600'> All Rights Reserved</span></p>
            </div>
        </div>
    );
};

export default Footer;