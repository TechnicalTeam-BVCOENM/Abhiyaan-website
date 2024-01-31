'use client';

import Image from 'next/image';
import gsap from 'gsap';
import logo from '/public/images/logo.png';
import Link from 'next/link';
import { useEffect } from 'react';
import ParticalBackground from '../common/BackgroundParticles';

export default function LandingPage() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
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
        <ParticalBackground />
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
    </>
  );
}
