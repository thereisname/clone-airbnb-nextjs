import React, { useState } from 'react'
import DetailReviewModal from '@/app/rooms/[accommodationId]/DetailReviewModal'

const DetailSubTitle = ({ locationName, reviewCount }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div>
      <h2 className='text-lg font-semibold'>{locationName}</h2>
      <button onClick={toggleModal} className='text-[16px] underline text-bold'>
        후기 {reviewCount}개
      </button>

      {/* {isModalOpen && <DetailReviewModal onClose={toggleModal} />} */}
    </div>
  )
}

export default DetailSubTitle
