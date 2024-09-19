// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { TbArrowRight } from 'react-icons/tb';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';

import './gallery.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-10 overflow-hidden">
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={40}
        pagination={false}
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
        }}
        loop={true}
        className="mySwiper h-96 "
      >
        <SwiperSlide>
          {' '}
          <img src="https://i.blogs.es/f46982/bocchi-the-rock/1366_2000.jpeg"></img>{' '}
        </SwiperSlide>
        <SwiperSlide> </SwiperSlide>
        <SwiperSlide> </SwiperSlide>
        <SwiperSlide> </SwiperSlide>
        <SwiperSlide> </SwiperSlide>
        <SwiperSlide> </SwiperSlide>
        <div className="swiper-button-next">
          <TbArrowRight size={30} />
        </div>
      </Swiper>
    </div>
  );
}
