import React from 'react'

const DetailSubTitle = ({ accommodation }) => {
  return (
    <div>
      <h2 className='text-lg font-semibold mb-4'>{accommodation.locationName}</h2>
      <p>{accommodation.briefRoomInfo.join(', ')}</p>
    </div>
  )
}

export default DetailSubTitle
