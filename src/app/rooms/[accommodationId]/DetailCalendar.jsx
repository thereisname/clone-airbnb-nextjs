'use client'
import React from 'react'
import { format, differenceInDays, addMonths } from 'date-fns'
import Calendar from './CalendarLayout'
import { calculateNights } from '@/common/utils'

const DetailCalendar = ({
  py,
  checkInDate,
  checkOutDate,
  onDateClick,
  clearDates,
  currentMonth,
  setCurrentMonth,
  locationAlias,
}) => {
  const nextMonth = addMonths(currentMonth, 1)

  return (
    <div className={`bg-white rounded-lg ${py}`}>
      <div className='text-left mb-4'>
        <h1 className='text-[22px] text-center'>
          {locationAlias}에서 {calculateNights(checkInDate, checkOutDate)}박
        </h1>
        {checkInDate && checkOutDate ? (
          <p className='text-gray-600 text-[14px] pt-2 text-center'>
            {format(checkInDate, 'yyyy년 MM월 d일')} - {format(checkOutDate, 'yyyy년 MM월 d일')}
          </p>
        ) : (
          <div className='text-gray-600 text-[14px] pt-2 text-center'>
            여행 날짜를 입력하여 정확한 요금을 확인하세요.
          </div>
        )}
      </div>
      <div className='flex justify-center space-x-10'>
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
