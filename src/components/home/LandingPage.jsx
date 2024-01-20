import Image from 'next/image';
import bg from '../../../assets/images/home/bg.jpg';
import logo from '../../../assets/images/logo.png';

export default function LandingPage() {
  return (
    <>
      <div
        id='home'
        className='pointer-events-none relative min-h-screen select-none'
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

        <Image
          src={logo}
          alt='logo'
          className='absolute left-[50%] top-[50%] z-20 h-[10em] w-[10em] -translate-x-[50%] -translate-y-[50%] lg:h-[20rem] lg:w-[20rem]'
        />
      </div>
      <div className='absolute -bottom-12 z-20 h-[120px] w-[100%] overflow-x-hidden bg-[#ffcd43] blur-[23px]'></div>
    </>
  );
}
