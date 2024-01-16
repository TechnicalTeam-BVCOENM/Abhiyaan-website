'use client';

import Promotion from '@/components/promotion/promotion';
import Sponsors from '@/components/sponsors/sponsors';
import Map from '@/components/map/map';
import Footer from '@/components/footer/footer';

export default function Home() {
  return (
    <center className='mx-12 mt-16 scale-105 overflow-x-hidden'>
      <Sponsors/>
      <div className='h-screen'> Abhiyaan </div>
      <Promotion />
      <Map />
      <Footer />
    </center>
  );
}
