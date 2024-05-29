'use client'

import { useState } from 'react'

const HeaderContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <div>
        <img src='/assets/airbnbLogo.svg' alt='에어비앤비 로고입니다.' />
      </div>

      {/* 나머지 기타 부분 (당신의 공간을 ~, 로그인 버튼 등) */}
      <div className='flex justify-end items-center gap-6'>
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

          {/* <Modal
            isOpen={isModalOpen}
            onClose={handleModalToggle}
            className='py-3 mt-2 rounded-2xl w-60'
          >
            <ul className='text-sm text-gray-800'>
              <li className='px-4 py-3 hover:bg-gray-100 cursor-pointer'>회원 가입</li>
              <li className='px-4 py-3 hover:bg-gray-100 cursor-pointer'>로그인</li>
              <hr className='my-2' />
              <li className='px-4 py-3 hover:bg-gray-100 cursor-pointer'>
                당신의 공간을 에어비앤비하세요
              </li>
              <li className='px-4 py-3 hover:bg-gray-100 cursor-pointer'>도움말 센터</li>
            </ul>
          </Modal> */}
        </div>
      </div>
    </>
  )
}
export default HeaderContent
