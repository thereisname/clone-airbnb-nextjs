import React, { useState } from 'react'
import Image from 'next/image'

const locations = [
  '서울',
  '부산',
  '속초',
  '강릉',
  '전주',
  '대구',
  '경주',
  '여수',
  '서귀포',
  '대전',
  '제주도',
  '인천',
]

const imageItems = [
  {
    src: 'https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg',
    label: '유연한 검색',
  },
  {
    src: 'https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg',
    label: '유럽',
  },
  {
    src: 'https://a0.muscache.com/im/pictures/26891a81-b9db-4a9c-8aab-63486b7e627c.jpg',
    label: '일본',
  },
  {
    src: 'https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320',
    label: '동남아시아',
  },
]

const TravelDestination = ({ setTravel, setActiveSection }) => {
  const [selectedLocation, setSelectedLocation] = useState(null)

  const handleClick = (location) => {
    setTravel(location)
    setSelectedLocation(location)
    setActiveSection('checkin')
  }

  return (
    <div className='p-7'>
      <div className='font-bold text-sm pb-5'>지역으로 검색하기</div>
      <div className='grid grid-cols-4 pb-7'>
        {imageItems.map((item, index) => (
          <div key={index} className='flex flex-col hover:bg-gray-200 items-center rounded-3xl p-2'>
            <Image
              className='rounded-2xl border border-solid border-gray-300'
              src={item.src}
              width={85}
              height={85}
              alt={item.label}
            />
            <label className='text-sm pt-2'>{item.label}</label>
          </div>
        ))}
      </div>

      <div className='font-bold text-sm pb-5'>한국</div>
      <div className='grid grid-cols-4 gap-3 pb-7'>
        {locations.map((location) => (
          <button
            key={location}
            value={location}
            className={`rounded-full px-7 py-2 border border-solid text-sm hover:border-black ${
              selectedLocation === location ? 'bg-black text-white' : ''
            }`}
            onClick={() => handleClick(location)}
          >
            {location}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TravelDestination
