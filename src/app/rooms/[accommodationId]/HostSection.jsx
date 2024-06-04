import React from 'react'
const safePurchasingSvg = '/assets/safepurchasing.svg'
/* 
  일단 컴포넌트들 파일 하나에 다 때려박았는데
  나중에 나누는 작업 필요하긴 할 듯
  컴포넌트명 생각 필요...
*/
function HostProfile({ imgSrc, name, description, reviews, rating, experience }) {
  return (
    <>
      <div className='flex flex-col items-center'>
        <img src={imgSrc} alt='Host' className='w-32 h-32 object-cover rounded-full mb-4' />
        <h2 className='font-bold text-2xl mb-1'>{name}</h2>
        <p className='text-sm text-gray-600'>{description}</p>
      </div>
    </>
  )
}

function HostInfo({ reviews, rating, hostingYears }) {
  // NOTE : 호스트 정보 - 후기, 평점, 호스팅 경력
  return (
    <div className='ml-8'>
      <div className='text-center'>
        <p className='text-xs text-gray-500'>후기</p>
        <p className='text-lg font-bold whitespace-nowrap'>{reviews}개</p>
        <hr className='my-2 border-gray-300' />
      </div>
      <div className='text-center'>
        <p className='text-xs text-gray-500'>평점</p>
        <p className='text-lg font-bold whitespace-nowrap'>{rating}★</p>
        <hr className='my-2 border-gray-300' />
      </div>
      <div className='text-center'>
        <p className='text-xs text-gray-500'>경력</p>
        <p className='text-lg font-bold whitespace-nowrap'>{hostingYears}년</p>
      </div>
    </div>
  )
}

function SafePaymentNotice() {
  // NOTE : 안전 결제 문구 컴포넌트
  // FIXME : 이미지 크기가 안 줄여짐

  return (
    <div className='mt-4 flex items-center'>
      <img src={safePurchasingSvg} alt='Safe Purchasing' className='pr-3' />
      <p className='text-xs'>
        안전한 결제를 위해 에어비앤비 웹사이트나 앱 외부에서 송금하거나 대화를 나누지 마세요.
      </p>
    </div>
  )
}

function SuperHostDetail({ responseRate, responseTime, name }) {
  // NOTE : 슈퍼 호스트가 아닐 때 띄워줄 컴포넌트
  // TODO : 메시지 보내기 기능?
  // TODO : 슈퍼호스트일 때 컴포넌트 정보 바뀌어야 함
  // FIXME : 슈퍼호스트 텍스트 넣을 때 호스트 카드 찌그러지는 문제
  return (
    <>
      <div className='mb-4'>
        <h3 className='text-xl font-bold mb-2'>{name}님은 슈퍼호스트입니다.</h3>
        <p>
          슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수 있도록
          최선을 다하는 호스트입니다.
        </p>
      </div>
      <h3 className='text-xl font-bold mb-2'>호스트 상세 정보</h3>
      <p>응답률: {responseRate}</p>
      <p>{responseTime}</p>
      <button className='mt-4 bg-black text-white p-2 rounded'>호스트에게 메시지 보내기</button>
      <hr className='mt-4 mb-4 border-gray-300' />
    </>
  )
}


function HostSection() {
  // TODO : 거주지에 address 넣는 부분, 더보기 버튼
  const hostData = {
    address: '가평군, 한국',
    isSuperHost: true, // true일 때 : 896*384, true일 때 : 896*312
    name: 'Sahee',
    rating: 5,
    reviews: 300,
    hostingYears: 2,
    responseRate: '100%',
    responseTime: '몇 시간 이내에 응답',
    imgSrc:
      'https://a0.muscache.com/im/pictures/user/User-65974611/original/2a048f11-2a58-4d87-acf6-c07bc987da9b.jpeg?im_w=240',
  }

  return (
    <div className='flex flex-col justify-center p-5'>
      <h2 className='text-2xl font-bold mb-5'>호스트 소개</h2>
      <div className='max-w-7xl w-full pt-10 px-6 pb-6 flex'>
        <div className='bg-white p-10 rounded-3xl shadow-lg flex flew-nowrap items-center w-1/3 max-w-md mx-auto'>
          <div className='flex flex-col items-center'>
            <HostProfile
              imgSrc={hostData.imgSrc}
              name={hostData.name}
              description={hostData.isSuperHost ? '슈퍼호스트' : '호스트'}
              reviews={1}
              rating={4.89}
              experience={5}
            />
          </div>
          <div className='ml-3'>
            <HostInfo
              reviews={hostData.reviews}
              rating={hostData.rating}
              hostingYears={hostData.hostingYears}
            />
          </div>
        </div>
        <div className='flex-grow ml-8'>
          {hostData.isSuperHost ? (
            <SuperHostDetail
              responseRate={hostData.responseRate}
              responseTime={hostData.responseTime}
              name={hostData.name}
            />
          ) : (
            <div></div>
          )}

          <SafePaymentNotice />
        </div>
      </div>
    </div>
  )
}

export default HostSection
