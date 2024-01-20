'use client';
import Sponsors from '@/components/sponsors/sponsors';
import Map from '@/components/map/map';
import Footer from '@/components/footer/footer';
import SectionDivider from '@/components/common/section_divider';
import Events from '@/components/events/events';

export default function Home() {
  return (
    <div className=''>
      <SectionDivider title='Events' />
      <Events />
      <SectionDivider title='Sponsors' />
      <Sponsors />
      <SectionDivider title='Contact Us' />
      <Map />
      <Footer />
    </div>
  );
}
