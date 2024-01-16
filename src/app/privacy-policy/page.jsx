import Policy from '@/components/policy/policy';
import { contentData } from './content_model';
import appLogo from '../../../assets/images/app_logo.png';
import Image from 'next/image';

export default function PrivacyPolicy() {
  return (
    <div id='privacy-policies' className='lg:mx-52 lg:my-32 my-4 mx-4 md:mx-8 overflow-x-hidden '>
      <div className='flex md:items-end items-center md:justify-between flex-col-reverse md:flex-row '>
        <div>
          <h1 className='text-6xl font-semibold hover:opacity-80 font-oswald'>
            Privacy Policy for Abhiyaan App
          </h1>
          <p className='my-4 text-xl text-gray-200/80 font-quattrocento font-b'>
            Our code of conduct and your pledge <br /> to be an upstanding
            member of product.
          </p>
        </div>
        <Image
          src={appLogo}
          width={300}
          height={300}
          alt='privacy-policy-image'
          className='my-8 rounded-2xl hover:opacity-90'
        />
      </div>
      {contentData.map((data, index) => (
        <Policy key={index} title={data.title} content={data.content} link={data.link} />
      ))}
    </div>
  );
}
