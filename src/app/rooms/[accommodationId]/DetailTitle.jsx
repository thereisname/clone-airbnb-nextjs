import React from 'react'

const DetailTitle = ({ accommodation }) => {
  return (
    <div>
      <h1 className='text-[26px] font-semi bold text-left'>{accommodation.accommodationName}</h1>
    </div>
  )
}

export default DetailTitle
