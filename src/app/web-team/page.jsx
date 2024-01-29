'use client';
import React from 'react';
import './Team.css';
import { useEffect } from 'react';
import CardsLayout from './CardsLayout';
import Background from './Background';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1600 });
  }, []);

  return (
    <header className='head'>
      <Link
        href='https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap'
        rel='stylesheet'
      ></Link>
      <Link rel='stylesheet' href='bower_components/aos/dist/aos.css' />
      <div className='a'>
        <div className='title'>Web Development Team</div>
      </div>
      <div className='container'>
        <Background />
        <CardsLayout />
      </div>
    </header>
  );
}
