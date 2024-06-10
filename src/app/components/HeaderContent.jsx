'use client'

import { useState } from 'react'
import HeaderContentModal from '@/app/components/HeaderContentModal' // 적절한 경로로 수정하세요
import LoginModal from '@/app/components/LoginModal' // 새로운 LoginModal 컴포넌트의 경로를 수정하세요

const HeaderContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev)
  }

  const handleLoginClick = () => {
    setIsModalOpen(false)
    setIsLoginModalOpen(true)
  }

  const handleLoginModalClose = () => {
    setIsLoginModalOpen(false)
  }

  return (
    <div className='flex justify-between items-center w-full'>
      <div>
        <img src='/assets/airbnbLogo.svg' alt='에어비앤비 로고입니다.' />
      </div>

      <div className='flex justify-end items-center gap-6 relative'>
        <div className='text-neutral-800 text-sm'>당신의 공간을 에어비앤비하세요</div>
        <button className='relative'>
          <img src='/assets/language.svg' alt='언어 선택' />
        </button>
        <div className='relative'>
          <button
            className='py-1 px-2 bg-white rounded-[29px] border border-gray-300 flex items-center min-w-[85px]'
            onClick={handleModalToggle}
          >
            <img src='/assets/menu.svg' alt='메뉴' className='mr-4' />
            <img src='/assets/account.svg' alt='계정' />
          </button>

          <HeaderContentModal
            isOpen={isModalOpen}
            onClose={handleModalToggle}
            className='py-3 mt-2 rounded-2xl w-70'
          >
            <ul className='text-sm text-gray-800'>
              <li className='px-4 py-3 hover:bg-gray-100 cursor-pointer'>회원 가입</li>
              <li className='px-4 py-3 hover:bg-gray-100 cursor-pointer' onClick={handleLoginClick}>
                로그인
              </li>
              <hr className='my-2' />
              <li className='px-4 py-3 hover:bg-gray-100 cursor-pointer whitespace-nowrap'>
                당신의 공간을 에어비앤비하세요
              </li>
              <li className='px-4 py-3 hover:bg-gray-100 cursor-pointer'>도움말 센터</li>
            </ul>
          </HeaderContentModal>
        </div>
      </div>

      <LoginModal isOpen={isLoginModalOpen} onClose={handleLoginModalClose} />
    </div>
  )
}

export default HeaderContent
