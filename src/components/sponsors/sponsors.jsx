import React from 'react';
import { sponsers } from './sponsors-model';

const SponsorsPage = () => {
  return (
    <div
      id='sponsors'
      className='z-50 h-auto w-screen select-none bg-black px-4 pt-20'
    >
      <div className='font-openSans  mb-4 overflow-hidden text-center text-5xl text-white md:text-6xl'>
        <h1 className='duration-400 overflow-hidden text-orange-600 transition ease-in-out hover:text-orange-600 lg:text-white'>
          Our Sponsers
        </h1>
      </div>
      <div className='grid grid-cols-1 items-center justify-items-center gap-2 bg-black p-16 md:grid-cols-5 md:gap-10 md:p-2 lg:gap-10 lg:p-32'>
        {sponsers.map((sp) => {
          return (
            <div
              key={sp.id}
              className='duration-400 h-auto w-auto p-8  transition  ease-in-out hover:scale-105 hover:ease-in-out  md:p-0 lg:p-3'
            >
              <a href={sp.link} target='_blank'>
                <img
                  src={sp.img}
                  loading='lazy'
                  className='h-auto w-auto'
                  alt={sp.name}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SponsorsPage;

// grid m daalhe H AND W
