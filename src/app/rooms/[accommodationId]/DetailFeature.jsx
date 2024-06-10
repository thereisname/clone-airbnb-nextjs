import React from 'react'

const DetailFeatures = ({ amenities }) => {
  return (
    <div>
      <h2 className='text-xl font-bold mb-4'>Amenities</h2>
      <ul>
        {amenities.map((amenity, index) => (
          <li key={index} className='mb-2 flex items-center'>
            <span className={`icon-${amenity.icon} mr-2`}></span>
            {amenity.amenityName}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DetailFeatures
