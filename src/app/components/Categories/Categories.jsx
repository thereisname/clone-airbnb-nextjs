'use client'
import { useState, useEffect } from 'react'
import FilterCategories from './Filter/FilterCategories'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [clicked, setClicked] = useState(null)

  useEffect(() => {
    // JSON 데이터 fetch
    fetch('/categories.json')
      .then((response) => response.json())
      .then((data) => setCategories(data.desc))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  const handleClick = (index) => {
    setClicked(index)
  }

  return (
    <div>
      <div className='items-center w-full pt-4'>
        <div className='flex w-18 flex-row justify-around'>
          {categories.map((category, index) => (
            <div
              key={index}
              className={`flex flex-col items-center cursor-pointer transform transition-all duration-100 ease-in-out hover:scale-110 active:scale-90 ${clicked === index ? 'text-black' : 'text-gray-400'}`}
              onClick={() => handleClick(index)}
            >
              <img src={category.img} alt={category.imgname} className='size-10' />
              <p className='text-[12px] font-semibold border-b-8'>{category.imgname}</p>
            </div>
          ))}
          <FilterCategories />
        </div>
      </div>
    </div>
  )
}

export default Categories
