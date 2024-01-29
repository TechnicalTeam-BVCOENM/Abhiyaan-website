import React from 'react';
import { sponsers } from './sponsors_model';
import Image from 'next/image';

const SponsorsPage = () => {
  return (
    <div className='p-4 text-white' id='sponsors'>
      <div className='grid grid-cols-3 gap-4 lg:grid-cols-5'>
        {sponsers.map((sponsor, index) => (
          <div key={index} className='rounded-xl  bg-white p-4'>
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
                className='mx-auto h-auto w-44 rounded-lg'
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsPage;
