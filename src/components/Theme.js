import React from 'react';
import '../animation/Theme.css';
import ThemeImage from '../assets/ThemeImage.png'

const Theme = () => {
  return (
    <section className="theme-section py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-herosection-white">Theme</h2>
        <div className='flex flex-col justify-between'>
          <div className='flex mb-10'>
            <img 
              src={ThemeImage} 
              alt="Theme Description" 
              className="mr-4 w-1/4 h-40 " 
            />
            <p className="text-center m-5 text-herosection-white align-middle">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className='flex mt-20'>
          
            <p className="text-center m-5 text-herosection-white align-middle">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <img 
              src={ThemeImage} 
              alt="Theme Description" 
              className="mr-4 w-1/4 h-40" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme;
