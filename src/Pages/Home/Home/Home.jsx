import React from 'react';
import Hero from '../Hero/Hero';
import PopularClasses from '../PopularClasses/PopularClasses';
import OurGallery from '../OurGallery/OurGallery';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import States from '../States/States';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <OurGallery></OurGallery>
            <Featured></Featured>
            <States></States>
        </div>
    );
};

export default Home;