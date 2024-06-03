// import React from 'react'

// const DetailSubTitle = ({ accommodation }) => {
//   return (
//     <div>
//       <h2 className='text-lg font-semibold mb-4'>{accommodation.locationName}</h2>
//       <p>{accommodation.briefRoomInfo.join(', ')}</p>
//       <button
//         onClick={() => {
//           return <DetailSubTitle accommodation={accommodation} reviewCount={reviewCount} />
//         }}
//         className='text-[16px] underline bold mt-4'
//       >
//         리뷰 {accommodation.reviewCount}
//       </button>
//     </div>
//   )
// }

import React, { useState } from 'react'
import DetailReviewModal from '@/app/rooms/[accommodationId]/DetailReviewModal'

const DetailSubTitle = ({ accommodation }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div>
      <h2 className='text-lg font-semibold'>{accommodation.locationName}</h2>
      <div>{accommodation.briefRoomInfo.join(', ')}</div>
      <button onClick={toggleModal} className='text-[16px] underline text-bold'>
        후기 {accommodation.reviewCount}개
      </button>

      {isModalOpen && <DetailReviewModal onClose={toggleModal} />}
    </div>
  )
}

export default DetailSubTitle
