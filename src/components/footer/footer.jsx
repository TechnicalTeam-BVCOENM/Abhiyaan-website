import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icons } from './footer-model';

const Footer = () => {
  return (
    <div id='footer' className='z-10 h-auto w-auto bg-black/80'>
      <div
        id='footer_texts'
        className='social-links flex flex-col items-center justify-between text-left md:flex-row md:items-start'
      >
        <div className='mb-4 text-center md:mb-0'>
          ©2024-Abhiyaan |
          <br className='md:hidden' /> All Rights Reserved
        </div>
        <div className='social-links'>
          {Icons.map((icon) => (
            <a
              href={icon.link}
              key={icon.id}
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>
                <FontAwesomeIcon
                  icon={icon.icon}
                  id='fa_icon'
                  style={{ color: '#ffffff', margin: 5 }}
                  aria-label={`Visit ${icon.link}`}
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
