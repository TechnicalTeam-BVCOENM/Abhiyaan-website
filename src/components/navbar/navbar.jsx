export default function Navbar() {
  return (
    <div
      id='navbar'
      className='fixed bottom-4 left-[50%] z-20 h-[60px] min-w-fit -translate-x-[50%] rounded-full bg-white/30 p-8 backdrop-blur-md'
    >
      <ul className='flex h-full flex-row items-center justify-around gap-8 font-bold text-stone-800'>
        <li>Home</li>
        <li>About</li>
        <li className='hidden md:block'>Sponsors</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
