'use client'
import formatPrice from '@/common/utils'
import React from 'react'
import { useState } from 'react'


function FeeInfo({ feeText, fee }) {
  return (
    <div className='flex justify-between text-base'>
      <div className='text-gray-800 underline'>{feeText}</div>
      <div className='text-gray-700'>{formatPrice(fee)}</div>
    </div>
  )
}

function ReservationComponent({pricePerDay}) {
  const formattedPrice = formatPrice(pricePerDay) // formatting된 가격
  const [isReserved, setIsReserved] = useState(false) // 예약 상태 받는 state

  return (
    <div className='w-[373px] h-[500px] relative shadow-lg rounded-xl border border-solid border-gray-300 p-6 bg-white'>
      <div className='flex items-baseline'>
        <div className='text-black-500 text-[22px] font-medium'>{formattedPrice}</div>
        {/* <div className="text-gray-800 text-[22px] font-medium">할인 가격</div> */}
        <div className='ml-2 text-gray-800 text-base'>/박</div>
      </div>
      {/* 별점 및 리뷰 개수 인포 
      <div className="flex items-center mt-2">
        <div className="text-gray-800 text-sm">4.99</div>
        <div className="mx-1 w-1 h-1 bg-gray-800 rounded-full"></div>
        <div className="text-gray-600 text-sm">337 reviews</div>
      </div>  
      */}
      <div className='mt-6 grid grid-cols-2 gap-0 border border-solid border-gray-300 rounded-xl'>
        <div className='p-4 border-r border-solid border-gray-300'>
          {/*체크인 날짜*/}
          <div className='text-gray-800 text-xs'>체크인</div>
          <div className='text-gray-600 text-sm mt-1'>2/6/2023</div>
        </div>
        <div className='p-4 border-solid border-gray-300'>
          {/*체크아웃 날짜*/}
          <div className='text-gray-800 text-xs'>체크아웃</div>
          <div className='text-gray-600 text-sm mt-1'>2/11/2023</div>
        </div>
        <div className='col-span-2 p-4 border-t border-solid border-gray-300 rounded-b-xl'>
          {/*게스트 정보*/}
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
        {/*feeText에 price가 들어갔을 때도 처리해야 함 */}
        <FeeInfo feeText='₩1,200,000 x 1박' fee={1200000}></FeeInfo>
        <FeeInfo feeText='에어비앤비 서비스 수수료' fee={186353}></FeeInfo>
      </div>
      <div className='mt-4 border-t border-solid border-gray-200'></div>
      <div className='flex justify-between text-base font-medium mt-3'>
        <div className='text-black-800'>총 합계</div>
        <div className='text-black-800'>{formatPrice(1200000 + 186353)}</div>
      </div>
    </div>
  )
}

export default ReservationComponent
