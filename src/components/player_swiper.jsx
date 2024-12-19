
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../CSS/player_swiper.css'

import { Pagination, Navigation } from 'swiper/modules'
import { Link } from "react-router-dom";

function PlayerSwiper({ data, prev, next, type, slides, reset, group}) {
   return (
      <>
         <Swiper
            className='player-swiper'
            spaceBetween={50}
            grabCursor={true}
            loop={true}
            slidesPerView={slides}
            navigation={{
               prevEl: prev,
               nextEl: next,
               clickable: true,
            }}
            modules={[Navigation]}
         >
            {data.map((item, index) => <SwiperSlide className='player-slide'>
               <Link onClick={reset} className="player-slide__image" style={{ borderRadius: type !== 'albums' ? '50%' : '10px' }} to={`/${group}/${index}`}><img src={item.image} alt="" /></Link>
               {type === 'albums' && <div className="player-slide__name">{item.album}</div>}
            </SwiperSlide>)}
         </Swiper>
      </>
   );
}

export default PlayerSwiper;