import Image from 'next/image'
import React from 'react'

const DetailHostProfile = ({ hosts }) => {
  if (!hosts || hosts.length === 0) {
    console.log('No host data available')
    return <div>No host data available</div>
  }

  const { hostJoinDate, reviewCount, rating, isSuperhost, member } = hosts[0]
  const hostingYears = new Date().getFullYear() - new Date(hostJoinDate).getFullYear()

  return (
    <div className='px-20 py-12 bg-white shadow-lg rounded-lg'>
      <h2 className='text-2xl font-semibold mb-4'>호스트 소개</h2>
      <div className='flex space-x-4'>
        <div className='flex-1 p-4 border border-gray-300 rounded-lg'>
          {member?.profileImage && (
            <Image
              width={100}
              height={100}
              src={member.profileImagePath}
              alt={member.name}
              className='w-24 h-24 rounded-full mb-4'
            />
          )}
          <h3 className='text-xl font-bold'>{member?.name}</h3>
          {isSuperhost ? (
            <p className='text-sm text-gray-500'>슈퍼호스트</p>
          ) : (
            <p className='text-sm text-gray-500'>호스트</p>
          )}
          <div className='mt-4'>
            <p>후기 {reviewCount}개</p>
            <p>평점 {rating}★</p>
            <p>호스팅 경력 {hostingYears}년</p>
          </div>
        </div>
        <div className='flex-1 p-4 border border-gray-300 rounded-lg'>
          {isSuperhost && (
            <>
              <p className='text-lg font-semibold mb-2'>{member?.name} 님은 슈퍼호스트입니다</p>
              <p className='text-sm text-gray-700 mb-4'>
                슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수
                있도록 최선을 다하는 호스트입니다.
              </p>
            </>
          )}
          <h3 className='text-lg font-semibold mb-2'>호스트 상세 정보</h3>
          <p>응답률: {rating}%</p>
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
