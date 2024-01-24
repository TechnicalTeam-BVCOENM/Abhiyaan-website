import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

const About = () => {
  let header = useRef();
  let paragraph = useRef();

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from(header, {
      translateX: -100,
    });
    gsap.to([header, paragraph], {
      scrollTrigger: {
        trigger: '#about',
        start: '-20% center',
        end: '-10% center',
        scrub: 1,
      },
      opacity: 1,
      translateX: 0,
      delay: 0.5,
    });
  });

  const style = {
    background:
      'linear-gradient(to right bottom, #e4c84380, #e4c84390, #e4c84396, #e4c84380, #e4c84370)',
  };

  return (
    <div
      className='relative   z-10 mt-44  h-[56rem]   w-screen select-none bg-black antialiased md:h-[45rem] lg:mt-5'
      id='about'
    >
      <video
        loop={true}
        autoPlay={true}
        muted={true}
        preload='auto'
        className='h-full  w-full  object-cover opacity-40'
      >
        <source src='/video/videoBg.mp4' type='video/mp4' />
        Your browser does not support the video tag. I suggest you upgrade your
        browser.
      </video>
      <div
        className='md-pb-0 absolute top-0  flex   h-full w-full  flex-col justify-center px-4  pb-7 text-white lg:px-40'
        style={style}
      >
        <h1
          className='font-openSans overflow-hidden py-4 text-5xl opacity-0 md:py-0 md:text-6xl lg:py-3'
          ref={(e) => {
            header = e;
          }}
        >
          About{' '}
          <span className='duration-400 text-orange-600 transition ease-in-out hover:text-orange-600 lg:text-white'>
            Abhiyaan
          </span>
        </h1>
        <p
          className='font-poppins text-justify opacity-0'
          ref={(e) => {
            paragraph = e;
          }}
        >
          <br />
          Abhiyaan is a cultural extravaganza which features events ranging from
          literary skills to performing arts to stardom and glamour. Our five
          day event is the highlight to the town which attracts the attention of
          many different college students and team of performers. Every year we
          feature participation from students from prominent colleges in Navi
          Mumbai.
          <br />
          This year Abhiyaan is all about the nostalgia we have witnessed in our
          school day, from pen fights to book cricket, from scribbling on your
          friend's book to passing secret messages in them, from lousy mornings
          assemblies to tirey last periods, we do miss our school days more
          often than not. However, the flashbacks are many a times followed with
          a feeling of sadness. Let's change that, shall we? Back To School,
          like those commercial for backpacks, is the time for a happy nostalgia
          for the adults just out of teenage. Reminiscing in the events complied
          with fun activities are what we might just need to get back to the
          good old days.
        </p>
      </div>
    </div>
  );
};

export default About;
