
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

import '../CSS/slider.css'

import { main } from '../data/main__data';
import { use } from 'framer-motion/client';

function Slider() {
   const data = main.years;
   const swiper = useRef();
   const [current, setCurrent] = useState(null);
   useEffect(() => {
      setCurrent(swiper.current.querySelector('.swiper-slide-visible'));
      console.log(current);
   }, []);

   return (
      <>
         <div className="slider">
            <Swiper
               ref={swiper}
               className='swiper_container'
               effect="coverflow"
               spaceBetween={50}
               grabCursor={true}
               centeredSlide={true}
               loop={true}
               slidesPerView={3}
               navigation={{
                  prevEl: '.swiper__prev',
                  nextEl: '.swiper__next',
                  clickable: true,
               }}
               modules={[EffectCoverflow, Pagination, Navigation]}
               coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
               }}
            >
               {data.map(item => <SwiperSlide>
                  <div className="slider__image"><img src={item.image} alt="" /></div>
                  <div className="slider__song">{item.name}</div>
                  <div className="slider__group">{item.group}</div>
                  <div className="slider__year">{item.year}</div>
               </SwiperSlide>)}

               <div className="swiper__controlers">
                  <div className="swiper__prev" onDoubleClick={(e) => e.preventDefault()}><FontAwesomeIcon icon={faBackward} /></div>
                  <div className="swiper__text">One year one song</div>
                  <div className="swiper__next" onDoubleClick={(e) => e.preventDefault()}><FontAwesomeIcon icon={faForward} /></div>
               </div>
            </Swiper>

         </div>
      </>
   );
}

export default Slider;