import Image from 'next/image';
import Link from 'next/link';

export default function AppPromotion() {
  return (
    <div
      id='app-promotion'
      className='bg-fill pointer-events-auto mx-auto my-48 h-full w-screen select-none bg-black bg-[url("https://www.letsjive.io/images/marketing/home-shapes-full.svg")]  bg-cover bg-no-repeat py-10 lg:px-32'
    >
      <h1
        id='promotion-title'
        className=' pt-20 text-center text-5xl font-bold md:text-7xl lg:text-8xl'
      >
        College in one app
      </h1>
      <p className='my-4 px-16 text-center text-sm text-gray-200 md:text-lg lg:my-6 lg:text-2xl xl:px-32'>
        Discover convenience with our college app, your go-to source for instant
        updates, upcoming events, and vibrant community engagement. Seamlessly
        navigate campus life and never miss a beat, whether it&apos;s crucial
        announcements or exciting social gatherings. Simplify your college
        experience—all in one place!
      </p>

      <button className='mx-auto block rounded-xl bg-white px-6 py-2 text-center text-black hover:bg-gray-100 md:text-2xl lg:px-8 lg:py-4 lg:text-4xl'>
        <Link href='/coming-soon' target='_blank'>
          Get it now
        </Link>
      </button>
      {/* <div id='app_qr' className='my-10'>
        <Image
          src='/images/promotion/app_qr.png'
          width={200}
          height={200}
          quality={100}
          priority={true}
          alt='app_qr'
          className='pointer-events-none mx-auto'
        />
      </div> */}
      <div id='features-grid'>
        <div className='grid grid-cols-2 grid-rows-2 gap-4 px-4 py-10 lg:grid-cols-3'>
          <div className=' col-span-2  flex h-60 w-full  items-center justify-between  gap-10 overflow-hidden rounded-xl bg-yellow-400  text-center  text-black md:h-80 lg:h-96 lg:gap-16'>
            <div className='updates-text z-20 px-4 text-left lg:pr-32'>
              <h1 className='text-3xl font-bold md:text-5xl lg:text-6xl'>
                Get the latest updates
              </h1>
              <p className=' py-2 pr-4 text-sm  md:text-lg lg:text-xl'>
                Stay informed with instant updates on classes, exams, and campus
                news. Our college app keeps you in the loop, ensuring you never
                miss crucial information.
              </p>
            </div>
            <div
              id='updates-image'
              className='z-10 mr-[-6em] md:mr-[-8em] md:pl-8'
            >
              <Image
                src='/images/promotion/updates.svg'
                width={800}
                height={800}
                quality={100}
                alt='updates'
                className=' pointer-events-none scale-[2]'
              />
            </div>
          </div>
          <div className=' col-span-1 flex h-60 w-full flex-col  justify-between overflow-hidden rounded-xl bg-purple-400 text-center text-black md:h-80 lg:h-96'>
            <div
              id='abhiyaan-text'
              className='px-4 pt-2 text-left text-sm  text-white lg:px-6'
            >
              <h1 className='text-lg font-extrabold md:text-4xl lg:text-6xl'>
                Abhiyaan
              </h1>
              <p className='text-[12px] sm:text-sm md:text-lg lg:text-xl'>
                One-stop solution for all your college needs. From finding the
                right clubs to getting the latest updates, app has it all!
              </p>
            </div>
            <div id='abhiyaan-image'>
              <Image
                src='/images/app_logo.png'
                width={400}
                height={400}
                quality={100}
                alt='abhiyaan'
                className='pointer-events-none mb-[-10px] h-28 w-full rounded-t-2xl object-cover md:mb-[-4px] md:h-40 lg:h-52'
              />
            </div>
          </div>
          <div className=' col-span-1 h-60 w-full overflow-hidden  rounded-xl bg-blue-400 text-center text-black md:h-80 md:px-2 lg:h-96'>
            <div
              id='sticker-images'
              className='md:mt-8 md:scale-150 lg:mt-12 lg:scale-[1.75]'
            >
              <Image
                src='/images/promotion/stickers.png'
                width={130}
                height={130}
                quality={100}
                alt='sticker'
                className='pointer-events-none mx-auto object-cover'
              />
            </div>
            <div
              id='sticker-text'
              className=' mt-[-10px] text-[12px] text-white sm:text-sm md:pt-4 md:text-lg lg:pt-16 lg:text-2xl'
            >
              <p>
                Connect with your college community through exciting events and
                social gatherings. Our app fosters a vibrant social hub,
                bringing students together for memorable experiences.
              </p>
            </div>
          </div>
          <div className=' col-span-2 flex h-60 w-full items-center  justify-between overflow-hidden rounded-xl bg-orange-500 p-6 py-2 text-right text-white md:h-80 lg:h-96'>
            <div
              id='event-image'
              className='ml-[-8em] md:ml-[-4em] lg:ml-[-2em]'
            >
              <Image
                src='/images/promotion/event_card.svg'
                width={200}
                height={200}
                quality={100}
                alt='event'
                className='pointer-events-none z-10 -rotate-45  scale-125 md:scale-[1.8] lg:scale-[2.5]'
              />
            </div>
            <h5 className='z-20 pl-2 text-xl font-semibold md:text-3xl lg:text-4xl'>
              Where diversity is celebrated, <br /> Voices are amplified, <br />
              Impact is a collective effort, <br /> & the future is <br />
              in your hands.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
