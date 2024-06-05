import { useState } from 'react'

function BestHotelSelector() {
  const [isBest, setIsBest] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => {
      setIsBest(!isBest)
      setIsClicked(false)
    }, 50) // 애니메이션 지속 시간과 동일하게 설정
  }

  return (
    <div className='py-6'>
      <header className='font-semibold text-2xl mb-4'>최고 수준의 숙소</header>

      <div className='grid grid-cols-2'>
        <div
          onClick={handleClick}
          className={`transform transition-all duration-100 ease-in-out border-solid border-2 hover:border-black p-4 rounded-lg cursor-pointer ${isBest ? 'border-black bg-gray-100' : 'border-gray-300'} ${isClicked ? 'scale-95' : 'scale-100'}`}
        >
          {' '}
          {/* 귀찮아서 아무 svg 가져온거 곧 수정 예정 */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-12 w-12 mb-2'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M12 2l1.42 4.27 4.48.39-3.24 2.73.96 4.61-4.62-2.45-4.62 2.45.96-4.61-3.24-2.73 4.48-.39L12 2z' />
          </svg>
          <div className='font-bold'>게스트 선호</div>
          <div className='text-sm'>에어비엔비에서 가장 사랑받는 숙소</div>
        </div>
      </div>
    </div>
  )
}

export default BestHotelSelector
