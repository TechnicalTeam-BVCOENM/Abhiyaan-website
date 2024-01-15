import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faSquareXTwitter,
  faLinkedin,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const Icons = [
    {
      icon: faInstagram,
      class:
        'transition duration-400 ease-in-out  fa-brands fa-instagram text-3xl md:text-5xl hover:scale-110 ',
      id: 1,
      link: 'https://www.instagram.com/abhiyaan_bvcoenm/',
    },
    {
      icon: faFacebook,
      class:
        'transition duration-400 ease-in-out  fa-brands fa-square-facebook text-3xl md:text-5xl  hover:scale-110',
      id: 2,
      link: 'https://www.facebook.com/bvcoenmedu/',
    },
    {
      icon: faYoutube,
      class:
        'transition duration-400 ease-in-out  fa-brands fa-youtube text-3xl md:text-5xl  hover:scale-110',
      id: 3,
      link: 'https://www.youtube.com/channel/UC4Pwf6mDh3k0ra0p7QWDPnQ',
    },
    {
      icon: faSquareXTwitter,
      class:
        'transition duration-400 ease-in-out  fa-brands fa-square-twitter text-3xl md:text-5xl  hover:scale-110',
      id: 4,
      link: 'https://twitter.com/abhiyaan_bvcoe',
    },
    {
      icon: faLinkedin,
      class:
        'transition duration-400 ease-in-out  fa-brands fa-linkedin text-3xl md:text-5xl  hover:scale-110',
      id: 5,
      link: 'https://www.linkedin.com/school/bharati-vidyapeeth-college-of-engineering-navi-mumbai/',
    },
    {
      icon: faTelegram,
      class:
        'transition duration-400 ease-in-out  fa-brands fa-telegram text-3xl md:text-5xl  hover:scale-110',
      id: 6,
      link: 'https://t.me/bvcoenm',
    },
  ];
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
