import Image from 'next/image'
import React from 'react'

const DetailGallery = ({ images }) => {
  // image json이 없을 경우 예외처리
  if (!images || images.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div className='my-5'>
      <div className='flex gap-2 h-[500px]'>
        <div className='flex-1'>
          <div className='h-full'>
            <Image
              width={100}
              height={100}
              src={images[0].accommodationImage}
              alt='Main'
              className='w-full h-full object-cover rounded-l-2xl'
            />
          </div>
        </div>
        <div className='flex-1 grid grid-cols-2 gap-2'>
          {images.slice(1).map((src, index) => (
            <div key={index} className='relative'>
              <Image
                width={100}
                height={100}
                src={src.accommodationImage}
                alt={`Sub ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover ${index === 1 ? 'rounded-tr-2xl' : ''} ${index === 3 ? 'rounded-br-2xl' : ''}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DetailGallery
