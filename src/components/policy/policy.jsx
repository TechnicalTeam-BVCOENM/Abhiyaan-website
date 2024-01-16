export default function Content({ content, title,link }) {
  return (
    <div id={`privacy-content-${title}`} className='my-8'>
      <h1 className='mb-1 text-xl text-blue-500'>{title}</h1>
      <p className='mt-4 whitespace-pre-line text-lg text-white/80'>
        {
          link ? <a href={link}>{content}</a> : content
        }
      </p>
    </div>
  );
}
