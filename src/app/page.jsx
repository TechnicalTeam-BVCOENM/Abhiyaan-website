'use client';
import Map from '@/components/map/map';
import Footer from '@/components/footer/footer';
// import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <center className='mx-12 mt-16 scale-105 overflow-hidden'>
      <Map />
      <Footer />
    </center>
  );
}
