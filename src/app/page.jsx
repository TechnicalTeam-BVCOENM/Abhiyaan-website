'use client';
import Sponsors from '@/components/sponsors/sponsors';
import Map from '@/components/map/map';
import Footer from '@/components/footer/footer';
import Promotion from '@/components/promotion/promotion';

export default function Home() {
  return (
    <center className=''>
      <div className='h-screen'> hi</div>
      <Promotion />
      <Sponsors/>
      <Map />
      <Footer />
    </center>
  );
}
