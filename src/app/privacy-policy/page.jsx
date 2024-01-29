import Policy from '@/components/policy/policy';
import { contentData } from './content_model';
import Image from 'next/image';

export default function PrivacyPolicy() {
  return (
    <div
      id='privacy-policies'
      className='mx-4 my-4 overflow-x-hidden md:mx-8 lg:mx-52 lg:my-32 '
    >
      <div className='flex  flex-col-reverse items-start md:flex-row md:items-center md:justify-between '>
        <div>
          <h1 className='font-oswald text-6xl font-semibold hover:opacity-80'>
            Privacy Policy for Abhiyaan App
          </h1>
          <p className='font-b my-4 font-quattrocento text-xl text-gray-200/80'>
            Our code of conduct and your pledge <br /> to be an upstanding
            member of product.
          </p>
        </div>
        <Image
          src='/images/app_logo.png'
          width={300}
          height={300}
          alt='privacy-policy-image'
          className='my-8 rounded-2xl hover:opacity-90'
        />
      </div>
      {contentData.map((data, index) => (
        <Policy
          key={index}
          title={data.title}
          content={data.content}
          link={data.link}
        />
      ))}
    </div>
  );
}
