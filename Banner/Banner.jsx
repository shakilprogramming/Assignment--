import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
  return (
    <div className="my-8 px-4 md:px-8 lg:px-12">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={20} 
        className="mySwiper"
      >
        <SwiperSlide>
          <img 
            src="/picture.jpg" 
            alt="Image 1" 
            className="w-full max-w-[800px] rounded-2xl mx-auto h-auto object-cover" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="/picture2.jpg" 
            alt="Image 2" 
            className="w-full max-w-[800px] rounded-2xl mx-auto h-auto object-cover" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="/picture5.jpg" 
            alt="Image 3" 
            className="w-full max-w-[800px] rounded-2xl mx-auto h-auto object-cover" 
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
