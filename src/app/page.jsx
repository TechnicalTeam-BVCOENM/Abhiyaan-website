'use client';
import About from '@/components/about/about';
import SectionDivider from '@/components/common/section_divider';
import Events from '@/components/events/events';
import Footer from '@/components/footer/footer';
import LandingPage from '@/components/home/LandingPage';
import Map from '@/components/map/map';
import Sponsors from '@/components/sponsors/sponsors';
import Timeline from '@/components/timeline/timeline';

export default function Home() {
  return (
    <div className=''>
      <LandingPage />
      <div className='mt-10'></div>
      <SectionDivider title='About' />
      <About />
      <SectionDivider title='Events' />
      <Events />
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
