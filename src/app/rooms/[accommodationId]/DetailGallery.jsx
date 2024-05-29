'use client'
import React, { useEffect, useState } from 'react';

const DetailGallery = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/assets/imageData.json');
      const data = await response.json();
      setImageData(data);
    };

    fetchData();
  }, []);

  if (!imageData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='my-5'>
      <div className='flex gap-2 h-[500px]'>
        <div className='flex-1'>
          <div className='h-full'>
            <img
              src={imageData.mainImage}
              alt='Main'
              className='w-full h-full object-cover rounded-l-2xl'
            />
          </div>
        </div>
        <div className='flex-1 grid grid-cols-2 gap-2'>
          {imageData.subImages.map((src, index) => (
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
  );
};

export default DetailGallery;