import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './OurGallery.css'
import { EffectCoverflow, Pagination } from "swiper";
import slider1 from '../../assets/slider/slider1.jpg'
import slider2 from '../../assets/slider/slider2.jpg'
import slider3 from '../../assets/slider/slider3.jpg'
import slider4 from '../../assets/slider/slider4.jpg'
import slider5 from '../../assets/slider/slider5.jpg'
import slider6 from '../../assets/slider/slider6.jpg'

const OurGallery = () => {
    return (
        <>

            <div>
                <h1 className=' text-center text-4xl font-bold text-red-500 bg-black py-5 mb-6'>Our Gallery</h1>
            </div>




            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >




                <SwiperSlide>
                    <img className="h-full drop-shadow-2xl" src={slider1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-full drop-shadow-2xl " src={slider2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-full drop-shadow-2xl " src={slider3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-full drop-shadow-2xl " src={slider4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-full drop-shadow-2xl " src={slider5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-full drop-shadow-2xl " src={slider6} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-full drop-shadow-2xl " src={slider1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-full drop-shadow-2xl " src={slider4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-full drop-shadow-2xl " src={slider3} />
                </SwiperSlide>
            </Swiper>


        </>
    );
};

export default OurGallery;