'use client';

import './Studentcouncil.css';
import { useState } from 'react';
import React from 'react';
import Profilecard from './profilecard';

export default function Studentcouncil() {
  const [GS, setGS] = useState(true);
  const [CS, setCS] = useState(false);
  const [SS, setSS] = useState(false);
  // const [DP, setDP] = useState(false);
  const [CH, setCH] = useState(false);
  const [Rep, setRep] = useState(false);

  const toggleGS = () => {
    if (!GS) {
      setGS(true);
      setCS(false);
      setRep(false);
      setCH(false);
      // setDP(false);
      setSS(false);
    }
  };

  const toggleCS = () => {
    if (!CS) {
      setCS(true);
      setGS(false);
      setRep(false);
      setCH(false);
      // setDP(false);
      setSS(false);
    }
  };
  const toggleSS = () => {
    if (!SS) {
      setSS(true);
      setGS(false);
      setRep(false);
      setCH(false);
      // setDP(false);
      setCS(false);
    }
  };
  const toggleRep = () => {
    if (!Rep) {
      setRep(true);
      setGS(false);
      setCS(false);
      setCH(false);
      // setDP(false);
      setSS(false);
    }
  };
  const toggleCH = () => {
    if (!CH) {
      setCH(true);
      setRep(false);
      setGS(false);
      setCS(false);
      // setDP(false);
      setSS(false);
    }
  };
  // const toggleDP = () => {
  //   if (!DP) {
  //     setDP(true);
  //     setRep(false);
  //     setGS(false);
  //     setCS(false);
  //     setCH(false);
  //     setSS(false);
  //   }
  // };

  return (
    <div id='Teams'>
      <h1 className='TeamsHeader'>Student Council 2024</h1>
      <p className='desc'>Meet the students who make the event possible</p>
      <div id='TeamTabs'>
        <div id='teamsbtn'>
          <button
            className='tablink'
            style={{
              color: GS ? '#000000' : '#ffffff',
              backgroundColor: GS ? '#ffffff' : '',
            }}
            id='defaultOpen'
            onClick={toggleGS}
          >
            GS Team
          </button>
          <button
            className='tablink'
            style={{
              color: CS ? '#000000' : '#ffffff',
              backgroundColor: CS ? '#ffffff' : '',
            }}
            onClick={toggleCS}
          >
            CS Team
          </button>
          <button
            className='tablink'
            style={{
              color: SS ? '#000000' : '#ffffff',
              backgroundColor: SS ? '#ffffff' : '',
            }}
            onClick={toggleSS}
          >
            SS Team
          </button>
          {/* <button
            className='tablink'
            style={{
              color: DP ? '#000000' : '#ffffff',
              backgroundColor: DP ? '#ffffff' : '',
            }}
            onClick={toggleDP}
          >
            Departmental President
          </button> */}
          <button
            className='tablink'
            style={{
              color: CH ? '#000000' : '#ffffff',
              backgroundColor: CH ? '#ffffff' : '',
            }}
            onClick={toggleCH}
          >
            Committee Head
          </button>
          <button
            className='tablink'
            style={{
              color: Rep ? '#000000' : '#ffffff',
              backgroundColor: Rep ? '#ffffff' : '',
            }}
            onClick={toggleRep}
          >
            Representatives
          </button>
        </div>
      </div>

      <div className='tabcontent' style={{ display: GS ? 'block' : 'none' }}>
        <div className='TeamMember1'>
          <Profilecard
            img='https://res.cloudinary.com/dugvumj4l/image/upload/t_IMG/v1706721962/sc/gwln0nk3iss5wfbitecp.jpg'            
            name='Varad Mhamunkar'
            insta='https://www.instagram.com/varadmhamunkar/'
            position='General Secretary'
            linked='https://www.linkedin.com/in/varad-mhamunkar/'
          />
        </div>
        <div className='subTeam'>
          <div className='subTeamMember1'>
            <Profilecard
              img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706737661/sc/qfzzhey7ryq9saskdfdb.jpg'
              name='Hemant Sakunde'
              insta='https://www.instagram.com/hemant_sakunde/'
              position='Jt. General Secretary'
              linked='https://www.linkedin.com/in/hemantsakunde/'
            />
          </div>
          <div className='subTeamMember1'>
            <Profilecard
              img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706737657/sc/xzhha3e16t2zaokb1zxe.png'
              name='Nikita Dhole'
              insta='https://www.instagram.com/nikitaadhole/'
              position='Jt. General Secretary'
              linked='#'
            />
          </div>
          <div className='subTeamMember1'>
            <Profilecard
              img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706737660/sc/vnavgzqx8ng52aprwhjo.jpg'
              name='Ruchita Rakshe'
              insta='https://www.instagram.com/ruchitaa_14/'
              position='Jt. General Secretary'
              linked='https://www.linkedin.com/in/ruchita-rakshe-0030b6286'
            />
          </div>
          <div className='subTeamMember1'>
            <Profilecard
              img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706737661/sc/auotwnbcdcbvnd2savst.jpg'
              name='N Sreyas'
              insta='https://www.instagram.com/just.srey/'
              position='Jt. General Secretary'
              linked='#'
            />
          </div>
        </div>
      </div>
      <div className='tabcontent' style={{ display: CS ? 'block' : 'none' }}>
        <div className='TeamMember1'>
          <Profilecard
            img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706737664/sc/yiwgi7b0x5ubpojnqno8.jpg'
            name='Chaitali Padalkar'
            insta='#'
            position='Cultural Secretary'
            linked='linkedin.com/in/chaitali-padalkar-61b589230'
          />
        </div>
        <div className='subTeam'>
          <div className='subTeamMember1'>
            <Profilecard
              img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706737661/sc/fc3a2e8ppziaveq5xge6.jpg'
              name='Prachi Godse'
              insta='https://www.instagram.com/prachi_g_26/'
              position='Jt. Cultural Secretary'
              linked='https://www.linkedin.com/in/prachi-godse-186354261'
            />
          </div>
          <div className='subTeamMember1'>
            <Profilecard
              img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706737664/sc/jvv2fsarandoxybwfiym.jpg'
              name='Ammar Desai'
              insta='https://www.instagram.com/_ammar_desai_/'
              position='Jt. Cultural Secretary'
              linked='https://www.linkedin.com/in/ammar-desai-bb9939251'
            />
          </div>
          <div className='subTeamMember1'>
            <Profilecard 
              img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706737662/sc/uhn10glb54sokogusc9p.png'
              name='Aditi Tambat'
              insta='https://www.instagram.com/ft.adiitiii/'
              position='Jt. Cultural Secretary'
              linked='https://www.linkedin.com/in/aditi-tambat-839530288'
            />
          </div>
          <div className='subTeamMember1'>
            <Profilecard
              img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706737661/sc/n3a7piaafw7niscj6o8m.png'
              name='Mukund Ukirde'
              insta='https://www.instagram.com/mukunddd__04/'
              position='Jt. Cultural Secretary'
              linked='https://www.linkedin.com/in/mukund-ukirde-340997293'
            />
          </div>
          <div className='subTeamMember1'>
            <Profilecard
              img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706737663/sc/ywfzrwxg4hph6et8zvax.jpg'
              name='Hariprasad Talegaonkar'
              insta='https://www.instagram.com/insanehp_/'
              position='Jt. Cultural Secretary'
              linked='https://www.linkedin.com/in/hariprasad-talegaonkar-71a431257'
            />
          </div>
        </div>
      </div>
      <div className='tabcontent' style={{ display: SS ? 'block' : 'none' }}>
        <div className='TeamMember1'>
          <Profilecard
            img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706737660/sc/cj78vj2afrvbqjyzbz2t.jpg'
            name='Niraj Mahadik'
            insta='https://www.instagram.com/_niraj_4477/'
            position='Sports Secretary'
            linked='https://www.linkedin.com/in/niraj-mahadik-952802242'
          />
        </div>
        <div className='subTeam'>
          <div className='subTeamMember1'>
            <Profilecard
              img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706738449/sc/vvgbm8z9zygtld3dydy9.jpg'
              name='Arnav Patil'
              insta='https://www.instagram.com/_patil_arnav_/'
              position='Jt. Sports Secretary'
              linked='https://www.linkedin.com/in/arnav-patil-53b688229'
            />
          </div>
          <div className='subTeamMember1'>
            <Profilecard
              img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706738449/sc/glorgvu2oi760zexmjoi.jpg'
              name='Hrushikesh Unde'
              insta='https://www.instagram.com/hrushi_unde_777/'
              position='Jt. Sports Secretary'
              linked='https://www.linkedin.com/in/hrushikesh-unde-62941922b'
            />
          </div>
          <div className='subTeamMember1'>
            <Profilecard
              img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706738446/sc/rvgbirvi7xgxdgmbasvv.png'
              name='Saloni Kanekar'
              insta='https://www.instagram.com/sugarnspice_03/'
              position='Jt. Sports Secretary'
              linked='https://www.linkedin.com/in/saloni-kanekar-1a2413282'
            />
          </div>
          <div className='subTeamMember1'>
            <Profilecard
              img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706738447/sc/ksrij8dleelffbzkmlza.jpg'
              name='Sanika Mhatre'
              insta='https://www.instagram.com/saniiii_23/'
              position='Jt. Sports Secretary'
              linked='https://www.linkedin.com/in/sanika-mhatre-b07412279'
            />
          </div>
        </div>
      </div>
      {/* <div className='tabcontent' style={{ display: DP ? 'block' : 'none' }}>
        <div className='TeamMember1'>
          <Profilecard
            img='/ss-assets/ahmed.jpg'
            name='Ahmed Ali'
            insta='https://www.instagram.com/beingahmedali_26/'
            position='CESA President'
            linked='#'
          />
        </div>
        <div className='subTeam'>
          <div className='subTeamMember1'>
            <Profilecard
              img='/ss-assets/gaurav.jpg'
              name='Gaurav More'
              insta='https://www.instagram.com/__gauravmore/'
              position='ACES President'
              linked='#'
            />
          </div>
          <div className='subTeamMember1'>
            <Profilecard
              img='/ss-assets/siddham.jpg'
              name='Siddham Jain'
              insta='https://www.instagram.com/_siddham_/'
              position='IETE President'
              linked='#'
            />
          </div>
          <div className='subTeamMember1'>
            <Profilecard
              img='/ss-assets/ashwini.jpg'
              name='Ashwini Kadam'
              insta='https://www.instagram.com/ashwini_k2101/'
              position='SAIE President'
              linked='#'
            />
          </div>
          <div className='subTeamMember1'>
            <Profilecard
              img='/web-assets/img/tp.jpg'
              name='Chinmayee Sawant'
              insta='https://www.instagram.com//'
              position='ITSA President'
              linked='#'
            />
          </div>
          <div className='subTeamMember1'>
            <Profilecard
              img='/ss-assets/adityaraj.jpg'
              name='Adityaraj Patil'
              insta='https://www.instagram.com/adityaraj.1111/'
              position='MESA President'
              linked='#'
            />
          </div>
        </div>
      </div> */}
      <div className='tabcontent' style={{ display: CH ? 'block' : 'none' }}>
        <div className='TeamMember1'>
          <Profilecard
            img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706741775/sc/wwtsnjawzsxcjqysje0e.png'
            name='Sachin Rathod'
            insta='https://www.instagram.com/sachinrathod_125/'
            position='Technical Team Head'
            linked='https://www.linkedin.com/in/rs-rathodsachin/'
          />
        </div>
        <div className='subTeam'>
          <div className='subTeamMember1'>
            <Profilecard
              img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706738939/sc/enojgncvrocunjpji7dj.jpg'
              name='Manas Kalamkar'
              insta='https://www.instagram.com/manask_2000/'
              position='Graphic Designing Team Head'
              linked='https://www.linkedin.com/in/manaskalamkar/'
            />
          </div>
          <div className='subTeamMember1'>
            <Profilecard
              img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706737661/sc/qfzzhey7ryq9saskdfdb.jpg'
              name='Hemant Sakunde'
              insta='https://www.instagram.com/hemant_sakunde/'
              position='Sponsership Team Head'
              linked='https://www.linkedin.com/in/hemantsakunde'
            />
          </div>
          <div className='subTeamMember1'>
            <Profilecard
              img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706738937/sc/pzihl28dvnuabwptbjpe.jpg'
              name='Shreeyash Thote'
              insta='https://www.instagram.com/__shreeyash__/'
              position='Public Relations Team Head'
              linked='https://www.linkedin.com/in/shreeyash-thote-13b669247'
            />
          </div>
          <div className='subTeamMember1'>
            <Profilecard
              img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706738935/sc/xkxqsu4nxqrajx3po6wm.jpg'
              name='Harsh Parte'
              insta='https://www.instagram.com/harshhparte/'
              position='Creative Team Head'
              linked='https://www.linkedin.com/in/harsh-parte'
            />
          </div>
          <div className='subTeamMember1'>
            <Profilecard
              img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706738938/sc/cru8gf20l9o6vwk4oqbf.jpg'
              name='Shubham Sharma'
              insta='https://www.instagram.com/shazam_shub/'
              position='Anchoring Team Head'
              linked='https://www.linkedin.com/in/shubham-sharma-800949201'
            />
          </div>
          <div className='subTeamMember1'>
            <Profilecard
              img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706738934/sc/ysydvwt4oy7egmwm4sfg.jpg'
              name='Rohan Rajesh'
              insta='https://www.instagram.com/rohandsome2022/'
              position='Anchoring Team Head'
              linked='#'
            />
          </div>
          <div className='subTeamMember1'>
            <Profilecard
              img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706738933/sc/c4phu0vin3aselhjqnmg.jpg'
              name='Rohit Mahadik'
              insta='https://www.instagram.com/rohit__mahadik/'
              position='Discipline Team Head'
              linked='#'
            />
          </div>
          <div className='subTeamMember1'>
            <Profilecard
              img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706738932/sc/clee9wwrqkcnn1wictyw.jpg'
              name='Himanshu Koli'
              insta='https://www.instagram.com/himanshukoli_14/'
              position='Discipline Team Head'
              linked='#'
            />
          </div>
        </div>
      </div>

      <div className='tabcontent' style={{ display: Rep ? 'block' : 'none' }}>
        <div className='TeamMember1'>
          <Profilecard
            img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706737663/sc/fx15wijyzft2e666hhyy.jpg'
            name='Gaurav Narayankar'
            position='NCC Representative'
            insta='https://www.instagram.com/gauravvv._.005/'
            linked='https://www.linkedin.com/in/gaurav-narayankar-491694246'
          />
        </div>

        <div className='subTeam'>
          <div className='subTeamMember1'>
            <Profilecard
              img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706738657/sc/jdcojsfkafmoag60lnqb.jpg'
              name='Poonam Shendkar'
              position='Ladies Representative (Open)'
              insta='https://www.instagram.com/_jidnyasaaa/'
              linked='https://www.linkedin.com/in/poonam-shendkar-2a1023212'
            />
          </div>
          <div className='subTeamMember1'>
            <Profilecard
              img='https://res.cloudinary.com/dugvumj4l/image/upload/c_fill,h_1080,g_auto/v1706738657/sc/boi7fvmezrqoltvn2m1x.jpg'
              name='Ayush Shirdhankar'
              position='NSS Representative'
              insta='https://www.instagram.com/21_ayush_/'
              linked='https://www.linkedin.com/in/ayush-shirdhankar-a2365027b'
            />
          </div>
          <div className='subTeamMember1'>
            <Profilecard
              img='https://res.cloudinary.com/dugvumj4l/image/upload/v1706738655/sc/zdaqhnalfbezsqfoxoxm.jpg'
              name='Chinmayee Gamre'
              position='Ladies Representative (Reserved)'
              insta='https://www.instagram.com/chinmayee_gamre/'
              linked='https://www.linkedin.com/in/chinmayee-gamre-8572b5241'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
