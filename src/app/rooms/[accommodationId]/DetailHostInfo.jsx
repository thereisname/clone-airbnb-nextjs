import React from 'react'
const hostImage = '/assets/imageData.json'

const DetailHostInfo = () => {
  return (
    <>
      <div className='border-t border-b border-gray-300 py-5'>
        <div className='flex items-center'>
          <img src={hostImage.mainImage} alt='Host' className='w-10 h-10 rounded-full mr-4' />
          <div>
            <h3 className='text-[16px] font-semibold'>호스트: Sahee 님</h3>
            <p className='text-[14px] text-gray-600'>호스팅 경력 2년</p>
            <button className='text-[14px] underline'>후기 20개</button>
          </div>
        </div>
      </div>

      <hr></hr>
    </>
  )
}

export default DetailHostInfo
