'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { data } from './data';
import TimelineCard from './timeline_cards';

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  return (
    <div id='timeline' className='mx-auto h-fit max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative m-auto flex flex-col items-center overflow-hidden sm:w-[75%]'>
        {data.map((element, index) => {
          return (
            <TimelineCard
              cardInfo={element}
              key={index}
              position={`${index % 2 === 0 ? 'left' : 'right'}`}
            />
          );
        })}
      </div>
    </div>
  );
}
