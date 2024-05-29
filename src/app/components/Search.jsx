'use client'
import { useState, useEffect, useRef } from 'react'

const Search = () => {
  const [activeSection, setActiveSection] = useState(null)
  const searchRef = useRef(null)

  const handleSectionClick = (section) => {
    setActiveSection(section)
  }

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      console.log(event.target)
      console.log(searchRef)
      setActiveSection(null)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const getSectionClass = (section) => {
    if (activeSection === section) {
      return 'bg-white shadow-lg' // Add shadow to the active section
    } else if (activeSection) {
      return 'hover:bg-gray-300' // Slightly darker hover color for non-active sections
    } else {
      return 'hover:bg-gray-200'
    }
  }

  return (
    <div className='absolute w-full top-16 lg:top-[2rem]'>
      <nav className='absolute left-1/2 transform -translate-x-1/2'>
        <ul className='flex justify-center gap-4'>
          <li>숙소</li>
          <li>체험</li>
          <li>온라인 체험</li>
        </ul>
      </nav>

      <div
        ref={searchRef}
        className={`h-16 flex items-center absolute left-1/2 transform -translate-x-1/2 top-12 rounded-full z-40 ${
          activeSection ? 'bg-gray-200' : 'bg-white search-shadow'
        }`}
        role='group'
      >
        <div
          className={`flex items-center w-52 px-6 h-full rounded-full ${getSectionClass('destination')}`}
          onClick={() => handleSectionClick('destination')}
        >
          <label className='flex flex-col' role='group'>
            <span className='text-neutral-800 text-xs'>여행지</span>
            <input className='text-neutral-500 text-sm bg-transparent' placeholder='여행지 검색' />
          </label>
        </div>

        <div className='h-2/5 border border-solid border-gray-200'></div>

        <div
          className={`flex items-center w-32 px-6 h-full rounded-full ${getSectionClass('checkin')}`}
          onClick={() => handleSectionClick('checkin')}
        >
          <label className='flex flex-col'>
            <span className='text-neutral-800 text-xs'>체크인</span>
            <div className='text-neutral-500 text-sm'>날짜 추가</div>
          </label>
        </div>

        <div className='h-2/5 border border-solid border-gray-200'></div>

        <div
          className={`flex items-center w-32 px-6 h-full rounded-full ${getSectionClass('checkout')}`}
          onClick={() => handleSectionClick('checkout')}
        >
          <label className='flex flex-col'>
            <span className='text-neutral-800 text-xs'>체크아웃</span>
            <div className='text-neutral-500 text-sm'>날짜 추가</div>
          </label>
        </div>

        <div className='h-2/5 border border-solid border-gray-200'></div>

        <div
          className={`flex items-center w-52 px-6 rounded-r-full rounded-full h-full ${getSectionClass('guests')}`}
          onClick={() => handleSectionClick('guests')}
        >
          <label className='flex flex-col'>
            <span className='text-neutral-800 text-xs'>여행자</span>
            <div className='text-neutral-500 text-sm'>게스트 추가</div>
          </label>
        </div>

        <button className='absolute right-3 w-12 h-12'>
          <img src='/assets/Group2.svg' alt='검색 버튼' />
        </button>
      </div>
    </div>
  )
}

export default Search
