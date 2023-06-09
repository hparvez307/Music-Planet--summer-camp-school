import React from 'react';
import ClassesCard from './ClassesCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Classes = () => {




    const { data: classes = []} = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const response = await axios.get(`https://music-planet-server.vercel.app/allClass`)

            return response.data;
        }
    })


    return (
        <div>
            <h1 className=' text-center text-4xl mt-20 font-bold text-red-500 bg-black py-5 mb-10 '>Our Classes</h1>

            <div className='grid grid-cols-1 w-11/12 mx-auto justify-between gap-8 md:grid-cols-3'>
                {
                    classes.map((clas, index) => <ClassesCard key={index + 1} clas={clas}></ClassesCard>)
                }
            </div>
        </div>
    );
};

export default Classes;