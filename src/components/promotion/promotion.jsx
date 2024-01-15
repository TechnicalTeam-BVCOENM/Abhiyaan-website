'use client';
import Image from 'next/image';
import Mockup from '../../../assets/images/promotion/mockup2.png';
import { useEffect, useRef } from 'react';
import gsap, { Power0 } from 'gsap';
import { mockupAnimation, widgetsAnimation } from './animation';

export default function Promotion() {
  const mockupRef = useRef(null);
  const widgetsRef = useRef(null);
  const appTextRef = useRef(null);

  const runAnimation = () => {
    const textRef = appTextRef.current;
    const mockupElement = mockupRef.current;

    // another option is to make an array of animations for mobile and desktop separately
    const animations = [
      {
        selector: '#party',
        duration: 3,
        scale: 0.9,
        ease: Power0.easeOut,
        x: 500,
        y: 100,
      },
      {
        selector: '#hand',
        duration: 3,
        scale: 0.9,
        ease: Power0.easeOut,
        x: -500,
        y: -300,
      },
      {
        selector: '#clover',
        duration: 3,
        scale: 0.9,
        ease: Power0.easeOut,
        x: -500,
        y: 100,
      },
    ];

    gsap.set(mockupElement, { x: -700, rotate: 90 });
    gsap.set(widgetsRef.current, { opacity: 0, scale: 0 });
    gsap.set(textRef, { opacity: 0 });

    const startTime = 2;
    const masterTimeline = gsap.timeline();

    masterTimeline
      .add(mockupAnimation(mockupElement, textRef), startTime)
      .add(widgetsAnimation(widgetsRef.current), startTime);

    animations.forEach((animation, index) => {
      const { selector, duration, scale, x, y, ease } = animation;
      let width = window.screen.width;
      if (width < 768) {
        masterTimeline.add(
          gsap.to(selector, {
            duration,
            scale: scale / 1.5,
            x: x / 4,
            y: y / 4,
            ease,
          }),
          startTime + (index % 3) / 2
        );
        return;
      }
      masterTimeline.add(
        gsap.to(selector, { duration, scale, x, y, ease }),
        startTime + (index % 3) / 2
      );
    });

    return () => {
      masterTimeline.pause();
    };
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const cleanup = runAnimation();

    return () => {
      cleanup();
    };
  });

  return (
    <section
      id='animation'
      className='pointer-events-none relative flex h-screen w-screen select-none items-center justify-center overflow-y-hidden'
    >
      <Image
        src={Mockup}
        alt='mockup'
        ref={mockupRef}
        className='absolute z-10 h-[270px] w-[145px] scale-100 md:h-[550px] md:w-[280px]'
      />
      <div
        id='app_name'
        ref={appTextRef}
        className={`absolute top-[28%]  md:top-[10%]`}
      >
        <h1 className=' -z-10 bg-gradient-to-b  from-amber-50  to-purple-500 bg-clip-text  font-teko text-7xl tracking-wider text-transparent  md:text-[12rem]'>
          ABHIYAAN
        </h1>
      </div>
      <div
        ref={widgetsRef.current}
        id='party'
        className='absolute -z-10 flex h-40 w-40 scale-0  items-center justify-center rounded-xl bg-fuchsia-400 text-5xl'
      >
        🎉
      </div>
      <div
        ref={widgetsRef.current}
        id='hand'
        className='absolute -z-10 flex h-20 w-20 scale-0 items-center justify-center rounded-xl bg-fuchsia-400 text-5xl'
      >
        👋
      </div>
      <div
        ref={widgetsRef.current}
        id='clover'
        className='absolute -z-10 flex h-20 w-20 scale-0 items-center justify-center rounded-xl bg-fuchsia-400 text-5xl'
      >
        🍀
      </div>
    </section>
  );
}
