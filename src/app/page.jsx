'use client';
import Link from 'next/link';
import LandingPage from '@/components/home/LandingPage';
import SectionDivider from '@/components/common/section_divider';
import Events from '@/components/events/events';
import Teams from '@/components/teams/teams';
import Sponsors from '@/components/sponsors/sponsors';
import Map from '@/components/map/map';
import Footer from '@/components/footer/footer';

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
      <SectionDivider title='Contact Us' />
      <Map />
      <Footer />
    </div>
  );
}
