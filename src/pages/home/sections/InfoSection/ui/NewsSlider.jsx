import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

import { newsData } from "../lib/newsData";
import NewsCard from "./NewsCard";

const NewsSlider = () => {
  return (
    <div className="relative w-full px-[40px] py-[20px]">
      {/* Стрелка влево */}
      <div className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-full">
        <ChevronLeftIcon
          className="w-8 h-8"
        />
      </div>

      {/* Стрелка вправо */}
      <div className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-full">
        <ChevronRightIcon/>
      </div>

      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        spaceBetween={32}
        slidesPerView={2}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="w-full"
      >
        {newsData.map(({ id, title, text, img }) => (
          <SwiperSlide key={id}>
            <NewsCard title={title} text={text} img={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsSlider;
