'use client';
import SectionDivider from '@/components/common/section_divider';
import Footer from '@/components/footer/footer';
import Map from '@/components/map/map';
import Promotion from '@/components/promotion/promotion';
import Sponsors from '@/components/sponsors/sponsors';
import Timeline from '@/components/timeline/timeline';

export default function Home() {
  return (
    <div className=''>
      <h1 className='h-screen'>Test</h1>
      <Promotion />
      <SectionDivider title='Sponsors' />
      <Sponsors />
      <SectionDivider title='Events' />
      <Timeline />
      <SectionDivider title='Contact Us' />
      <Map />
      <Footer />
    </div>
  );
}
