const group2 = '/assets/Group2.svg'

const InputField = ({ label, placeholder, className }) => (
  <div className={`h-full ${className}`}>
    <div className={`flex items-center rounded-full h-full ${className} hover:bg-gray-200 `}>
      <label className='flex flex-col cursor-pointer px-6'>
        <span className='text-neutral-800 text-xs'>{label}</span>
        <div className='text-neutral-500 text-sm cursor-pointer'>{placeholder}</div>
      </label>
    </div>
  </div>
)

const Search = () => {
  return (
    <div className='w-full flex justify-center mt-10 md:px-20'>
      <div className='relative lg:max-w-4xl rounded-full search-shadow bg-white flex items-center h-16'>
        <InputField label='여행지' placeholder='여행지 검색' className='w-52 rounded-l-full' />
        <div className='h-10 border border-solid border-gray-100' />
        <InputField label='체크인' placeholder='날짜 추가' className='w-32' />
        <div className='h-10 border border-solid border-gray-100' />
        <InputField label='체크아웃' placeholder='날짜 추가' className='w-32' />
        <div className='h-10 border border-solid border-gray-100' />
        <InputField label='여행자' placeholder='게스트 추가' className='w-52 rounded-r-full' />
        <button className='absolute right-3 w-12 h-12'>
          <img src={group2} alt='검색 버튼' />
        </button>
      </div>
    </div>
  )
}

export default Search
