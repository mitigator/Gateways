import React from 'react';
import '../animation/Card.css';


const Card = () => {
  return (
    <div className="relative w-[300px] mx-auto p-8 bg-[#1c1f2b] text-center rounded-lg border-4 border-transparent">
      <div className="absolute inset-0 rounded-lg border-animation"></div>
      Card
    </div>
  );
};

export default Card;
