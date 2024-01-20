import Image from 'next/image';
import bg from '../../../assets/images/home/bg.jpg';
import logo from '../../../assets/images/logo.png';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <>
      <div
        id='home'
        className='pointer-events-none relative min-h-screen select-none overflow-x-hidden'
      >
        <Image
          src={bg}
          className='z-10 h-screen w-screen object-cover object-center '
          width={889}
          height={500}
          alt='bg'
          quality={100}
          priority={true}
        />

        <Link href='/'>
          <Image
            src={logo}
            alt='logo'
            className='absolute left-[50%] top-[50%] z-20 h-[10em] w-[10em] -translate-x-[50%] -translate-y-[50%] md:h-[14rem] md:w-[14rem] lg:h-[20rem] lg:w-[20rem]'
          />
        </Link>
      </div>
      <div className=' overflow-x-hidden'>
        <div className='absolute -bottom-16 -left-10 z-20 h-[120px] w-[120%] overflow-x-hidden bg-[#ffdb29] blur-xl'></div>
      </div>
    </>
  );
}
