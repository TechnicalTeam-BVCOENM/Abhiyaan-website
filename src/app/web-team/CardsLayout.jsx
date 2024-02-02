import React from 'react';
import './Team.css';
import UCard from './Cards';

function CardsLayout() {
  return (
    <>
      <div className='firstCard'></div>
      <UCard
        ids='zero'
        img='https://res.cloudinary.com/dugvumj4l/image/upload/t_santy/v1706743431/web/ylyrknnmhyc7x5pvsvxe.jpg'
        name='Sachin Rathod'
        position='(Lead)'
        insta='https://www.instagram.com/sachinrathod_125/'
        linked='https://www.linkedin.com/in/rs-rathodsachin/'
        github='https://github.com/125sachin'
        pf=''
      />
      <UCard
        ids='one'
        img='https://res.cloudinary.com/dugvumj4l/image/upload/c_pad,b_gen_fill,w_1080,h_1080,ar_1:1/v1706743845/web/pwxrucgzxmnuvmwi9uoj.jpg'
        name='Santosh Phadtare'
        position='(Vice Lead)'
        insta='https://www.instagram.com/_i_santoshp/'
        linked='https://www.linkedin.com/m/in/santosh-phadtare-20ef16/'
        github='https://github.com/psantosh16'
        pf=''
      />
      <UCard
        ids='two'
        img='https://res.cloudinary.com/dugvumj4l/image/upload/t_santy/v1706743801/web/ryotufhib3mfh6av7bsk.jpg'
        name='Omkar Date'
        position='(Member)'
        insta='https://instagram.com/_omkardate_?igshid=YmMyMTA2M2Y='
        linked='https://www.linkedin.com/in/omkar-date/'
        github='https://github.com/OmkarDate29'
        pf=''
      />

      <UCard
        ids='three'
        img='https://res.cloudinary.com/dugvumj4l/image/upload/c_pad,b_gen_fill,w_1280,h_1280,ar_1:1/v1706744294/web/uul5ajkbfedmn6ffhc0o.jpg'
        name='Rushikesh Somvanshi'
        position='(Member)'
        insta='https://www.instagram.com/rushi_6_7/'
        linked='https://www.linkedin.com/in/rushikesh-somvanshi-ras67/'
        github='https://github.com/rushi67'
        pf=''
      />
      <UCard
        ids='four'
        img='https://res.cloudinary.com/dugvumj4l/image/upload/t_santy/v1706743803/web/swx1v5zvlaxonuctsbp5.jpg'
        name='Sambhav Rana'
        position='(Member)'
        insta='https://www.instagram.com/sambhavnrana/'
        linked='https://www.linkedin.com/in/sambhavnrana/'
        github='https://github.com/sambhavrana27'
        pf=''
      />
      <UCard
        ids='five'
        img='https://res.cloudinary.com/dugvumj4l/image/upload/t_santy/v1706743803/web/zc2jwun0ljjdqc4cacmq.jpg'
        name='Keyur Chaudhari'
        position='(Member)'
        insta='https://www.instagram.com/keyur___04/'
        linked='https://www.linkedin.com/in/keyur-chaudhari-614a73224'
        github='https://github.com/KEYURCHAUDHARI536'
        pf=''
      />
      <UCard
        ids='six'
        img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706743416/web/pp47axtfrfv5owmy03ns.png'
        name='Rohit Being'
        position='(Member)'
        insta='https://instagram.com/_rohit_084_?igshid=ZDdkNTZiNTM='
        linked='https://www.linkedin.com/in/rohit-baing-87601a26b'
        github='https://github.com/rohitbaing08'
        pf=''
      />
    </>
  );
}

export default CardsLayout;
