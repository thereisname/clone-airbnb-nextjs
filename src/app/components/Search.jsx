'use client'
import { useState, useEffect, useRef } from 'react'
import SearchModal from '@/app/components/SearchModal'
import { format, isBefore } from 'date-fns'

const Search = () => {
  const [checkInDate, setCheckInDate] = useState(null)
  const [checkOutDate, setCheckOutDate] = useState(null)
  const [activeSection, setActiveSection] = useState(null)
  const [selectedLocation, setSelectedLocation] = useState(null) // 상태 유지
  const [guests, setGuests] = useState({
    adults: 0,
    kids: 0,
    babies: 0,
    pets: 0,
  })
  const searchRef = useRef(null)

  const onDateClick = (day) => {
    if (activeSection === 'checkin') {
      setCheckInDate(day)
      setActiveSection('checkout')
    } else if (activeSection === 'checkout') {
      if (isBefore(day, checkInDate)) {
        setCheckInDate(day)
        setCheckOutDate(null)
        setActiveSection('checkout')
      } else {
        setCheckOutDate(day)
      }
    }
  }

  const handleSectionClick = (section) => {
    setActiveSection(section)
  }

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActiveSection(null)
    }
  }

  const handleGuestsChange = (value, type) => {
    setGuests((prevGuests) => ({
      ...prevGuests,
      [type]: value,
    }))
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const getSectionClass = (section) => {
    if (activeSection === section) {
      return 'bg-white search-shadow'
    } else if (activeSection) {
      return 'hover:bg-searchOnClickHoverBackground'
    } else {
      return 'hover:bg-searchBackground'
    }
  }

  const renderGuestText = () => {
    const { adults, kids, babies, pets } = guests
    const totalGuests = adults + kids
    const guestList = []

    if (totalGuests > 0) guestList.push(`게스트 ${totalGuests}`)
    if (babies > 0) guestList.push(`유아 ${babies}`)
    if (pets > 0) guestList.push(`반려동물 ${pets}`)

    return guestList.length > 0 ? guestList.join(', ') : '게스트 추가'
  }

  return (
    <div className='absolute w-full top-20 lg:top-[2rem]'>
      <nav className='absolute left-1/2 transform -translate-x-1/2'>
        <ul className='flex justify-center gap-4'>
          <li>숙소</li>
          <li>체험</li>
          <li>온라인 체험</li>
        </ul>
      </nav>

      <div
        ref={searchRef}
        className={`h-16 flex items-center absolute left-1/2 transform -translate-x-1/2 top-12 w-full max-w-[53rem] rounded-full z-40 ${
          activeSection ? 'bg-searchBackground' : 'bg-white search-shadow'
        }`}
        role='group'
      >
        {/* 여행지 검색 */}
        <div
          className={`flex items-center px-6 h-full rounded-full w-1/3 ${getSectionClass('destination')}`}
          onClick={() => handleSectionClick('destination')}
        >
          <label className='flex flex-col' role='group'>
            <span className='text-neutral-800 text-xs'>여행지</span>
            <input
              className={` text-sm bg-transparent ${selectedLocation ? 'placeholder-black' : 'placeholder-gray-500'}`}
              placeholder={`${selectedLocation ?? '여행지 검색'}`}
              readOnly
            />
          </label>
        </div>

        <div className='h-2/5 border border-solid border-gray-200' />

        {/* 체크인, 체크아웃 */}
        <div className='flex items-center h-full w-1/3'>
          <div
            className={`flex w-1/2 items-center px-6 h-full rounded-full ${getSectionClass('checkin')}`}
            onClick={() => handleSectionClick('checkin')}
          >
            <label className='flex flex-col'>
              <span className='text-neutral-800 text-xs'>체크인</span>
              <div className={`text-sm ${checkInDate ? 'text-black' : 'text-neutral-500'}`}>
                {checkInDate ? format(checkInDate, 'M월 d일') : '날짜 추가'}
              </div>
            </label>
          </div>

          <div className='h-2/5 border border-solid border-gray-200'></div>

          <div
            className={`flex w-1/2 items-center px-6 h-full rounded-full ${getSectionClass('checkout')}`}
            onClick={() => handleSectionClick('checkout')}
          >
            <label className='flex flex-col'>
              <span className='text-neutral-800 text-xs'>체크아웃</span>
              <div className={`text-sm ${checkOutDate ? 'text-black' : 'text-neutral-500'}`}>
                {checkOutDate ? format(checkOutDate, 'M월 d일') : '날짜 추가'}
              </div>
            </label>
          </div>
        </div>

        <div className='h-2/5 border border-solid border-gray-200' />

        {/* 여행자 선택 */}
        <div
          className={`flex w-1/3 items-center px-6 rounded-r-full rounded-full h-full ${getSectionClass('guests')}`}
          onClick={() => handleSectionClick('guests')}
        >
          <label className='flex flex-col'>
            <span className='text-neutral-800 text-xs'>여행자</span>
            <div className={`text-sm ${guests ? 'text-black' : 'text-neutral-500'}`}>
              {renderGuestText()}
            </div>
          </label>
        </div>

        {activeSection && (
          <SearchModal
            closeModal={() => setActiveSection(null)}
            activeSection={activeSection}
            setSelectedLocation={setSelectedLocation} // 상태 전달
            selectedLocation={selectedLocation} // 상태 전달
            setActiveSection={setActiveSection}
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
            onDateClick={onDateClick}
            handleGuestsChange={handleGuestsChange}
          />
        )}

        <button className='absolute right-3 w-12 h-12'>
          <img src='/assets/Group2.svg' alt='검색 버튼' />
        </button>
      </div>
    </div>
  )
}

export default Search
