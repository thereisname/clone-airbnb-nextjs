'use client'

const CompactSearchBar = ({ onSearchClick }) => {
  return (
    <div
      className={`h-12 flex items-center absolute left-1/3 lg:left-1/2 transform -translate-x-1/2 top-4 w-full max-w-[21rem] rounded-full z-40 bg-white search-shadow`}
      role='group'
    >
      {/* 여행지 검색 */}
      <div className={`flex items-center pl-2 h-full rounded-full}`} onClick={onSearchClick}>
        <label className='flex flex-col p-4'>
          <span className='text-neutral-800 text-sm font-medium'>어디든지</span>
        </label>
      </div>

      <div className='h-2/5 border border-solid border-gray-200' />

      {/* 체크인, 체크아웃 */}
      <div className={`flex items-center p-4 h-full rounded-full}`}>
        <label className='flex flex-col' role='group'>
          <span className='text-neutral-800 text-sm font-medium'>언제든 일주일</span>
        </label>
      </div>

      <div className='h-2/5 border border-solid border-gray-200' />

      {/* 여행자 선택 */}
      <div className={`flex items-center px-4 rounded-r-full rounded-full h-full`}>
        <label className='flex flex-col'>
          <span className='text-neutral-800 text-sm'>게스트 추가</span>
        </label>
      </div>
      <button className='absolute right-0'>
        <img src='/assets/Group.svg' alt='검색 버튼' />
      </button>
    </div>
  )
}

export default CompactSearchBar
