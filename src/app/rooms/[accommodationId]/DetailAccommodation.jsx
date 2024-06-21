import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const DetailAccommodationInfo = ({ desc, accommodationId }) => {
  const [accommodation, setAccommodation] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/Accommodation.json')
      const data = await res.json()
      const selectedAccommodation = data.accommodationInfo.find(
        (item) => item.accommodationId === Number(accommodationId),
      )
      setAccommodation(selectedAccommodation)
    }
    fetchData()
  }, [accommodationId])

  if (!accommodation) {
    return <div>Loading...</div>
  }

  const amenities = accommodation.amenities

  return (
    <div className='py-12 bg-white'>
      <div className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>숙박 장소</h2>
        <div className='p-4 border border-gray-300 rounded-lg'>
          <div className='text-lg font-medium mb-2'>침실</div>
          <div className='text-gray-600'>더블 침대 1개</div>
        </div>
      </div>
      <hr className='my-8' />
      <div>
        <h2 className='text-2xl font-semibold mb-4'>숙소 편의시설</h2>
        <div className='grid grid-cols-2 gap-4'>
          {amenities.map((amenity, index) => (
            <div key={index} className='flex items-center'>
              <Image
                width={20}
                height={20}
                className='mr-2'
                src={`/assets/amenitiesIcons/${amenity.icon}.svg`}
                alt={amenity.amenityName}
              />
              <span>{amenity.amenityName}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DetailAccommodationInfo
