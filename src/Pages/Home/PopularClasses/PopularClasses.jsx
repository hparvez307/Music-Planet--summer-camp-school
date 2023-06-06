import React from 'react';
import Class from './Class';

const PopularClasses = () => {
    const photos = [
        "  https://i.ibb.co/TM4795C/premium-photo-1664301857931-0db8043f94e6-ixlib-rb-4-0.jpg",
        "  https://i.ibb.co/TM4795C/premium-photo-1664301857931-0db8043f94e6-ixlib-rb-4-0.jpg",
        "  https://i.ibb.co/TM4795C/premium-photo-1664301857931-0db8043f94e6-ixlib-rb-4-0.jpg",
        "  https://i.ibb.co/TM4795C/premium-photo-1664301857931-0db8043f94e6-ixlib-rb-4-0.jpg",
        "  https://i.ibb.co/TM4795C/premium-photo-1664301857931-0db8043f94e6-ixlib-rb-4-0.jpg",
        "  https://i.ibb.co/TM4795C/premium-photo-1664301857931-0db8043f94e6-ixlib-rb-4-0.jpg"
    ]
    return (
        <div className='my-28'>

            <h1 className=' text-center text-4xl font-bold text-red-500 bg-black py-5 mb-6'>Popular Classes</h1>

            <div className='grid grid-cols-3 px-2 gap-4'>
                {
                    photos.map((image, index) => <Class key={index} image={image}></Class>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;