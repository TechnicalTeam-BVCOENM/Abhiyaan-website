import Image from 'next/image';
import Mockup from '../../../assets/images/promotion/mockup.png';
import Stone from '../../../assets/images/promotion/stone.png';
// import EventCard from '../../../assets/images/promotion/event_card.png';

export default function Promotion() {
  return (
    <div id='app-promotion' className='h-screen overflow-y-hidden'>
      <h1 className='absolute top-[50%] flex w-screen justify-center text-center text-[4rem] font-bold md:top-[24%] md:text-[8rem] lg:top-[12%]'>
        ABHIYAAN
      </h1>
      {/* <h1 className='absolute top-[50%] z-20 flex w-screen justify-center text-center text-[4rem] font-bold blur-[2px] md:top-[24%] md:text-[8rem] lg:-left-[10%]  lg:top-[65%] lg:text-7xl'>
        👋
      </h1>
      <h1 className='absolute top-[50%] flex w-screen justify-center text-center text-[4rem] font-bold blur-[0px] md:top-[24%] md:text-[8rem] lg:left-[10%] lg:top-[55%] lg:text-8xl'>
        🎉
      </h1>
      <Image
        src={EventCard}
        width={400}
        height={400}
        className='absolute top-[50%] flex w-52 -rotate-[12deg] justify-center text-center text-[4rem] font-bold md:top-[24%] md:text-[8rem]  lg:left-[35%] lg:top-[35%] lg:text-8xl'
      /> */}

      <div className='relative h-screen'>
        <Image
          src={Mockup}
          width={400}
          height={200}
          alt='Abhiyaan app mockup'
          className={`absolute w-52 -rotate-[12deg] 
          transition-all duration-300 ease-in-out
          md:w-[25vw] lg:w-[20vw] xl:w-[15vw]`}
        />
        <Image
          src={Stone}
          width={400}
          height={200}
          alt='Stone'
          className='pointer-events-none absolute -bottom-28 left-[10%] mb-0 h-[30vh] w-[80vw] select-none md:-bottom-[10em] md:left-[20%] md:h-[50vh] md:w-[60vw]'
        />
      </div>
      <div className='absolute bottom-0 left-0 h-[10%] w-full bg-gradient-to-b from-transparent to-black md:h-[20%]'></div>
    </div>
  );
}
