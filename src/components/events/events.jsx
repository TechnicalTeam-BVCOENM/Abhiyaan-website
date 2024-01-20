"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';


const EventCard = ({ id, imageSrc, title, description }) => {
    return (
        <a href={`/event/${id}`}>
            <div className="bg-white rounded-lg shadow-md p-4">
                <Image src={imageSrc} alt={title} className=" aspect-square w-full object-cover mb-4 rounded-lg" width={400} height={400} />
                <h2 className="text-lg font-bold mb-2 text-black">{title}</h2>
                <p className="text-gray-500">{description}</p>
            </div>
        </a>
    );
};



const Events = () => {
    const [events, setEvents] = useState([]);


    // Add some fake data
    useEffect(() => {
        setEvents([
            {
                id: 4,
                imageSrc: 'https://media.istockphoto.com/id/1297159365/photo/portrait-of-young-smiling-woman-face-partially-covered-with-flying-hair-in-windy-day-standing.jpg?s=612x612&w=0&k=20&c=I16c_ZzQHEeGoPUVrVP9pPusSzsmymvVKdQVgPuVdDo=',
                title: 'Fake Event 4',
                description: 'This is a fake event description 4'
            },
            {
                id: 5,
                imageSrc: 'https://media.istockphoto.com/id/1297159365/photo/portrait-of-young-smiling-woman-face-partially-covered-with-flying-hair-in-windy-day-standing.jpg?s=612x612&w=0&k=20&c=I16c_ZzQHEeGoPUVrVP9pPusSzsmymvVKdQVgPuVdDo=',
                title: 'Fake Event 5',
                description: 'This is a fake event description 5'
            },
            {
                id: 6,
                imageSrc: 'https://media.istockphoto.com/id/1297159365/photo/portrait-of-young-smiling-woman-face-partially-covered-with-flying-hair-in-windy-day-standing.jpg?s=612x612&w=0&k=20&c=I16c_ZzQHEeGoPUVrVP9pPusSzsmymvVKdQVgPuVdDo=',
                title: 'Fake Event 6',
                description: 'This is a fake event description 5'
            },
            {
                id: 7,
                imageSrc: 'https://media.istockphoto.com/id/1297159365/photo/portrait-of-young-smiling-woman-face-partially-covered-with-flying-hair-in-windy-day-standing.jpg?s=612x612&w=0&k=20&c=I16c_ZzQHEeGoPUVrVP9pPusSzsmymvVKdQVgPuVdDo=',
                title: 'Fake Event 7',
                description: 'This is a fake event description 5'
            },
        ]);
    }, [events]);

    return (
        <div className='p-4'>
            <h1 className="text-2xl font-bold mb-4">Events Page</h1>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3' >
                {events.map(event => (
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
