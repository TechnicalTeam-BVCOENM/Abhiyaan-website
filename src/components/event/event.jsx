import EventCard from './eventCard';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Event() {
  const containerRef = useRef(null);
  return (
    <div
      id='event-slider'
      className=' h-screen w-screen overflow-hidden'
      ref={containerRef}
    >
      <div
        id='slider-wrapper'
        className=' absolute top-0 flex h-screen w-[8000px] items-center gap-[100px] py-[600px]'
      >
        <div id='slide' className=' h-[500px] w-[400px] rounded-xl bg-white'>
          <EventCard
            id='e-cards'
            imgUrl={
              'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7488244.jpg&f=1&nofb=1&ipt=09a866a51925833b26cdefd2974bf97bab8f62792f979383f0ee739c32a4b832&ipo=images'
            }
            formLink={
              'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7488244.jpg&f=1&nofb=1&ipt=09a866a51925833b26cdefd2974bf97bab8f62792f979383f0ee739c32a4b832&ipo=images'
            }
            route={'https://wwww.example.com./'}
          />
        </div>
        <div id='slide' className=' h-[500px] w-[400px] rounded-xl bg-white'>
          <EventCard
            id='e-cards'
            imgUrl={
              'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7488244.jpg&f=1&nofb=1&ipt=09a866a51925833b26cdefd2974bf97bab8f62792f979383f0ee739c32a4b832&ipo=images'
            }
            formLink={
              'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7488244.jpg&f=1&nofb=1&ipt=09a866a51925833b26cdefd2974bf97bab8f62792f979383f0ee739c32a4b832&ipo=images'
            }
            route={'https://wwww.example.com./'}
          />
        </div>
        <div id='slide' className=' h-[500px] w-[400px] rounded-xl bg-white'>
          <EventCard
            id='e-cards'
            imgUrl={
              'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7488244.jpg&f=1&nofb=1&ipt=09a866a51925833b26cdefd2974bf97bab8f62792f979383f0ee739c32a4b832&ipo=images'
            }
            formLink={
              'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7488244.jpg&f=1&nofb=1&ipt=09a866a51925833b26cdefd2974bf97bab8f62792f979383f0ee739c32a4b832&ipo=images'
            }
            route={'https://wwww.example.com./'}
          />
        </div>
        <div id='slide' className=' h-[500px] w-[400px] rounded-xl bg-white'>
          <EventCard
            id='e-cards'
            imgUrl={
              'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7488244.jpg&f=1&nofb=1&ipt=09a866a51925833b26cdefd2974bf97bab8f62792f979383f0ee739c32a4b832&ipo=images'
            }
            formLink={
              'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7488244.jpg&f=1&nofb=1&ipt=09a866a51925833b26cdefd2974bf97bab8f62792f979383f0ee739c32a4b832&ipo=images'
            }
            route={'https://wwww.example.com./'}
          />
        </div>
        <div id='slide' className=' h-[500px] w-[400px] rounded-xl bg-white'>
          <EventCard
            id='e-cards'
            imgUrl={
              'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7488244.jpg&f=1&nofb=1&ipt=09a866a51925833b26cdefd2974bf97bab8f62792f979383f0ee739c32a4b832&ipo=images'
            }
            formLink={
              'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7488244.jpg&f=1&nofb=1&ipt=09a866a51925833b26cdefd2974bf97bab8f62792f979383f0ee739c32a4b832&ipo=images'
            }
            route={'https://wwww.example.com./'}
          />
        </div>
      </div>
    </div>
  );
}

{
  /* <EventCard
        id='e-cards'
        imgUrl={
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7488244.jpg&f=1&nofb=1&ipt=09a866a51925833b26cdefd2974bf97bab8f62792f979383f0ee739c32a4b832&ipo=images'
        }
        formLink={
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7488244.jpg&f=1&nofb=1&ipt=09a866a51925833b26cdefd2974bf97bab8f62792f979383f0ee739c32a4b832&ipo=images'
        }
        route={'https://wwww.example.com./'}
      /> */
}
