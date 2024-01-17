'use client';
import Sponsors from '@/components/sponsors/sponsors';
import Map from '@/components/map/map';
import Footer from '@/components/footer/footer';
import Home from '@/components/home/home';
// import Promotion from '@/components/promotion/promotion';
import SectionDivider from '@/components/common/section_divider';
import Navbar from '@/components/navbar/navbar';
// import About from '@/components/about/about';

export default function Page() {
  return (
    <div className=''>
      <Home />
      {/* <About /> */}
      {/* <h1 className='h-screen'>Test</h1> */}
      {/* <Promotion /> */}
      <SectionDivider title='Sponsors' />
      <Sponsors />
      <SectionDivider title='Contact Us' />
      <Map />
      <Footer />
      <Navbar />
    </div>
  );
}
