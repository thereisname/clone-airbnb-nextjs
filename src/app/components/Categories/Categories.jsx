'use client'
import { useState, useEffect } from 'react'
import FilterCategories from './Filter/FilterCategories'

import '../../styles/Categories.css' // 추가된 CSS 파일 import

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    // JSON 데이터 fetch
    fetch('/categories.json')
      .then((response) => response.json())
      .then((data) => setCategories(data.desc))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  return (
    <div>
      <div className='items-center w-full pt-4'>
        <div className='flex w-18 flex-row justify-around'>
          {categories.map((category, index) => (
            <div key={index} className='flex flex-col items-center'>
              <img src={category.img} alt={category.imgname} className='size-10' />
              <p className='text-[12px] font-semibold text-gray-500'>{category.imgname}</p>
            </div>
          ))}
          <FilterCategories />
        </div>
      </div>
    </div>
  )
}

export default Categories
