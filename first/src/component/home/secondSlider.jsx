import { FaLocationDot , FaEarthAmericas  } from "react-icons/fa6";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './secondSlider.css';

// import required modules
import { EffectCreative, Autoplay , Navigation , Pagination} from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'creative'}
        creativeEffect={{
            prev: {
              shadow: false,
              translate: [0, 0, -400],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          centeredSlides={true}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        loop={true}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[Navigation, EffectCreative, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='entrContent'>
          <div className='entrOne'>
            <div className='entrBackground'>
              <img src="/images/images-alsa.png" alt="alsa" />
            </div>
            <div className='entrImage'>
              <img src="/images/alsa.png" alt="alsa" />
              <h3>ALSA</h3>
            </div>
            <div className='iconText'>
              <div className='iconTextOne'>
              <span><FaLocationDot/></span>
                <p>Adress de entreprise</p>
              </div>
              <div className='iconTextTwo'>
                <span><FaEarthAmericas/></span>
                <p>Web site de entreprise</p>
              </div>
              <div className='iconTextThree'>
                <span><FaEarthAmericas/></span>
                <p>Web site de entreprise</p>
              </div>
            </div>
            <div className='offreBtn'>
              <span>0 Offre</span>
              <button>suivre</button>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='entrContent'>
          <div className='entrOne'>
            <div className='entrBackground'>
              <img src="/images/backOcp.jpg" alt="ocp" />
            </div>
            <div className='entrImage'>
              <img src="/images/ocpLogo.jpg" alt="ocp" />
              <h3>OCP</h3>
            </div>
            <div className='iconText'>
              <div className='iconTextOne'>
              <span><FaLocationDot/></span>
                <p>Adress de entreprise</p>
              </div>
              <div className='iconTextTwo'>
                <span><FaEarthAmericas/></span>
                <p>Web site de entreprise</p>
              </div>
              <div className='iconTextThree'>
                <span><FaEarthAmericas/></span>
                <p>Web site de entreprise</p>
              </div>
            </div>
            <div className='offreBtn'>
              <span>0 Offre</span>
              <button>suivre</button>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='entrContent'>

          <div className='entrOne'>
            <div className='entrBackground'>
              <img src="/images/backOcp.jpg" alt="ocp" />
            </div>
            <div className='entrImage'>
              <img src="/images/ocpLogo.jpg" alt="ocp" />
              <h3>OCP</h3>
            </div>
            <div className='iconText'>
              <div className='iconTextOne'>
              <span><FaLocationDot/></span>
                <p>Adress de entreprise</p>
              </div>
              <div className='iconTextTwo'>
                <span><FaEarthAmericas/></span>
                <p>Web site de entreprise</p>
              </div>
              <div className='iconTextThree'>
                <span><FaEarthAmericas/></span>
                <p>Web site de entreprise</p>
              </div>
            </div>
            <div className='offreBtn'>
              <span>0 Offre</span>
              <button>suivre</button>
            </div>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
