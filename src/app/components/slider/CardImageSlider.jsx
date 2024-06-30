'use client'

import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../../styles/CardImageSlider.css' // 추가된 CSS 파일 import

export default function CardImageSlider({ images, fit = 'cover' }) {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        modules={[Pagination, Navigation]}
        className='swiper-container'
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src.accommodationImage}
              width={700}
              height={475}
              alt={`${index + 1}번 이미지 입니다`}
            />
          </SwiperSlide>
        ))}

        <div className='swiper-button-next-custom swiper-button-custom'></div>
        <div className='swiper-button-prev-custom swiper-button-custom'></div>
      </Swiper>
    </div>
  )
}
