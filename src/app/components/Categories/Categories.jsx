'use client'
import { useState, useRef, useEffect } from 'react'

const Categories = ({ padding }) => {
  const [categories, setCategories] = useState([])
  const sliderRef = useRef(null)

  useEffect(() => {
    // JSON 데이터 fetch
    fetch('../../categories.json')
      .then((response) => response.json())
      .then((data) => setCategories(data.desc))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -600,
      behavior: 'smooth',
    })
  }

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 600,
      behavior: 'smooth',
    })
  }

  return (
    <div className={`relative top-40 lg:top-32 ${padding}`}>
      <button
        onClick={scrollLeft}
        className='absolute left-0 top-1/2 transform -translate-y-1/2 p-2'
      >
        <div className='w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center border border-gray-300'>
          <span className='font-bold'>&lt;</span>
        </div>
      </button>
      <div
        ref={sliderRef}
        className='flex overflow-hidden scroll-smooth whitespace-nowrap space-x-2 p-4'
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className='flex-none w-16 h-16 text-center p-4 rounded-lg flex flex-col items-center justify-center'
          >
            <img src={category.img} alt={category.imgname} className='w-8 h-8 mb-1 ' />
            <p className='text-[10px] text-gray-500 font-black flex items-center justify-center h-4'>
              {category.imgname}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={scrollRight}
        className='absolute right-0 top-1/2 transform -translate-y-1/2 p-2'
      >
        <div className='w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center border border-gray-300'>
          <span className='font-bold'>&gt;</span>
        </div>
      </button>
    </div>
  )
}

export default Categories
