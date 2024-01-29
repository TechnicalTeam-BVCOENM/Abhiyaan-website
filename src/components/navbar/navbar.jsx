import Link from 'next/link';

export default function Navbar() {
  return (
    <div
      id='navbar'
      className='fixed bottom-4 left-[50%] z-20 h-[60px] min-w-fit -translate-x-[50%] rounded-full bg-white/20 p-8 backdrop-blur-md'
    >
      <ul className='flex h-full flex-row items-center justify-around gap-8 font-bold text-stone-50'>
        <Link href='#home'>Home</Link>
        <Link href='#about'>About</Link>
        <Link href='#sponsors' className='hidden md:block'>
          Sponsors
        </Link>
        <Link href='#contact'>Contact</Link>
      </ul>
    </div>
  );
}
