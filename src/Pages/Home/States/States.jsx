import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { FaArrowUp, FaChalkboardTeacher, FaStar, FaStarOfLife, FaUserGraduate, FaUserTie, FaUsers } from 'react-icons/fa';

const States = () => {


    const { data: state = [] } = useQuery({
        queryKey: ['checkState'],
        queryFn: async () => {
            const response = await axios.get(`https://music-planet-server.vercel.app/checkState`)

            return response.data;
        }
    })



    return (
        <div className='w-full my-32  px-5'>

            <div className="stats h-70    bg-gray-200  rounded-none shadow w-full">

                <div className="stat  p-6">
                    <div className="badge badge-primary"><FaArrowUp />27%</div>
                    <div className="stat-value flex flex-col items-center  text-primary "><p className='text-[100px]'>< FaUsers /></p>{state?.userLength}</div>
                    <div className="text-xl mt-3  text-center font-extrabold ">Total Users</div>
                </div>

                <div className="stat p-6">
                    <div className="badge text-white bg-black  "><FaStar /></div>
                    <div className="stat-value flex flex-col items-center  text-black "><p className='text-[100px]'>< FaUserTie /></p>{state?.instructorsLength}</div>
                    <div className="text-xl mt-3 text-center font-extrabold ">Total Instructors</div>
                </div>

                <div className="stat p-6">
                    <div className="badge badge-secondary">< FaStarOfLife /></div>
                    <div className="stat-value flex flex-col items-center  text-secondary "><p className='text-[100px]'>< FaChalkboardTeacher /></p>{state?.classesLength}</div>
                    <div className="text-xl mt-3 text-center font-extrabold ">Total Classes</div>
                </div>

                <div className="stat p-6">
                    <div className="badge badge-secondary "><FaArrowUp />20%</div>
                    <div className="stat-value flex flex-col items-center  text-black "><p className='text-[100px]'>< FaUserGraduate /></p>{state?.studentsLength}</div>
                    <div className="text-xl mt-3 text-center font-extrabold ">Total Students</div>
                </div>


            </div>

        </div>
    );
};

export default States;