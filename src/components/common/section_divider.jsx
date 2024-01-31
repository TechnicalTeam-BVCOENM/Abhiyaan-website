export default function SectionDivider({ title }) {
  const id = title.toLowerCase().replace(' ', '-');

  return (
    <h1
      id={id}
      className='flex items-center justify-center pb-12 pt-24 font-sans text-4xl font-bold leading-relaxed text-purple-500 hover:text-white lg:text-6xl'
    >
      {title}
    </h1>
  );
}
