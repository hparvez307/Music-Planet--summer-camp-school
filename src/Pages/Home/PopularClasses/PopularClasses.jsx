import React from 'react';
import Class from './Class';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const PopularClasses = () => {

    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const response = await axios.get(`https://music-planet-server.vercel.app/popularClasses`)

            return response.data;
        }
    })

    return (
        <div className='my-24'>

            <h1 className=' text-center text-4xl font-bold text-red-500 bg-black py-5 mb-10'>Popular Classes</h1>

            <div className='grid grid-cols-1 md:grid-cols-3  gap-4'>
                {
                    classes.slice(0,6).map((clas, index) => <Class key={index} clas={clas}></Class>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;