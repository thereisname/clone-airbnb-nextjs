const Search = () => {
  return (
    <div className='absolute w-full top-16 lg:top-3'>
      <nav className='absolute left-1/2 transform -translate-x-1/2'>
        <ul className='flex justify-center gap-4'>
          <li>숙소</li>
          <li>체험</li>
          <li>온라인 체험</li>
        </ul>
      </nav>

      <div
        className='h-16 flex items-center absolute left-1/2 transform -translate-x-1/2 top-12 rounded-full search-shadow bg-white z-40'
        role='group'
      >
        <div className='flex items-center w-52 px-6 h-full rounded-full hover:bg-gray-200'>
          <label className='flex flex-col' role='group'>
            <span className='text-neutral-800 text-xs'>여행지</span>
            <input className='text-neutral-500 text-sm bg-transparent' placeholder='여행지 검색' />
          </label>
        </div>

        <div className='h-2/5 border border-solid border-gray-200'></div>

        <div className='flex items-center w-32 px-6'>
          <label className='flex flex-col'>
            <span className='text-neutral-800 text-xs'>체크인</span>
            <div className='text-neutral-500 text-sm'>날짜 추가</div>
          </label>
        </div>

        <div className='h-2/5 border border-solid border-gray-200'></div>

        <div className='flex items-center w-32 px-6'>
          <label className='flex flex-col'>
            <span className='text-neutral-800 text-xs'>체크아웃</span>
            <div className='text-neutral-500 text-sm'>날짜 추가</div>
          </label>
        </div>

        <div className='h-2/5 border border-solid border-gray-200'></div>

        <div className='flex items-center w-52 px-6 rounded-r-full'>
          <label className='flex flex-col'>
            <span className='text-neutral-800 text-xs'>여행자</span>
            <div className='text-neutral-500 text-sm'>게스트 추가</div>
          </label>
        </div>

        <button className='absolute right-3 w-12 h-12'>
          <img src='/assets/Group2.svg' alt='검색 버튼' />
        </button>
      </div>
    </div>
  )
}

export default Search
