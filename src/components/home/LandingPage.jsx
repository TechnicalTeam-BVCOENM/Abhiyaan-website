'use client';
import Image from 'next/image';
import bg from '../../../assets/images/home/bg.jpeg';
import gsap from 'gsap';
// import land from '../../../assets/images/home/land.png';
import logo from '../../../assets/images/logo.png';
import Link from 'next/link';
import ReactConfetti from 'react-confetti';
import { useEffect, useState } from 'react';

export default function LandingPage() {
  const [windowDimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  };
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      '#bg',
      {
        opacity: 0,
        y: -1000,
      },
      {
        opacity: 1,
        y: 0,
      }
    ).fromTo(
      '#logo',
      {
        opacity: 0,
        scale: 0.1,
        rotate: -90,
      },
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
      }
    );

    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowDimension]);

  return (
    <>
      <div
        id='home'
        className='pointer-events-none relative min-h-screen select-none overflow-x-hidden'
      >
        <ReactConfetti
          width={windowDimension.width}
          height={windowDimension.height}
          tweenDuration={1000}
        />
        <Image
          src={bg}
          id='bg'
          className='z-10 h-screen w-screen object-cover object-center '
          width={889}
          height={500}
          alt='bg'
          quality={100}
          priority={true}
        />
        {/* <Image src={land} className='absolute bottom-0' /> */}

        <Link href='/'>
          <Image
            id='logo'
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
