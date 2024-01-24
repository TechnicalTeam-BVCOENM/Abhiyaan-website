import Image from 'next/image';
import { events } from './event_model';

const EventCard = ({ id, imageSrc, title, description }) => {
  return (
    <a href={`/event/${id}`}>
      <div className='rounded-lg bg-white p-4 shadow-md '>
        <Image
          src={imageSrc}
          alt={title}
          className=' mb-4 aspect-square w-full rounded-lg object-cover hover:opacity-80'
          width={400}
          height={400}
        />
        <h2 className='mb-2 text-lg font-bold text-black'>{title}</h2>
        <p className='text-gray-500'>{description}</p>
      </div>
    </a>
  );
};

const Events = () => {
  return (
    <div className='p-24 md:p-12 lg:p-10'>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
        {events.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            imageSrc={event.imageSrc}
            title={event.title}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
