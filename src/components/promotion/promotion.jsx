'use client';
import Image from 'next/image';
import Mockup from '../../../assets/images/promotion/iphone.png';
import EventCard from '../../../assets/images/promotion/event_card.png';
import PlayStore from '../../../assets/images/promotion/playstore.png';
import { useEffect, useRef } from 'react';
import gsap, { Power0 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animations, mockupAnimation, widgetsAnimation } from './animation';

gsap.registerPlugin(ScrollTrigger);

export default function Promotion() {
  const mockupRef = useRef(null);
  const widgetsRef = useRef(null);
  const appTextRef = useRef(null);

  const runAnimation = () => {
    const startTime = 2;
    const textRef = appTextRef.current;
    const mockupElement = mockupRef.current;

    gsap.set(mockupElement, { x: -700, rotate: 90, opacity: 0 });
    gsap.set(widgetsRef.current, { opacity: 0, scale: 0 });
    gsap.set(textRef, { opacity: 0, y: 1000 });

    const masterTimeline = gsap.timeline({
      defaults: { ease: Power0.easeIn, paused: true },
    });

    masterTimeline
      .add(mockupAnimation(mockupElement, textRef))
      .add(widgetsAnimation(widgetsRef.current), startTime);

    animations.forEach((animation, index) => {
      const { selector, duration, scale, x, y, ease } = animation;
      let width = window.screen.width;
      if (width <= 767) {
        masterTimeline.add(
          gsap.to(selector, {
            duration,
            scale: scale / 1.7,
            x: x / 2.2,
            y: y / 4,
            ease,
          }),
          startTime + (index % 3) / 2
        );
        return;
      } else if (width >= 768 && width <= 1023) {
        masterTimeline.add(
          gsap.to(selector, {
            duration,
            scale: scale / 1.5,
            x: x / 1.3,
            y: y / 2,
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
      return;
    });

    return () => {
      masterTimeline.clear();
    };
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const scrollTrigger = ScrollTrigger.create({
      trigger: '#animation',
      pin: true,
      scrub: true,
      // markers: true, //remove this in production
      once: true,
      onEnter: () => runAnimation(),
    });

    return () => {
      scrollTrigger.kill();
    };
  });

  return (
    <section
      id='animation'
      data-scroll-section
      className=' mb-52 pointer-events-none relative flex  h-screen w-screen select-none items-center justify-center overflow-y-hidden'
    >
      <Image
        src={Mockup}
        alt='mockup'
        ref={mockupRef}
        className='absolute z-10 h-[275px] w-[140px] scale-100 opacity-0 md:h-[550px] md:w-[280px] lg:top-[16%] lg:h-[650px] lg:w-[320px]'
      />
      <div
        id='app_name'
        ref={appTextRef}
        className={`absolute top-[28%] -z-20 opacity-0 md:top-[10%] lg:top-[4%] `}
      >
        <h1 className='   bg-gradient-to-b  from-amber-50  to-purple-500 bg-clip-text font-teko text-7xl  font-extrabold tracking-wider text-transparent md:text-[10rem]  lg:text-[12rem]'>
          ABHIYAAN
        </h1>
      </div>
      <Image
        src={EventCard}
        ref={widgetsRef.current}
        id='party'
        alt='party'
        className='absolute -z-10 h-[160px] w-[240px] -rotate-[90deg] scale-0 '
      ></Image>
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

      <div id="playstore">
        <a
          href='https://play.google.com/store/apps/details?id=com.abhiyaan.app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            src={PlayStore}
            alt='playstore'
            height={60}
            width={200}
          />
        </a>
      </div>
    </section>
  );
}
