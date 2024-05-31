'use client';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../styles/Categories.css'; // 추가된 CSS 파일 import

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // JSON 데이터 fetch
    fetch('/categories.json') // 경로를 절대 경로로 설정
      .then((response) => response.json())
      .then((data) => setCategories(data.desc))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className={`relative top-40 lg:top-32`}>
       <div className='flex items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20'>
        <button className='category-swiper-button-prev flex items-center justify-center w-10 h-10 bg-white rounded-full border border-gray-300 shadow'>
          <img src='/assets/categories-icons/bold-left-arrow.svg' alt='Prev' className='w-4 h-4' />
        </button>
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          navigation={{
            nextEl: '.category-swiper-button-next',
            prevEl: '.category-swiper-button-prev',
          }}
          modules={[Navigation]}
          className="swiper-container flex-1 mx-2"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index} className='flex-none w-8 h-8 text-center px-2 py-2'>
              <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
                <img src={category.img} alt={category.imgname} className='w-8 h-8 mb-1' />
                <p className='text-[10px] text-gray-500 font-black'>
                  {category.imgname}
                </p>
              </label>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className='category-swiper-button-next flex items-center justify-center w-10 h-10 bg-white rounded-full border border-gray-300 shadow'>
          <img src='/assets/categories-icons/bold-right-arrow.svg' alt='Next' className='w-2 h-2' />
        </button>
      </div>
    </div>
  );
};

export default Category;
