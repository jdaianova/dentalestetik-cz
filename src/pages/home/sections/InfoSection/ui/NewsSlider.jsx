import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { newsData } from '../lib/newsData';

const NewsSlider = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <div className={`relative w-full
                      px-[0px] md:px-[24px] lg:px-[40px]
                      py-[20px]
                      `}>

      {!isMobile && (
        <>
          <div className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-full">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
          <div className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-full">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </>
      )}

      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation={!isMobile && {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        spaceBetween={16}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
        }}
        className="flex w-full swiper-wrapper-visible md:!overflow-hidden"
      >
        {newsData.map(({ id, component }) => (
          <SwiperSlide key={id}>
            {component}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsSlider;
