import Link from 'next/link';

export default function Page() {
  var email = 'technicalteam.bvcoenm@gmail.com';
  return (
    <Link
      href={`mailto:${email}`}
      className='page flex h-screen w-screen flex-col items-center justify-center gap-4 '
    >
      <h1 className='text-8xl'>Coming Soon</h1>
      <p>
        For more details contact at{' '}
        <span className='text-xl text-blue-500'>{email}</span>
      </p>
    </Link>
  );
}
