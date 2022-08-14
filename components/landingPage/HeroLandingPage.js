import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
//IMPORT REACTSTRAP COMPONENTS
import { Button } from 'reactstrap';
//IMPORT COMPONENTS PAGE
import CarouselSection from '../landingPage/Carousel';
import OurGames from '../global/OurGames';
//IMPORT ICONS
import { BiUser, BiIdCard, BiBarChartAlt, BiFace, BiGitMerge, BiJoystick } from 'react-icons/bi'
//IMPORT LOGO IMAGES
import Man1 from '../../public/man3.jpg';
import Man2 from '../../public/man4.png';
import Man3 from '../../public/man5.jpg';
//IMPORT VIDEO
import BG from '../../public/BG.mp4';


function HeroLandingPage() {
  return (
    <>
      {/* 1st page */}
      <div className='container-fluid'>
        <div className='back-video'>
          <video className='resp-video' autoPlay muted source src={BG} loop />
        </div>
        <div className='row main-section'>
          <div className='col-lg-12'>
            <div className='title-text'>
              <h1>TEAM<span>ONE</span></h1>
              <p>Play various games from Team One Project and enjoy the fun. <br></br>Hurry up register your account and play the game</p>
            </div>
            <div className='button-main text-center'>
              <Link href='/register'><Button color='warning' outline className='button-reg'>REGISTER NOW</Button></Link>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd page */}
      <CarouselSection />
      <div className='container-fluid bg-light ptb2'>
        <div className='row px-5'>
          <div className='col-lg-4 col-md-6 col-sm-6 col-12 text-left'>
            <div className='text-card'>
              <div className='card card-styles'>
                <div className='card-body'>
                  <BiUser className='card-icon ms-3' />
                  <h5 className='card-title ms-3'>JOINED USER</h5>
                  <p className='ms-3 card-desc'> More than 1000 players join the game and play together</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-6 col-12 text-left'>
            <div className='text-card'>
              <div className='card card-styles'>
                <div className='card-body'>
                  <BiJoystick className='card-icon ms-3' />
                  <h5 className='card-title ms-3'>MANY GAME</h5>
                  <p className='ms-3 card-desc'> There are several choices of interesting games from all genres that can be played</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-6 col-12 text-left'>
            <div className='text-card'>
              <div className='card card-styles'>
                <div className='card-body'>
                  <BiBarChartAlt className='card-icon ms-3' />
                  <h5 className='card-title ms-3'>LEADERBOARD SYSTEM</h5>
                  <p className='ms-3 card-desc'> There is a leaderboard feature to compete with other players</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row px-5 pt-5'>
          <div className='col-lg-4 col-md-6 col-sm-6 col-12 text-left'>
            <div className='text-card'>
              <div className='card card-styles'>
                <div className='card-body'>
                  <BiFace className='card-icon ms-3' />
                  <h5 className='card-title ms-3'>24 HOURS SUPPORT</h5>
                  <p className='ms-3 card-desc'>We are all ready to help you 24 hours if you need help</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-6 col-12 text-left'>
            <div className='text-card'>
              <div className='card card-styles'>
                <div className='card-body'>
                  <BiGitMerge className='card-icon ms-3' />
                  <h5 className='card-title ms-3'>CONNECT SOCIAL MEDIA</h5>
                  <p className='ms-3 card-desc'> The game you play can connect with your social media and can share your game and point</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-6 col-12 text-left'>
            <div className='text-card'>
              <div className='card card-styles'>
                <div className='card-body'>
                  <BiIdCard className='card-icon ms-3' />
                  <h5 className='card-title ms-3'>SAFE PRIVACY</h5>
                  <p className='ms-3 card-desc'> Your privacy data will be safe with us so you can keep playing and have fun</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 3rd page */}
      <OurGames />
      {/* 4th page */}
      <div className='container-fluid py-5 bg-light'>
        <div className='row py-5 px-5 text-center'>
          <h5 className='fw-bold testi'>TESTIMONIALS</h5>
          <h2> What People Say</h2>
        </div>
        <div className='row px-5'>
          <div className='col-md-4'>
            <div className="card-testi">
              <Image src={Man1} className="card-img-top" alt="man" />
              <div className="card-body mt-3">
                <h4 className='name-testi'>BRODY</h4>
                <p className="card-text text-center">&quot;The games here are very fun, I play until I lose track of time&quot;</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card-testi">
              <Image src={Man3} className="card-img-top" alt="man" />
              <div className="card-body mt-3">
                <h4 className='name-testi'>JHONY</h4>
                <p className="card-text text-center">&quot;The game here is very unique, I usually play it with my child&quot;</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card-testi">
              <Image src={Man2} className="card-img-top" alt="man" />
              <div className="card-body mt-3">
                <h4 className='name-testi'>PABLO</h4>
                <p className="card-text text-center">&quot;The support here really helps me when I have problems and the game is very cool to play&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroLandingPage;