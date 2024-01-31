'use client';

import About from '@/components/about/about';
import SectionDivider from '@/components/common/section_divider';
import Events from '@/components/events/events';
import Footer from '@/components/footer/footer';
import LandingPage from '@/components/home/LandingPage';
import Map from '@/components/map/map';
import AppPromotion from '@/components/promotion/app_promotion';
import Sponsors from '@/components/sponsors/sponsors';
// import Teams from '@/components/teams/teams';
import Timeline from '@/components/timeline/timeline';
import App from 'next/app';

export default function Home() {
  return (
    <div className=''>
      <LandingPage />
      <div className='mt-48'></div>
      <About />
      <SectionDivider title='Timeline' />
      <Timeline />
      <SectionDivider title='Events' />
      <Events />
      <SectionDivider title='Sponsors' />
      <Sponsors />
      <AppPromotion />
      {/* <SectionDivider title='Teams' />
      <Teams /> */}
      <SectionDivider title='Contact Us' />
      <Map />
      <Footer />
    </div>
  );
}
