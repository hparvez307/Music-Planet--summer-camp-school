import React from 'react';
import Hero from '../Hero/Hero';
import PopularClasses from '../PopularClasses/PopularClasses';
import OurGallery from '../../OurGallery/OurGallery';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <PopularClasses></PopularClasses>
            <OurGallery></OurGallery>
        </div>
    );
};

export default Home;