import React from 'react'
import HotelTypeSelector from './Selector/HotelTypeSelector'
import PriceRangeSelector from './Selector/PriceRangeSelector'
import BedroomSelector from './Selector/BedRoomSelector'
import FacilitiesSelector from './Selector/FacilitiesSelector'
import BestHotelSelector from './Selector/BestHotelSelector'

function FilterCategoriesModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div
      className={`fixed inset-0 py-12 flex justify-center items-center bg-black bg-opacity-50 z-30 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    >
      <div
        className={`bg-white py-5 px-5 my-12 rounded-lg w-full max-w-3xl max-h-full overflow-y-auto transform transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-95'}`}
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않도록 이벤트 전파 방지
      >
        <header className='text-md font-bold pb-6 mb-4 flex items-center justify-between top-0 bg-white z-10 border-b border-black'>
          <button onClick={onClose} className='text-3xl font-light'>
            &times;
          </button>
          <span className='flex-grow text-center'>필터</span>
        </header>

        <div className='py-4 divide-y divide-solid divide-gray-200'>
          <PriceRangeSelector />
          <HotelTypeSelector />
          <BedroomSelector />
          <FacilitiesSelector />
          <BestHotelSelector />
        </div>
        <div className='mt-6 flex justify-end'>
          <button onClick={onClose} className='px-4 py-2 bg-black text-white rounded-lg'>
            적용
          </button>
        </div>
      </div>
    </div>
  )
}

export default FilterCategoriesModal
