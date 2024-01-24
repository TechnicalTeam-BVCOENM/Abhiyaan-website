import Image from 'next/image';
import { useEffect, useState } from 'react';
import { events } from './event_model';

const EventCard = ({ id, imageSrc, title, description }) => {
  return (
    <a href={`/event/${id}`}>
      <div className='rounded-lg bg-white p-4 shadow-md '>
        <Image
          src={imageSrc}
          alt={title}
          className=' mb-4 aspect-square w-full rounded-lg object-cover hover:opacity-70'
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
  const [events, setEvents] = useState([]);
  useEffect(() => {
    setEvents([
      {
        id: 1,
        imageSrc:
          'https://media.istockphoto.com/id/1297159365/photo/portrait-of-young-smiling-woman-face-partially-covered-with-flying-hair-in-windy-day-standing.jpg?s=612x612&w=0&k=20&c=I16c_ZzQHEeGoPUVrVP9pPusSzsmymvVKdQVgPuVdDo=',
        title: 'Fake Event 1',
        description: 'This is a fake event description 1',
      },
      {
        id: 2,
        imageSrc:
          'https://media.istockphoto.com/id/1297159365/photo/portrait-of-young-smiling-woman-face-partially-covered-with-flying-hair-in-windy-day-standing.jpg?s=612x612&w=0&k=20&c=I16c_ZzQHEeGoPUVrVP9pPusSzsmymvVKdQVgPuVdDo=',
        title: 'Fake Event 2',
        description: 'This is a fake event description 2',
      },
      {
        id: 3,
        imageSrc:
          'https://media.istockphoto.com/id/1297159365/photo/portrait-of-young-smiling-woman-face-partially-covered-with-flying-hair-in-windy-day-standing.jpg?s=612x612&w=0&k=20&c=I16c_ZzQHEeGoPUVrVP9pPusSzsmymvVKdQVgPuVdDo=',
        title: 'Fake Event 3',
        description: 'This is a fake event description 3',
      },
      {
        id: 4,
        imageSrc:
          'https://media.istockphoto.com/id/1297159365/photo/portrait-of-young-smiling-woman-face-partially-covered-with-flying-hair-in-windy-day-standing.jpg?s=612x612&w=0&k=20&c=I16c_ZzQHEeGoPUVrVP9pPusSzsmymvVKdQVgPuVdDo=',
        title: 'Fake Event 4',
        description: 'This is a fake event description ',
      },
    ]);
  }, []);

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
