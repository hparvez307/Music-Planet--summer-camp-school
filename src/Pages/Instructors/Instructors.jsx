import React from 'react';
import InstructorsCard from './InstructorsCard';

const Instructors = () => {

    const instructors = [
        "  https://i.ibb.co/TM4795C/premium-photo-1664301857931-0db8043f94e6-ixlib-rb-4-0.jpg",
        "  https://i.ibb.co/TM4795C/premium-photo-1664301857931-0db8043f94e6-ixlib-rb-4-0.jpg",
        "  https://i.ibb.co/TM4795C/premium-photo-1664301857931-0db8043f94e6-ixlib-rb-4-0.jpg",
        "  https://i.ibb.co/TM4795C/premium-photo-1664301857931-0db8043f94e6-ixlib-rb-4-0.jpg",
        "  https://i.ibb.co/TM4795C/premium-photo-1664301857931-0db8043f94e6-ixlib-rb-4-0.jpg",
        "  https://i.ibb.co/TM4795C/premium-photo-1664301857931-0db8043f94e6-ixlib-rb-4-0.jpg"
    ]


    return (
        <div>
            <h1 className=' text-center text-4xl mt-20 font-bold text-red-500 bg-black py-5 mb-10 '>Instructors of Music Planet</h1>

            <div className='grid grid-cols-1 w-11/12 mx-auto justify-between gap-8 md:grid-cols-3'>
                {
                    instructors.map((ins, index) => <InstructorsCard key={index + 1} ins={ins}></InstructorsCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;