import Image from 'next/image';
import React from 'react';

function Profilecard(props) {
  return (
    <div className='profile-card'>
      <div className='img'>
        <Image src={props.img} alt='profile' width={200} height={200} />
        <p className='nam'>{props.name}</p>
      </div>
      <div className='caption'>
        <h3>{props.name}</h3>
        <p>{props.position}</p>
        <div className='social-links h-10 w-10 rounded-full flex justify-center'>
          <a href={props.insta} target='_blank'>
          <Image
                src='/icons/instagram.webp'
                alt='Instagram'
                width={64}
                height={64}
                className='h-8 w-8 rounded-full '
                quality={100}
              />
          </a>
          <a href={props.linked}>
          <Image
                src='/icons/twitter.png'
                alt='Twitter' 
                width={64}
                height={64}
                className='h-8 w-8 rounded-full'
                quality={100}
              />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profilecard;
