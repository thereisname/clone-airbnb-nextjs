'use client'

import React, { useState, useEffect } from 'react'
import FilterCategoriesModal from './FilterCategoriesModal'

function FilterCategories() {
  const [isFilterModalOpen, setFilterModalOpen] = useState(false)

  const handleOpenFilterModal = () => {
    setFilterModalOpen(true)
  }

  const handleCloseFilterModal = () => {
    setFilterModalOpen(false)
  }

  useEffect(() => {
    if (isFilterModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isFilterModalOpen])

  return (
    <div className='p-1'>
      <button
        onClick={handleOpenFilterModal}
        className='flex items-center px-5 py-3 border text-md font-semibold border-gray-300 bg-white text-black rounded-xl hover:border-black hover:bg-gray-100'
      >
        <img src='/assets/categories-icons/filter.svg' alt='필터 이미지' className='w-6 mr-1' />
        필터
      </button>

      <FilterCategoriesModal isOpen={isFilterModalOpen} onClose={handleCloseFilterModal} />
    </div>
  )
}

export default FilterCategories
