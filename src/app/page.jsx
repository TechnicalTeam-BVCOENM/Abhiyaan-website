'use client';
import Sponsors from '@/components/sponsors/sponsors';
import Map from '@/components/map/map';
import Footer from '@/components/footer/footer';
import SectionDivider from '@/components/common/section_divider';
import About from '@/components/about/about';
import Events from '@/components/events/events';
import LandingPage from '@/components/home/LandingPage';


export default function Home() {
  return (
    <div className=''>
      <LandingPage />
      <SectionDivider title='Events' />
      <Events />
      <SectionDivider title='Sponsors' />
      <Sponsors/>
      <SectionDivider title='About' />
      <About />
      <SectionDivider title='Contact Us' />
      <Map />
      <Footer />
    </div>
  );
}
