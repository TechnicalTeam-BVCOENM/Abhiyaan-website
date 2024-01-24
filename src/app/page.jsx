'use client';
import Events from '@/components/events/events';
import Footer from '@/components/footer/footer';
import LandingPage from '@/components/home/LandingPage';
import Map from '@/components/map/map';
import Sponsors from '@/components/sponsors/sponsors';
import Timeline from '@/components/timeline/timeline';
import SectionDivider from '@/components/common/section_divider';
import Teams from '@/components/teams/teams';

export default function Home() {
  return (
    <div className=''>
      <LandingPage />
      <SectionDivider title='Events' />
      <Events />
      <SectionDivider title='Teams' />

      <Teams />
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
