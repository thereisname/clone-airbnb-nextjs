import React from 'react'
const svgexport14 = '/assets/svgexport-14.svg'
const svgexport15 = '/assets/svgexport-15.svg'
const svgexport16 = '/assets/svgexport-16.svg'
const svgexport17 = '/assets/svgexport-17.svg'
const svgexport18 = '/assets/svgexport-18.svg'
const svgexport19 = '/assets/svgexport-19.svg'

const features = [
  {
    icon: svgexport14,
    text: '멋진 수영장',
  },
  { icon: svgexport15, text: '슈퍼호스트' },
  { icon: svgexport16, text: '한정 시간 무료 취소' },
  { icon: svgexport17, text: '셀프 체크인' },
  { icon: svgexport18, text: '세탁기 및 건조기' },
  { icon: svgexport19, text: 'TV' },
]

const DetailFeatures = () => {
  return (
    <div className=''>
      <div className='py-8'>
        <div className='grid grid-cols-2 gap-y-1'>
          {features.map((feature, index) => (
            <div key={index} className='flex items-center'>
              <img src={feature.icon} className='text-2xl mr-2' />
              <span className='text-base text-[14px]'>{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
      <hr></hr>
    </div>
  )
}

export default DetailFeatures
