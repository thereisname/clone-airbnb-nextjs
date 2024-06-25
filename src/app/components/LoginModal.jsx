import Image from 'next/image'

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50' onClick={onClose}>
      <div className='absolute inset-0 bg-black opacity-50' onClick={onClose}></div>
      <div
        className='bg-white p-4 rounded shadow-lg max-w-md w-full z-50 max-h-full overflow-y-auto relative'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-between items-center mb-4'>
          {' '}
          {/* 이 부분이 fixed 박혀야 될 거 */}
          <div className='text-center font-bold w-full'>로그인 또는 회원 가입</div>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-800 absolute right-4 top-4'
          >
            &times;
          </button>
        </div>
        <hr className='border-gray-300 mb-4' /> {/* 경계선 */}
        <div className='font-bold text-gray-700 mb-4 text-xl'>
          에어비앤비에 오신 것을 환영합니다.
        </div>
        <input type='text' placeholder='국가/지역' className='border p-2 mb-2 w-full' />
        <input type='text' placeholder='전화번호' className='border p-2 mb-2 w-full' />
        <div className='text-xs text-gray-500 mb-4'>
          전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및 데이터 요금이
          부과됩니다.{' '}
          <a href='#' className='text-black underline'>
            개인정보 처리방침
          </a>
        </div>
        <button className='bg-pink-600 text-white py-2 px-4 rounded mb-4 w-full'>계속</button>
        <div className='flex items-center my-4'>
          <hr className='flex-grow border-gray-300' />
          <span className='px-2 text-gray-500 whitespace-nowrap'>또는</span>
          <hr className='flex-grow border-gray-300' />
        </div>
        <button className='flex items-center border border-gray-300 py-2 px-4 rounded mb-2 w-full'>
          <Image
            width={100}
            height={100}
            src='/assets/login/NaverLogin.svg'
            alt='네이버'
            className='w-6 h-6 mr-2'
          />
          <span className='text-center w-full'>네이버로 로그인하기</span>
        </button>
        <button className='flex items-center border border-gray-300 py-2 px-4 rounded mb-2 w-full'>
          <Image
            width={100}
            height={100}
            src='/assets/login/FacebookLogin.svg'
            alt='페이스북'
            className='w-6 h-6 mr-2'
          />
          <span className='text-center w-full'>페이스북으로 로그인하기</span>
        </button>
        <button className='flex items-center border border-gray-300 py-2 px-4 rounded mb-2 w-full'>
          <Image
            width={100}
            height={100}
            src='/assets/login/GoogleLogin.svg'
            alt='구글'
            className='w-6 h-6 mr-2'
          />
          <span className='text-center w-full'>구글로 로그인하기</span>
        </button>
        <button className='flex items-center border border-gray-300 py-2 px-4 rounded mb-2 w-full'>
          <Image
            width={100}
            height={100}
            src='/assets/login/AppleLogin.svg'
            alt='애플'
            className='w-6 h-6 mr-2'
          />
          <span className='text-center w-full'>애플로 로그인하기</span>
        </button>
        <button className='flex items-center border border-gray-300 py-2 px-4 rounded w-full'>
          <Image
            width={100}
            height={100}
            src='/assets/login/EmailLogin.svg'
            alt='이메일'
            className='w-6 h-6 mr-2'
          />
          <span className='text-center w-full'>이메일로 로그인하기</span>
        </button>
      </div>
    </div>
  )
}

export default LoginModal
