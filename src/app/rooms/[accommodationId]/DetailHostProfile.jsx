import Image from 'next/image'
import React from 'react'

const DetailHostProfile = ({ host }) => {
  const { name, location, reviews, rating, isSuperHost, responseRate, responseTime, profileImage } =
    host

  return (
    <div className='px-20 py-12 bg-white shadow-lg rounded-lg'>
      <h2 className='text-2xl font-semibold mb-4'>호스트 소개</h2>
      <div className='flex space-x-4'>
        <div className='flex-1 p-4 border border-gray-300 rounded-lg'>
          <Image
            width={100}
            height={100}
            src={profileImage}
            alt={name}
            className='w-24 h-24 rounded-full mb-4'
          />
          <h3 className='text-xl font-bold'>{name}</h3>
          {isSuperHost ? (
            <p className='text-sm text-gray-500'>슈퍼호스트</p>
          ) : (
            <p className='text-sm text-gray-500'>호스트</p>
          )}
          <div className='mt-4'>
            <p>후기 {reviews}개</p>
            <p>평점 {rating}★</p>
            <p>호스팅 경력 {host.hostingYears}년</p>
          </div>
        </div>
        <div className='flex-1 p-4 border border-gray-300 rounded-lg'>
          {isSuperHost && (
            <>
              <p className='text-lg font-semibold mb-2'>{name} 님은 슈퍼호스트입니다</p>
              <p className='text-sm text-gray-700 mb-4'>
                슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수
                있도록 최선을 다하는 호스트입니다.
              </p>
            </>
          )}
          <h3 className='text-lg font-semibold mb-2'>호스트 상세 정보</h3>
          <p>응답률: {responseRate}%</p>
          <p>응답 시간: {responseTime}</p>
          <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg'>
            호스트에게 메시지 보내기
          </button>
          <p className='mt-2 text-sm text-gray-500'>
            안전한 결제를 위해 에어비앤비 웹사이트나 앱 외부에서 송금하거나 대화를 나누지 마세요.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DetailHostProfile

{
  /* 
Host 정보 예시

const Host1 = {
  name: 'Sahee',
  location: '가평군, 한국',
  reviews: 3,
  rating: 5,
  isSuperHost: false, // true or false로 변경하여 테스트 가능
  responseRate: 100,
  responseTime: '몇 시간 이내에 응답',
  profileImage: 'https://via.placeholder.com/100',
  hostingYears: 2,
}

const Host2 = {
  name: '현아',
  location: '한국',
  reviews: 14,
  rating: 5,
  isSuperHost: true,
  responseRate: 100,
  responseTime: '1시간 이내에 응답',
  profileImage: 'https://via.placeholder.com/100',
  hostingYears: 8,
}

Host 정보 중 isSuperHost에 따라 슈퍼호스트 여부를 표시
<DetailHostProfile host={Host2} />
*/
}
