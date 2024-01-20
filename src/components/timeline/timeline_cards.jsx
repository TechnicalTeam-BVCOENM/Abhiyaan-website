'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function TimelineCard({ cardInfo, position }) {
  let cardRefer = useRef();
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    let x = 0;
    if (position === 'left' || window.screen.width <= 640) {
      x = 200;
    } else {
      x = -200;
    }

    const tl = gsap.timeline();
    tl.fromTo(
      cardRefer,
      {
        x,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: 'ease-in',
        scrollTrigger: {
          trigger: cardRefer,
          start: `top +=400`,
          end: () => `+=${cardRefer.offsetHeight}`,
          scrub: true,
        },
      }
    );
    return () => {
      tl.kill();
    };
  });
  return (
    <div
      className={`flex w-full flex-row items-center ${
        position === 'left' && 'sm:flex-row-reverse sm:self-start'
      }`}
    >
      <div className='sm:absolute sm:left-[50%] sm:translate-x-[-50%]'>
        <svg
          width='44'
          height='390'
          viewBox='0 0 44 395'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0.666667 200.5C0.666667 212.282 10.2179 221.833 22 221.833C33.7821 221.833 43.3333 212.282 43.3333 200.5C43.3333 188.718 33.7821 179.167 22 179.167C10.2179 179.167 0.666667 188.718 0.666667 200.5ZM18 0.5V200.5H26V0.5H18ZM18 201V401H26V201H18Z'
            fill='white'
          />
        </svg>
      </div>
      <div
        className='relative inline-block h-[280px] w-[300px] overflow-hidden rounded-xl max-lg:h-[260px] max-lg:w-[260px]'
        ref={(ele) => (cardRefer = ele)}
      >
        <Image
          className=' overflow-hidden rounded-xl object-cover object-center'
          alt='Event image'
          src={cardInfo.image}
          width={400}
          height={400}
        />
        <div
          id='caption'
          className='absolute left-0 top-0 flex h-full w-full flex-col justify-between overflow-hidden rounded-xl bg-[#15161850] px-3 py-3'
        >
          <h2 id='title' className='m-auto text-2xl font-bold'>
            {cardInfo.title}
          </h2>
          <h2
            id='description'
            className='text-ellipse line-clamp-4 h-[120px] overflow-hidden text-center text-sm'
          >
            {cardInfo.description}
          </h2>
        </div>
      </div>
    </div>
  );
}
