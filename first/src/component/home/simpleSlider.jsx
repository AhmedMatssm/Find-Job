import { FaRegSquare } from "react-icons/fa";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './simpleSlider.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}

        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='toutContent' >
          <div className='profileContent'>
            <div className='profileTitreImage'>
              <div className='profileTitre'>
                <h2>Ahmed Mouatasim</h2>
                <span>developpeur full stack</span>
              </div>
              <div className='profileImage'>
                <img src="/images/profilesTwo.jpg" alt="images" />
              </div>
            </div>
            <div className='profileTextBtnSquare'>
              <div className='profileTextBtn'>
                <div className='profileText'>
                  <p>L'autonomie. La capacité à travailler en équipe. Le sens de la relation client. Le sens des responsabilités La discipline Le sens de l'organisation La capacité à s'adapter.</p>
                </div>
                <div className='profileBtn'>
                  <button>Plus</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='toutContent'>
          <div className='profileContent'>
            <div className='profileTitreImage'>
              <div className='profileTitre'>
                <h2>RIDA</h2>
                <span>mecanique automobile</span>
              </div>
              <div className='profileImage'>
                <img src="/images/profilesOne.jpg" alt="images" />
              </div>
            </div>
            <div className='profileTextBtnSquare'>
              <div className='profileTextBtn'>
                <div className='profileText'>
                  <p>Le mécanicien ou la mécanicienne auto devient mécanicien ou mécanicienne de maintenance. Il ou effectue des réparations sur les véhicules et réalise l'entretien mécanique, électrique, pneumatique, fluide...</p>
                </div>
                <div className='profileBtn'>
                  <button>Plus</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='toutContent'>
          <div className='profileContent'>
            <div className='profileTitreImage'>
              <div className='profileTitre'>
                <h2>ANAS</h2>
                <span>Software Engineer </span>
              </div>
              <div className='profileImage'>
                <img src="/images/profilesTwo.jpg" alt="images" />
              </div>
            </div>
            <div className='profileTextBtnSquare'>
              <div className='profileTextBtn'>
                <div className='profileText'>
                  <p>Software Engineer is a professional who applies the principles of software engineering for designing, development, maintenance, testing, and evaluation of computer software whereas Software Developer </p>
                </div>
                <div className='profileBtn'>
                  <button>Plus</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='toutContent'>
          <div className='profileContent'>
            <div className='profileTitreImage'>
              <div className='profileTitre'>
                <h2>AMIN</h2>
                <span>cyber security</span>
              </div>
              <div className='profileImage'>
                <img src="/images/profilesThree.jpg" alt="images" />
              </div>
            </div>
            <div className='profileTextBtnSquare'>
              <div className='profileTextBtn'>
                <div className='profileText'>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit magni iusto eligendi vel fugiat perspiciatis magnam quia sed consequatur voluptates incidunt tempora possimus non, error debitis inventore voluptas cumque architecto?</p>
                </div>
                <div className='profileBtn'>
                  <button>Plus</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
