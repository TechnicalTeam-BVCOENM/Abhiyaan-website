'use client';
import Link from 'next/link';
import LandingPage from '@/components/home/LandingPage';
import SectionDivider from '@/components/common/section_divider';
import Events from '@/components/events/events';
import Teams from '@/components/teams/teams';
import Sponsors from '@/components/sponsors/sponsors';
import Map from '@/components/map/map';
import Footer from '@/components/footer/footer';
import About from '@/components/about/about';
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
      <SectionDivider title='Teams' />
      <Teams />
      <SectionDivider title='Sponsors' />
      <Sponsors />
      <SectionDivider title='Timeline' />
      <Timeline />
      <SectionDivider title='Contact Us' />
      <Map />
      <Footer />
    </div>
  );
}
