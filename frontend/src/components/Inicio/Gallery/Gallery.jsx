import { Swiper, SwiperSlide } from 'swiper/react';
import { TbArrowRight, TbArrowLeft } from 'react-icons/tb';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
export default function Carousel() {
  return (
    <div className="mx-auto max-w-7xl flex flex-col items-center gap-10 overflow-hidden">
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="w-full h-[500px] relative"
      >
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="https://i.blogs.es/f46982/bocchi-the-rock/1366_2000.jpeg"
            alt="Bocchi The Rock"
            className="object-cover w-full h-full rounded-xl"
          />
          <div className="absolute bottom-5 left-5 text-white bg-black bg-opacity-50 p-3 rounded-md">
            Bocchi The Rock
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center">
          <img
             src="https://i.blogs.es/f46982/bocchi-the-rock/1366_2000.jpeg"
            alt="Imagen 2"
            className="object-cover w-full h-full rounded-xl"
          />
          <div className="absolute bottom-5 left-5 text-white bg-black bg-opacity-50 p-3 rounded-md">
            Imagen 2: Ejemplo
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center">
          <img
             src="https://i.blogs.es/f46982/bocchi-the-rock/1366_2000.jpeg"
            alt="Imagen 3"
            className="object-cover w-full h-full rounded-xl"
          />
          <div className="absolute bottom-5 left-5 text-white bg-black bg-opacity-50 p-3 rounded-md">
            Imagen 3: Otro Ejemplo
          </div>
        </SwiperSlide>
        <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white cursor-pointer">
          <TbArrowRight size={30} />
        </div>
        <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white cursor-pointer">
          <TbArrowLeft size={30} />
        </div>
      </Swiper>
    </div>
  );
}
