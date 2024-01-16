import React from 'react';
import { sponsers } from './sponsors-model';
import Image from 'next/image';

const SponsorsPage = () => {
  return (
    <div className='bg-black p-4 text-white'>
      <h1 className='mb-4 text-center text-5xl text-orange-600 hover:text-orange-600 lg:text-white'>
        Our Sponsors
      </h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5'>
        {sponsers.map((sponsor) => (
          <div key={sponsor.id} className='p-4'>
            <a
              href={sponsor.link}
              target='_blank'
              rel='noopener noreferrer'
              className='block'
            >
              <Image
                src={sponsor.img}
                alt={sponsor.name}
                width={400}
                height={400}
                className='h-auto w-full'
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsPage;
