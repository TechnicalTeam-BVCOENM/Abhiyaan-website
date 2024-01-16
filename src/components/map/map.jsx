import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaGlobe } from 'react-icons/fa';

const Map = () => {
  const googleApiLink =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d241398.2101212174!2d73.055078!3d19.026461!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24393d763af%3A0x266652df8009380d!2sBharati%20Vidyapeeth%20College%20of%20Engineering%2C%20Navi%20Mumbai!5e0!3m2!1sen!2sin!4v1679733305595!5m2!1sen!2sin';

  return (
    <div
      id='Contact us'
      className='z-10 m-auto h-auto w-auto rounded-tl-[2rem] rounded-tr-[2rem] bg-black py-6 text-center md:py-10'
    >
      <h1 className='font-openSans py-2 text-3xl md:py-4 md:text-5xl'>
        Contact <span className='text-orange-600 hover:text-white'>Us</span>
      </h1>
      <div className='flex flex-col items-center justify-center md:flex-col lg:flex-row'>
        <iframe
          className='h-[60vh] w-auto rounded-bl-[2rem] rounded-br-[2rem] rounded-tl-[2rem] rounded-tr-[2rem] p-4 md:h-[70vh] md:w-[70vw] md:rounded-bl-[5rem] md:rounded-br-[5rem] md:rounded-tl-[5rem] md:rounded-tr-[5rem] md:p-8 lg:h-[70vh] lg:w-[70vw]  lg:rounded-bl-[4rem] lg:rounded-br-[4rem] lg:rounded-tl-[4rem]  lg:rounded-tr-[4rem] lg:p-12'
          src={googleApiLink}
          loading='lazy'
          allowFullScreen=''
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>

        <div className='mt-4 w-full md:ml-4 md:mt-0 md:w-auto'>
          <div className='mb-4 flex flex-col items-center md:flex-row md:items-start'>
            <FaMapMarkerAlt className='mr-2 text-2xl md:text-3xl lg:text-4xl' />
            <div className='flex flex-col items-center md:items-start'>
              <p className='text-2xl font-bold text-orange-500 md:text-3xl lg:text-4xl'>
                Address:
              </p>
              <p className='text-center text-2xl md:text-left md:text-3xl lg:text-4xl'>
                Sector 7, CBD Belapur, Navi Mumbai, Maharashtra 400614
              </p>
            </div>
          </div>

          <div className='mb-4 flex flex-col items-center md:flex-row md:items-start'>
            <FaPhone className='mr-2 text-2xl md:text-3xl lg:text-4xl' />
            <div className='flex flex-col items-center md:items-start'>
              <p className='text-2xl font-bold text-orange-500 md:text-3xl lg:text-4xl'>
                Contact:
              </p>
              <p className='text-center text-2xl hover:text-blue-500 md:text-left md:text-3xl lg:text-4xl'>
                <a href='tel:02227572140'>022 2757 2140</a>
              </p>
            </div>
          </div>

          <div className='mb-4 flex flex-col items-center md:flex-row md:items-start'>
            <FaGlobe className='mr-2 text-2xl md:text-3xl lg:text-4xl' />
            <div className='flex flex-col items-center md:items-start'>
              <p className='text-2xl font-bold text-orange-500 md:text-3xl lg:text-4xl'>
                Website:
              </p>
              <p className='text-center text-2xl md:text-left md:text-3xl lg:text-4xl'>
                <a
                  href='https://bvcoenm.edu.in'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-blue-500'
                >
                  https://bvcoenm.edu.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
