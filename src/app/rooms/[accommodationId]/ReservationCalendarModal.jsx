'use client'

import React, { useEffect, useRef } from 'react'
import DetailCalendar from './DetailCalendar'

const ReservationCalendarModal = ({
  isOpen,
  onRequestClose,
  checkInDate,
  checkOutDate,
  onDateClick,
  clearDates,
  currentMonth,
  setCurrentMonth,
  locationAlias,
}) => {
  const modalRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onRequestClose()
      }
    }

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onRequestClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onRequestClose])

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div ref={modalRef} className='relative bg-white rounded-lg p-6 w-[90%] max-w-4xl mx-auto'>
        <button
          onClick={onRequestClose}
          className='absolute top-4 right-4 text-gray-600 hover:text-gray-900'
        >
          &times;
        </button>
        <DetailCalendar
          py='py-6'
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          onDateClick={onDateClick}
          clearDates={clearDates}
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          locationAlias={locationAlias}
        />
      </div>
    </div>
  )
}

export default ReservationCalendarModal
