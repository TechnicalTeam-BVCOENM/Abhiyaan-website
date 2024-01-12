import Content from '@/components/privacy-policy/content';
import { contentData } from './content-model';
import appLogo from '../../../assets/images/app_logo.png';
import Image from 'next/image';

export default function PrivacyPolicy() {
  return (
    <div id='privacy-policies' className='mx-52 my-32'>
      <div className='flex items-end justify-between'>
        <div>
          <h1 className='text-6xl font-semibold hover:opacity-80'>
            Privacy Policy
          </h1>
          <p className='my-4 text-xl text-gray-200/60'>
            Our code of conduct and your pledge <br /> to be an upstanding
            member of product.
          </p>
        </div>
        <Image
          src={appLogo}
          width={300}
          height={300}
          className='my-8 rounded-2xl hover:opacity-90'
        />
      </div>
      {contentData.map((data, index) => (
        <Content key={index} title={data.title} content={data.content} />
      ))}
    </div>
  );
}
