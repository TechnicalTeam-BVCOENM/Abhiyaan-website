'use client';
import Image from 'next/image';
import Mockup from '../../../assets/images/promotion/mockup2.png';
import Leaves from '../../../assets/images/promotion/leaves.png';
import { useEffect, useRef } from 'react';
import gsap, { Power0 } from 'gsap';
import {
  leavesAnimation,
  mockupAnimation,
  widgetsAnimation,
} from './animation';

const widgetsRef = Array.from({ length: 3 }, () => useRef(null));
const leavesRef = Array.from({ length: 3 }, () => useRef(null));
export default function Promotion() {
  const mockupRef = useRef(null);
  const widgetElement = document.querySelector('#widgets');
  const appTextRef = useRef(null);

  useEffect(() => {
    const mockupElement = mockupRef.current;
    const textRef = appTextRef.current;

    // another option is to make an array of animations for mobile and desktop separately
    const animations = [
      {
        selector: widgetsRef[0].current,
        duration: 3,
        scale: 0.9,
        ease: Power0.easeOut,
        x: 500,
        y: 100,
      },
      {
        selector: widgetsRef[1].current,
        duration: 3,
        scale: 0.9,
        ease: Power0.easeOut,
        x: -500,
        y: -300,
      },
      {
        selector: widgetsRef[2].current,
        duration: 3,
        scale: 0.9,
        ease: Power0.easeOut,
        x: -500,
        y: 100,
      },
    ];

    gsap.set(mockupElement, { x: -700, rotate: 90 });
    gsap.set(widgetElement, { opacity: 0, scale: 0 });
    gsap.set(textRef, { opacity: 0 });

    const startTime = 2;
    const masterTimeline = gsap.timeline();

    masterTimeline
      .add(leavesAnimation(leavesRef[0].current, 600, -200))
      .add(leavesAnimation(leavesRef[1].current, -650, 200))
      .add(mockupAnimation(mockupElement, textRef), startTime)
      .add(widgetsAnimation(widgetElement), startTime);

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
      masterTimeline.kill();
    };
  }, []);

  return (
    <section
      id='animation'
      className='relative  flex h-screen w-screen items-center justify-center overflow-y-hidden'
    >
      <Image
        src={Leaves}
        ref={leavesRef[0]}
        alt='leaves'
        className='absolute right-0 top-0 z-20'
      />
      <Image
        src={Leaves}
        ref={leavesRef[1]}
        alt='leaves'
        className='absolute bottom-0 left-0 z-20 rotate-180'
      />
      <Image
        src={Mockup}
        alt='mockup'
        ref={mockupRef}
        className='absolute z-10 h-[260px] w-[145px] scale-100 md:h-[550px] md:w-[280px]'
      />
      <div
        id='app_name'
        ref={appTextRef}
        className='absolute top-[28%]  md:top-[12%]'
      >
        <h1 className='-z-10 text-7xl font-bold md:text-[8rem]'>
          Abhi
          <span className=' relative  z-10 bg-gradient-to-b from-amber-50 to-purple-500 bg-clip-text  text-transparent'>
            y
          </span>
          aan
        </h1>
      </div>
      <div
        ref={widgetsRef[0]}
        id='widgets'
        className='absolute -z-10 flex h-40 w-40 scale-0  items-center justify-center rounded-xl bg-fuchsia-400 text-5xl'
      >
        🎉
      </div>
      <div
        ref={widgetsRef[1]}
        id='widgets'
        className='absolute -z-10 flex h-20 w-20 scale-0 items-center justify-center rounded-xl bg-fuchsia-400 text-5xl'
      >
        👋
      </div>
      <div
        ref={widgetsRef[2]}
        id='widgets'
        className='absolute -z-10 flex h-20 w-20 scale-0 items-center justify-center rounded-xl bg-fuchsia-400 text-5xl'
      >
        🍀
      </div>
    </section>
  );
}
