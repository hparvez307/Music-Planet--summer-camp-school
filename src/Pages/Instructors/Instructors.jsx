import React from 'react';
import InstructorsCard from './InstructorsCards';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import InstructorsCards from './InstructorsCards';

const Instructors = () => {


   

     const { data: instructors = []} = useQuery({
        queryKey: ['allInstructors'],
        queryFn: async () => {
            const response = await axios.get('https://music-planet-server.vercel.app/allInstructors')

            return response.data;
        }
    })

    console.log(instructors)

    return (
        <div>
            <h1 className=' text-center text-4xl mt-10 font-bold text-red-500 bg-black py-5 mb-10 '>Instructors of Music Planet</h1>

            <div className='grid grid-cols-1 w-11/12 mx-auto justify-between gap-2 md:grid-cols-2'>
                {
                    instructors.map((ins, index) => <InstructorsCards key={index + 1} ins={ins}></InstructorsCards>)
                }
            </div>
        </div>
    );
};

export default Instructors;