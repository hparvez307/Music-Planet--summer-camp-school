import React from 'react';
import Hero from '../Hero/Hero';
import PopularClasses from '../PopularClasses/PopularClasses';
import OurGallery from '../OurGallery/OurGallery';
import PopularInstructors from '../PopularInstructors/PopularInstructors';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <OurGallery></OurGallery>
        </div>
    );
};

export default Home;