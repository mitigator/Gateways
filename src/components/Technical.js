import React from 'react';
import '../animation/Technical.css';
import Card from './Card';

const Technical = () => {
  return (
    <div className=' overflow-x-hidden  w-[100vw] h-[100vh]'>
      <h2 className='text-center font-bold text-4xl m-5'>Technical</h2>
    <div className='flex flex-wrap justify-evenly'>
      <Card/>
      <Card/>
      <Card/>
    </div>
    <div className='flex flex-wrap justify-evenly'>
      <Card/>
      <Card/>
      <Card/>
    </div>
    </div>
  );
};

export default Technical;
