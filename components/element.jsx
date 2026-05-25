import Image from 'next/image';
import React from 'react';

const element = () => {
    return (
<div className='bg-darkBlue min-h-screen px-0 py-12'>
    <div className='w-full bg-fuchsia-50 p-6 flex flex-col md:flex-row items-center pt-5 pb-10 pl-10'>
        <div className='md:w-1/2 text-center md:text-left pt-10 pb-10'>
        <h3 className='text-blue-600 font-semibold text-lg mb-2'>Accelerate your learning journey with focused guidance and practical steps</h3>
        <h2 className='text-gray-800 font-bold text-5xl mb-4'>Learn by Doing with Learning and Practical Growth</h2>
        <p className='text-gray-600'>Learn programming skills step by step, starting from absolute beginner concepts and progressing all the way to advanced mastery. We design project‑based courses that guide you through practical challenges, helping you build confidence, apply your knowledge professionally, and grow into a complete developer ready for real‑world opportunities.</p>
        </div>  

    <div className='md:w-1/2 flex justify-center mt-6 md:mt-0'>
        <Image
            src="/assets/images/two.png"
            alt='Learning by doing'
            width={500}
            height={400}
            className='rounded-lg' 
        /> 
    </div> 
    </div>

    <div className='w-full bg-blue-50 p-6 flex flex-col md:flex-row items-center pt-5 pb-10 pl-10'>
    <div className='md:w-1/2 flex justify-center mb-6 md:mb-0'>
    <Image
            src="/assets/images/one.png"
            alt='Put Your Learning'
            width={500}
            height={400}
            className='rounded-lg' 
        />  
    </div>

    <div className='md:w-1/2 text-center md:text-left'>
        <h3 className='text-green-600 font-semibold text-lg mb-2'>Step-by-step lessons with clear guidance and practical application</h3>
        <h2 className='text-gray-800 font-bold text-5xl mb-4'>Put your learning into practice with real projects<br/>and hands‑on experience</h2>
        <p className='text-gray-600'>Apply your learning with real-world projects, practical exercises, and hands-on challenges that strengthen your skills. Gain the confidence, knowledge, and experience you need to grow professionally and take your career to the next level with lasting success.</p>
        </div>  
    </div> 

</div>
    );
};

export default element;