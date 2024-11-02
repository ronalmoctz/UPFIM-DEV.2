import axios from 'axios';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import Card from './CardGallery';

const Gallery = () => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    try {
      const { data } = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=10&offset=64'
      );
      setPokemons(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-8 mt-8">
        SLIDER CON REACT Y SWIPER
      </h1>

      <div className="flex justify-center items-center container mx-auto h-[600px]">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          slidesPerView={2.5}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 25 },
            768: { slidesPerView: 1.5, spaceBetween: 25 },
            1024: { slidesPerView: 2.5, spaceBetween: 30 },
          }}
          className="swiper-container"
        >
          {pokemons?.map((pokemon) => (
            <SwiperSlide key={pokemon.url}>
              <Card url={pokemon.url} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Gallery;
