'use client';

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import { EventsData } from '@/utils/events-data';

export default function Events() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <div className='overflow-hidden' ref={emblaRef}>
      <div className='flex h-full touch-pan-y md:h-[80vh]'>
        {EventsData.map((event) => (
          <div
            className='min-w-0 flex-shrink-0 flex-grow-0 basis-full'
            key={event.sku}
          >
            <Link href={`/event/${event.sku}`}>
              <Image
                src={event.image}
                alt={event.name}
                height={512}
                width={512}
                quality={100}
                className='m-auto block h-full w-[95%] object-contain object-center md:w-[70%]'
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
