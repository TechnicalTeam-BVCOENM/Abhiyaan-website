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
        <div className='social-links'>
          <a href={props.insta} target='_blank'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href={props.linked}>
            <i className='fab fa-linkedin'></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profilecard;
