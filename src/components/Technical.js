import React from 'react';
import '../animation/Technical.css'; // Ensure CSS is properly loaded
import Card from './Card';
import Gradient from './Gradient';

const Technical = () => {
  return (
    <div className='relative overflow-x-hidden w-[100vw]'>
      <Gradient degree={220}/>
      <h2 className='text-center font-bold text-4xl m-5 z-10 text-White'>Technical</h2>
      <div className='flex flex-wrap justify-evenly'>
        <Card name="Capture The Flag"/>
        <Card name="Coding Debugging"/>
        <Card name="Hackathon"/>
      </div>
      <div className='flex flex-wrap justify-evenly'>
        <Card name="IOT"/>
        <Card name="IT QUIZ"/>
        <Card name="UI UX"/>
      </div>
    </div>
  );
};

export default Technical;
