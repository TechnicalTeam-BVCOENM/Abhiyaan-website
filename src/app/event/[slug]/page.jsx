import { EventsData } from '@/utils/events-data';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const findEvent = (slug) => {
  return EventsData.find((event) => event.sku === slug);
};

export default function Page({ params }) {
  const event = findEvent(params.slug);

  if (!event) {
    notFound();
  }

  return (
    <div className='animate-fadeIn mx-auto max-w-7xl px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-10'>
      <h1 className='text-4xl font-black'>{event.name}</h1>
      <section className='font- pb-8 pt-4 text-xl'>
        {event.description && <p>{event.description}</p>}
      </section>
      <Image
        src={event.image}
        alt={event.name}
        height={512}
        width={512}
        quality={100}
        className='m-auto block h-full w-[75%] object-contain object-center md:w-[50%]'
      />
    </div>
  );
}
