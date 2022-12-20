import React from 'react';

const AboutCard = ({icon, heading, text}) => {
    return (
        <div className='flex flex-col items-center text-center border-[1px] border-gray-500 rounded-[1rem] m-3 p-6 max-w-[500px] hover:bg-gray-900 hover: duration-500'>
            <img className='w-[90px] my-4' src={icon} alt="" />
            <p className='text-2xl font-bold'>{heading}</p>
            <p className=' text-gray-400 mt-8'>{text}</p>
        </div>
    );
};

export default AboutCard;