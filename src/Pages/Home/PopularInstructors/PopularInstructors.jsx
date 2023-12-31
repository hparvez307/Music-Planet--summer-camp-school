import React from 'react';
import InstructorsCard from './InstructorsCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const PopularInstructors = () => {
    

    const { data: instructors = []} = useQuery({
        queryKey: ['homeInstructors'],
        queryFn: async () => {
            const response = await axios.get('https://music-planet-server.vercel.app/homeInstructors')

            return response.data;
        }
    })


    return (
        <div className='my-24'>

            <h1 className=' text-center text-4xl font-bold text-red-500 bg-black py-5 mb-10 '>Popular Instructors of Music Planet</h1>


            <div className='grid grid-cols-1 justify-between gap-6 md:grid-cols-3 '>
                {
                    instructors.slice(0,6).map((ins, index) => <InstructorsCard key={index + 1} ins={ins}></InstructorsCard>)
                }
            </div>


        </div>
    );
};

export default PopularInstructors;