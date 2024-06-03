import React, { useState } from 'react'
import {formatPrice} from '@/common/utils'
import { AIRBNB_CHARGE_RATIO } from '@/common/env'
import ReservationCalendarModal from './ReservationCalendarModal'
import { format } from 'date-fns'
import { check } from 'prettier'
import { calculateNights } from '@/common/utils'

function FeeInfo({ feeText, fee }) {
  return (
    <div className='flex justify-between text-base'>
      <div className='text-gray-800 underline'>{feeText}</div>
      <div className='text-gray-700'>{formatPrice(fee)}</div>
    </div>
  )
}

function ReservationComponent({
  pricePerDay,
  checkInDate,
  checkOutDate,
  onDateClick,
  clearDates,
  currentMonth,
  setCurrentMonth
}) {
  const formattedPrice = formatPrice(pricePerDay)
  const [isReserved, setIsReserved] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const night = calculateNights(checkInDate, checkOutDate)
  const totalPrice = night * pricePerDay
  

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)


  return (
    <div className='w-[373px] h-[500px] relative shadow-lg rounded-xl border border-solid border-gray-300 p-6 bg-white'>
      <div className='flex items-baseline'>
        <div className='text-black-500 text-[22px] font-medium'>{formattedPrice}</div>
        <div className='ml-2 text-gray-800 text-base'>/박</div>
      </div>
      <div className='mt-6 grid grid-cols-2 gap-0 border border-solid border-gray-300 rounded-xl'>
        <div className='p-4 border-r border-solid border-gray-300'>
          <div className='text-gray-800 text-xs'>체크인</div>
          <div className='text-gray-600 text-sm mt-1 cursor-pointer' onClick={openModal}>{!checkInDate ? '날짜 추가' : format(checkInDate, 'yyyy년 MM월 d일')}</div>
        </div>
        <div className='p-4 border-solid border-gray-300'>
          <div className='text-gray-800 text-xs'>체크아웃</div>
          <div className='text-gray-600 text-sm mt-1 cursor-pointer' onClick={openModal}>{!checkOutDate ? '날짜 추가' : format(checkOutDate, 'yyyy년 MM월 d일')}</div>
        </div>
        <div className='col-span-2 p-4 border-t border-solid border-gray-300 rounded-b-xl'>
          <div className='text-gray-800 text-xs'>게스트</div>
          <div className='text-gray-600 text-sm mt-1'>게스트 1명</div>
        </div>
      </div>
      <div className='mt-6'>
        <button
          className='w-full py-3 bg-rose-600 text-white text-base font-medium rounded-lg'
          onClick={() => setIsReserved(true)}
        >
          {isReserved ? '예약 완료' : '예약'}
        </button>
      </div>
      <div className='mt-3 text-gray-600 text-center text-sm'>
        예약 확정 전에는 요금이 청구되지 않습니다.
      </div>
      <div className='mt-6 space-y-3'>
        <FeeInfo feeText={`${formattedPrice} × ${night}박`} fee={totalPrice}></FeeInfo>
        <FeeInfo feeText='에어비앤비 서비스 수수료' fee={totalPrice * AIRBNB_CHARGE_RATIO}></FeeInfo>
      </div>
      <div className='mt-4 border-t border-solid border-gray-200'></div>
      <div className='flex justify-between text-base font-medium mt-3'>
        <div className='text-black-800'>총 합계</div>
        <div className='text-black-800'>{formatPrice(totalPrice + totalPrice * AIRBNB_CHARGE_RATIO)}</div>
      </div>
      <ReservationCalendarModal 
        isOpen={isModalOpen} 
        onRequestClose={closeModal}
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
        onDateClick={onDateClick}
        clearDates={clearDates}
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
      />
    </div>
  )
}

export default ReservationComponent
