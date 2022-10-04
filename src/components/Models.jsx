import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ModelsCard from './ModelsCard';

const Models = () => {
  return (
    <div className='w-full bg-hero-gradient text-black justify-center'>
      <div className='max-w-[1240px] mx-auto px-4 py-12 md:flex justify-center'>
        <div>
          <h2 className='text-5xl text-center font-medium text-white'>Discover Your Ride</h2>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto py-12'>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={5}
      navigation
      breakpoints={{
        340: {
          width: 200,
          slidesPerView: 1,
        },

        768: {
          width: 768,
          slidesPerView: 4,
        },

        1040: {
          width: 1040,
          slidesPerView: 5,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

        <SwiperSlide><ModelsCard image='https://images.unsplash.com/photo-1580679568899-be51739ba2df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1590&q=80' make='Mercedes'/></SwiperSlide>
        <SwiperSlide><ModelsCard image='https://images.unsplash.com/photo-1570374910698-6db3d787e6fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80' make='Porsche'/></SwiperSlide>
        <SwiperSlide><ModelsCard image='https://images.unsplash.com/photo-1618486613447-553cd00864a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80' make='Aston Martin'/></SwiperSlide>
        <SwiperSlide><ModelsCard image='https://images.unsplash.com/photo-1563720223489-bb7691336194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' make='Range Rover'/></SwiperSlide>
        <SwiperSlide><ModelsCard image='https://images.unsplash.com/photo-1627285886624-5cd637dafb50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' make='Rolls Royce'/></SwiperSlide>
        <SwiperSlide><ModelsCard image='https://images.unsplash.com/photo-1541447270888-83e8494f9c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' make='Tesla'/></SwiperSlide>
        <SwiperSlide><ModelsCard image='https://images.unsplash.com/photo-1540066019607-e5f69323a8dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' make='Audi'/></SwiperSlide>
        <SwiperSlide><ModelsCard image='https://images.unsplash.com/photo-1568723331958-ce8c291349e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' make='Mercedes G-Wagon'/></SwiperSlide>

      </Swiper>
      </div>
    </div>
  )
}

export default Models