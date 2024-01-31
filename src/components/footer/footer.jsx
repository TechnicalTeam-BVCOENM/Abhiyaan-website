import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-[#1d1d1d] pb-20 pt-4' id='connect'>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between px-4 sm:px-6 md:flex-row md:items-start lg:px-8'>
        <div className='address mb-8 flex flex-col items-center text-center text-white md:mb-0 md:block md:text-start'>
          <div className='flex flex-row items-center py-2 font-bold'>
            <Image
              src='/icons/location.png'
              alt='CESA'
              width={20}
              height={20}
              className='mr-1'
            />
            {`Address`}
          </div>
          <div className='address w-60 text-sm'>
            {`Bharati Vidyapeeth College Of Engineering, Sector-7, CBD Belapur, Navi Mumbai, Maharashtra 400614`}
          </div>
        </div>

        <div className='follow mb-8 w-40 text-center text-white md:mb-0'>
          <div className='py-2 font-bold'>{`Follow Us`}</div>
          <div className='flex justify-around'>
            <Link
              href='https://www.instagram.com/abhiyaan_bvcoenm/'
              target='_blank'
            >
              <Image
                src='/icons/instagram.webp'
                alt='CESA'
                width={64}
                height={64}
                className='h-10 w-10 rounded-full'
                quality={100}
              />
            </Link>
            <Link
              href='https://www.instagram.com/abhiyaan_bvcoenm/'
              target='_blank'
            >
              <Image
                src='/icons/twitter.png'
                alt='CESA'
                width={64}
                height={64}
                className='h-10 w-10 rounded-full'
                quality={100}
              />
            </Link>
            <Link
              href='https://www.instagram.com/abhiyaan_bvcoenm/'
              target='_blank'
            >
              <Image
                src='/icons/youtube.png'
                alt='CESA'
                width={64}
                height={64}
                className='h-10 w-10 rounded-full'
                quality={100}
              />
            </Link>
          </div>
        </div>

        <div className='flex flex-col items-center text-center text-white md:items-start'>
          <div className='py-2 font-bold'>{`Contact Us`}</div>
          <div className='flex flex-row items-center'>
            <Image
              src='/icons/phone.png'
              alt='CESA'
              width={16}
              height={16}
              className='mr-1'
            />
            {`+91 9321379121`}
          </div>
          <div className='flex flex-row items-center'>
            <Image
              src='/icons/email.png'
              alt='CESA'
              width={16}
              height={16}
              className='mr-1'
            />
            {`abhiyaan2019.bvcoe@gmail.com`}
          </div>
        </div>
      </div>
      <h3 className='my-1 mt-4 text-center text-sm font-semibold text-stone-500 md:mt-0'>{`Made with ❤️ by Technical Team`}</h3>
    </footer>
  );
}
