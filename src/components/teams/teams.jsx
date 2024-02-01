import Link from 'next/link';

const Teams = () => {
  const buttonData = [
    {
      id: 1,
      name: 'Web Development Team',
      link: '/web-team',
    },
    {
      id: 2,
      name: 'Student Council Team',
      link: '/council',
    },
  ];
  return (
    <div className=' z-10 my-16 grid grid-cols-1 items-center justify-items-center gap-4'>
      {buttonData.map((data) => {
        return (
          <Link href={data.link} key={data.id}>
            <button className='btnnn mx-auto cursor-pointer rounded-2xl border border-white bg-black p-4 px-6 py-2 text-xl font-bold text-white transition-transform duration-150 ease-in-out hover:border-transparent hover:bg-green-500 hover:text-black'>
              {data.name}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default Teams;
