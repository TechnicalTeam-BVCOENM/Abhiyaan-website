import Image from 'next/image';
import React from 'react';

function UCard(props) {
  return (
    <div className='profile' id={props.ids}>
      <div className='outerboxes'>
        <div className='middleboxes'></div>
        <div className='innerboxes'>
          <div id='instagramLink'>
            <a href={props.insta} target='blank'>
              <Image
                src='/web-assets/icons/instagram.png'
                alt='hello'
                className='links'
                width={200}
                height={200}
              />
            </a>
          </div>
          <div id='linkedinLink'>
            <a href={props.linked} target='blank'>
              <Image
                src='/web-assets/icons/linked_in.png'
                alt='hello'
                className='links'
                width={200}
                height={200}
              />
            </a>
          </div>
          <div>
            <a href={props.github} target='blank'>
              <Image
                id='githubLink'
                src='/web-assets/icons/github.png'
                alt='hello'
                className='links'
                width={200}
                height={200}
              />
            </a>
          </div>
          <Image
            src={props.img}
            alt={props.img}
            width={200}
            height={200}
            className='boxes'
          />
          <div className='name'>
            <p>{props.name}</p>
            <p>{props.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UCard;
