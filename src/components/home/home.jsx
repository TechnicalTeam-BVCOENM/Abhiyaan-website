import Image from 'next/image';

export default function Home() {
  return (
    <div id='home'>
      <Image
        height={600}
        width={600}
        alt='landing page'
        className='h-screen w-screen object-cover'
        src={
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.hdnux.com%2Fphotos%2F45%2F31%2F21%2F9802824%2F12%2FrawImage.jpg'
        }
      />
      {/* <div className='absolute -bottom-10 -left-12 z-20 h-[85px] w-[120%] bg-[#181818] blur-lg'></div> */}
    </div>
  );
}
