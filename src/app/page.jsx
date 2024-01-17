'use client';
import Sponsors from '@/components/sponsors/sponsors';
import Map from '@/components/map/map';
import Footer from '@/components/footer/footer';
import Promotion from '@/components/promotion/promotion';
import SectionDivider from '@/components/common/section_divider';
import Event from '@/components/event/event';

export default function Home() {
  return (
    <div className='relative'>
      <Event />
      <h1 className='h-screen'>Test</h1>
      <Promotion />
      <SectionDivider title='Sponsors' />
      <Sponsors />
      <SectionDivider title='Contact Us' />
      <Map />
      <Footer />
    </div>
  );
}
