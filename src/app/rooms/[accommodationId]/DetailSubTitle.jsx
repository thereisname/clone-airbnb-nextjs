'use client'
import React from 'react'
import ReviewModal from './DetailReviewModal'
import { useState } from 'react'

const DetailSubTitle = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <div className='pb-8'>
        <div className='text-left'>
          <h2 className='text-[22px]'>가평군, 한국의 저택 전체</h2>
          <p className='text-[16px] text-gray-600'>최대 인원 8명 · 침실 3개 · 욕실 3.5개</p>
        </div>
        <div className='flex items-center mt-2'>
          <span className='text-black font-bold'>★ 5.0</span>
          <button className='text-[16px] ml-2 underline' onClick={openModal}>
            후기 3개
          </button>
        </div>
      </div>
      <hr />
      {isModalOpen && <ReviewModal onClose={closeModal} />}
    </>
  )
}

export default DetailSubTitle
