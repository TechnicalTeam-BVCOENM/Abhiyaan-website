import React from 'react';

const Map = () => {
  const googleApiLink =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d241398.2101212174!2d73.055078!3d19.026461!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24393d763af%3A0x266652df8009380d!2sBharati%20Vidyapeeth%20College%20of%20Engineering%2C%20Navi%20Mumbai!5e0!3m2!1sen!2sin!4v1679733305595!5m2!1sen!2sin';

  return (
    <div className='z-10 m-auto h-auto w-auto rounded-tl-[2rem] rounded-tr-[2rem]  py-6 text-center md:py-10'>
      <div className='flex flex-col items-center justify-center md:flex-col lg:flex-row '>
        <iframe
          className='h-[60vh] w-[90vw] rounded-[2rem] md:mx-12  md:h-[70vh] lg:mx-12 lg:h-[90vh] lg:w-screen'
          src={googleApiLink}
          loading='lazy'
          allowFullScreen=''
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>

        {/* <div className='mt-4 w-full md:ml-4 md:mt-0 md:w-auto'>
          <div className='mb-4 flex flex-col items-center md:flex-row md:items-start'>
            <FaMapMarkerAlt className='mr-2 text-2xl md:text-3xl lg:text-4xl' />
            <div className='flex flex-col items-center md:items-start'>
              <p className='text-2xl font-bold font-oswald md:text-3xl lg:text-4xl text-purple-500 '>
                Address:
              </p>
              <p className='text-center text-2xl md:text-left md:text-3xl lg:text-4xl font-quattrocento '>
                Sector 7, CBD Belapur, Navi Mumbai, Maharashtra 400614
              </p>
            </div>
          </div>

          <div className='mb-4 flex flex-col items-center md:flex-row md:items-start'>
            <FaPhone className='mr-2 text-2xl md:text-3xl lg:text-4xl' />
            <div className='flex flex-col items-center md:items-start'>
              <p className='text-2xl font-bold font-oswald md:text-3xl lg:text-4xl text-purple-500 '>
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
              <p className='text-2xl font-bold font-oswald md:text-3xl lg:text-4xl text-purple-500 '>
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
        </div> */}
      </div>
    </div>
  );
};

export default Map;
