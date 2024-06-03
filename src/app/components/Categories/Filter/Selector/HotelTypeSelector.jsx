import React, { useState } from 'react';

function HotelTypeSelector() {
  const [selectedType, setSelectedType] = useState('모든 유형');

  const description = () => {
    switch (selectedType) {
        case '방' :
            return '단독으로 사용하는 방이 있고, 공용 공간도 있는 형태입니다.';
        case '집 전체' :
            return '집 전체를 단독으로 사용합니다.';
        default:
            return '방, 집 전체 등 원하는 숙소 유형을 검색해 보세요.';
    }
  };

  return (
    <div className='py-6'>
      <header className="font-semibold text-2xl">숙소 유형</header>
      <p className="text-sm py-1 mb-2">{description()}</p>
      <div className="flex justify-center my-4">
        <div className="flex overflow-hidden font-bold">
          <button
            onClick={() => setSelectedType('모든 유형')}
            className={`px-16 py-6 border border-color-gray-100 ${selectedType === '모든 유형' ? 'bg-black text-white' : 'bg-white text-black'} rounded-l-2xl`}
          >
            모든 유형
          </button>
          <button
            onClick={() => setSelectedType('방')}
            className={`px-16 py-6 border border-color-gray-100 ${selectedType === '방' ? 'bg-black text-white' : 'bg-white text-black'}`}
          >
            방
          </button>
          <button
            onClick={() => setSelectedType('집 전체')}
            className={`px-16 py-6 border border-color-gray-100 ${selectedType === '집 전체' ? 'bg-black text-white' : 'bg-white text-black'} rounded-r-2xl`}
          >
            집 전체
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelTypeSelector;
