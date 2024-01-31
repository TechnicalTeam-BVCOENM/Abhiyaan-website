import Link from 'next/link';

const Teams = () => {
  return (
    <div className=' z-10 flex flex-col items-center justify-center gap-4 pt-16'>
      <Link href={`/web-team`}>
        <div className='btnnn cursor-pointer p-4 text-white'>
          Web Development Team
        </div>
      </Link>

      <Link href='/council'>
        <div className='btnnn cursor-pointer p-4 text-white ' id='ssbtn'>
          Student Council Team
        </div>
      </Link>
    </div>
  );
};

export default Teams;
