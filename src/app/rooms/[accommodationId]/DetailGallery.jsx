import React from 'react'

const DetailGallery = ({ images }) => {
  return (
    <div className='my-5'>
      <div className='flex gap-2 h-[500px]'>
        <div className='flex-1'>
          <div className='h-full'>
            <img src={images[0]} alt='Main' className='w-full h-full object-cover rounded-l-2xl' />
          </div>
        </div>
        <div className='flex-1 grid grid-cols-2 gap-2'>
          {images.slice(1).map((src, index) => (
            <div key={index} className='relative'>
              <img
                src={src}
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
