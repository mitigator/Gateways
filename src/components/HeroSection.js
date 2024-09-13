import React, { useState, useEffect } from 'react';
import Image from "../assets/hero-image.png";
import '../animation/HeroSection.css'; 

export const HeroSection = () => {
  const eventDate = new Date('2024-11-17T07:30:00');

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  return (
    <div className="bg-herosection-background text-herosection-text h-screen flex flex-col justify-center items-center space-y-6">
      <div className="flex items-center">
        <h1 className="text-5xl font-bold">Olympus</h1>
        <img src={Image} alt="Event logo" className="mx-4 fade-animation" />
        <h1 className="text-5xl font-bold">404</h1>
      </div>

      <div className="text-3xl font-semibold flex space-x-4 ml-20">
        <div>{timeLeft.days} <span className="text-sm">Days</span></div>
        <div>{timeLeft.hours} <span className="text-sm">Hours</span></div>
        <div>{timeLeft.minutes} <span className="text-sm">Minutes</span></div>
        <div>{timeLeft.seconds} <span className="text-sm">Seconds</span></div>
      </div>
    </div>
  );
};
