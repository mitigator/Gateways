import React from 'react';

import '../animation/Theme.css'; 

export const Theme = () => {
  return (
    <div className="bg-dark-blue text-light-lavender py-16 px-8 space-y-20">
      <h1 className="text-5xl font-bold text-center animate-fade-in">Event Theme</h1>

      <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-12 animate-slide-left">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-teal">Cyberpunk</h2>
          <p className="text-lg mt-4">
            Cyberpunk is a subgenre of science fiction that focuses on dystopian futures dominated by high technology, artificial intelligence, and cybernetic enhancements. Set in neon-lit cities, it explores themes of rebellion against corporate control, blending the digital world with reality.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src="{CyberpunkImage}" alt="Cyberpunk" className="w-full h-auto animate-image-fade" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center justify-between space-y-6 md:space-y-0 md:space-x-12 animate-slide-right">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-teal">Greek Mythology</h2>
          <p className="text-lg mt-4">
            Greek mythology is a collection of stories about gods, heroes, and ancient rituals, emphasizing the struggles of mortals and immortals alike. It is filled with tales of power, betrayal, and valor, reflecting humanity’s eternal search for meaning in a chaotic world.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src="{GreekGodImage}" alt="Greek God" className="w-full h-auto animate-image-fade" />
        </div>
      </div>
    </div>
  );
};
