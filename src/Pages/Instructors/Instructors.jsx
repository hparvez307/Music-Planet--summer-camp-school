import React from 'react';
import InstructorsCard from './InstructorsCards';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import InstructorsCards from './InstructorsCards';
import { Helmet } from 'react-helmet';

const Instructors = () => {




    const { data: instructors = [] } = useQuery({
        queryKey: ['allInstructors'],
        queryFn: async () => {
            const response = await axios.get('https://music-planet-server.vercel.app/allInstructors')

            return response.data;
        }
    })

    console.log(instructors)

    return (
        <div>
            <Helmet>
                <title>Music Planet | Instructors</title>
            </Helmet>
            <h1 className=' text-center text-4xl mt-10 font-bold text-red-500 bg-black py-5 mb-10 '>Instructors of Music Planet</h1>

            <div className='grid grid-cols-1  mx-auto justify-between gap-6 md:grid-cols-2'>
                {
                    instructors.map((ins, index) => <InstructorsCards key={index + 1} ins={ins}></InstructorsCards>)
                }
            </div>
        </div>
    );
};

export default Instructors;