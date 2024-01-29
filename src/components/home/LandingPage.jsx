'use client';

import Image from 'next/image';
import bg from '/public/images/home/bg.jpeg';
import gsap from 'gsap';
import { Power0 } from 'gsap';
import logo from '/public/images/logo.png';
import Link from 'next/link';
import ReactConfetti from 'react-confetti';
import { useEffect } from 'react';

export default function LandingPage() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '#bg',
      {
        opacity: 0,
        y: -1000,
        ease: Power0.easeIn,
        duration: 3,
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

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <div
        id='home'
        className='pointer-events-none relative min-h-screen select-none overflow-x-hidden'
      >
        <ReactConfetti width={4000} height={4000} tweenDuration={1000} />
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

        <Link href='/'>
          <Image
            id='logo'
            src={logo}
            alt='logo'
            priority={true}
            className='absolute left-[50%] top-[50%] z-20 h-[10em] w-[10em] -translate-x-[50%] -translate-y-[50%] md:h-[14rem] md:w-[14rem] lg:h-[20rem] lg:w-[20rem]'
          />
        </Link>
      </div>
      <div className=' overflow-x-hidden'>
        <div className='absolute -bottom-16 -left-10 z-20 h-[120px] w-[120%] overflow-x-hidden bg-black blur-xl'></div>
      </div>
    </>
  );
}
