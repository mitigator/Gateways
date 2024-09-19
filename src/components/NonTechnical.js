import React from 'react';
import '../animation/Technical.css'; // Ensure CSS is properly loaded
import Card from './Card';
import Gradient from './Gradient';

const NonTechnial = () => {
  return (
    <div className='relative overflow-x-hidden w-[100vw]'>
      <Gradient degree={310}/>
      <h2 className='text-center font-bold text-4xl m-5 z-10 text-White'>Non Technical</h2>
      <div className='flex flex-wrap justify-evenly'>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className='flex flex-wrap justify-evenly'>
        <Card/>
        <Card/>
      </div>
    </div>
  );
};

export default NonTechnial;
