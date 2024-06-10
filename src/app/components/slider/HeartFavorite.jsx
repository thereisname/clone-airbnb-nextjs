// components/HeartFavorite.js
import React, { useState } from 'react'
import Image from 'next/image'
import LoginModal from '../LoginModal'

const HeartFavorite = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div
        onClick={handleOpenModal}
        style={{ cursor: 'pointer' }}
        className='absolute top-2 right-2 m-2 z-10 hover:scale-110 duration-300'
      >
        <Image src='/assets/heart.svg' alt='Heart Icon' width={25} height={25} />
      </div>
      <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}

export default HeartFavorite
