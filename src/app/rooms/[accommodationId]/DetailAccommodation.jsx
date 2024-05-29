import React from 'react'
const svgexport14 = '/assets/svgexport-14.svg'

const amenities = [
  { icon: svgexport14, label: '호수나 강과 인접' },
  { icon: svgexport14, label: '무선 인터넷' },
  { icon: svgexport14, label: '온수 욕조' },
  { icon: svgexport14, label: '에어컨' },
  { icon: svgexport14, label: '숙소 내 보안 카메라' },
  { icon: svgexport14, label: '주방' },
  { icon: svgexport14, label: '건물 내 무료 주차' },
  { icon: svgexport14, label: 'TV' },
  { icon: svgexport14, label: '발코니' },
  { icon: svgexport14, label: '일산화탄소 경보기' },
  //map으로 뿌리기 위해 배열로 만들어줌
  //json으로 만들어도 됨
]

const DetailAccommodationInfo = () => {
  return (
    <>
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
                <img className='mr-2' src={amenity.icon} />
                <span>{amenity.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailAccommodationInfo
