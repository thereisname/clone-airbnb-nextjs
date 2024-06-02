'use client'
import React, { useState } from 'react'
import { format, differenceInDays, addMonths, subMonths, isBefore } from 'date-fns'
import Calendar from './CalendarLayout'

const DetailCalendar = ({ py }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [checkInDate, setCheckInDate] = useState(null)
  const [checkOutDate, setCheckOutDate] = useState(null)

  const onDateClick = (day) => {
    if (!checkInDate || (checkInDate && checkOutDate)) {
      setCheckInDate(day)
      setCheckOutDate(null)
    } else if (isBefore(day, checkInDate)) {
      setCheckInDate(day)
    } else {
      setCheckOutDate(day)
    }
  }

  const clearDates = () => {
    setCheckInDate(null)
    setCheckOutDate(null)
  }

  const calculateNights = () => {
    if (checkInDate && checkOutDate) {
      return differenceInDays(checkOutDate, checkInDate)
    }
    return 0
  }

  const nextMonth = addMonths(currentMonth, 1)

  return (
    <div className={`bg-white rounded-lg ${py}`}>
      <div className='text-left mb-4'>
        <h1 className='text-[22px]'>가평군에서 {calculateNights()}박</h1>
        {checkInDate && checkOutDate ? (
          <p className='text-gray-600 text-[14px] pt-2'>
            {format(checkInDate, 'yyyy년 MMMM d일')} - {format(checkOutDate, 'yyyy년 MMMM d일')}
          </p>
        ) : (
          <div className='text-gray-600 text-[14px] pt-2'>
            여행 날짜를 입력하여 정확한 요금을 확인하세요.
          </div>
        )}
      </div>
      <div className='flex space-x-10'>
        <div className='relative pb-10'>
          <Calendar
            currentMonth={currentMonth}
            nextMonth={nextMonth}
            onDateClick={onDateClick}
            selectedDates={{ checkInDate, checkOutDate }}
            setCurrentMonth={setCurrentMonth}
          />
          <div className='absolute bottom-0 right-0 mt-4'>
            <button onClick={clearDates} className='underline text-[14px]'>
              날짜 지우기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailCalendar
