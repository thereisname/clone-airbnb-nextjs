'use client';

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../styles/CardImageBox.css'; // 추가된 CSS 파일 import

export default function CardImageBox({ images, fit = 'cover' }) {
  useEffect(() => {
    const nextEl = document.querySelector('.swiper-button-next-custom');
    const prevEl = document.querySelector('.swiper-button-prev-custom');

    if (nextEl && prevEl) {
      nextEl.addEventListener('click', () => {
        document.querySelector('.swiper-container').swiper.slideNext();
      });

      prevEl.addEventListener('click', () => {
        document.querySelector('.swiper-container').swiper.slidePrev();
      });
    }

    return () => {
      if (nextEl && prevEl) {
        nextEl.removeEventListener('click', () => {
          document.querySelector('.swiper-container').swiper.slideNext();
        });

        prevEl.removeEventListener('click', () => {
          document.querySelector('.swiper-container').swiper.slidePrev();
        });
      }
    };
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        modules={[Pagination, Navigation]}
        className="swiper-container"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={src}
              loading="lazy"
              className={`w-full object-${fit}`}
              alt={`${index + 1}번 이미지 입니다`}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-button-next-custom swiper-button-custom"></div>
        <div className="swiper-button-prev-custom swiper-button-custom"></div>
      </Swiper>
    </div>
  );
}
