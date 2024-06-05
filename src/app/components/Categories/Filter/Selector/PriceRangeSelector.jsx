import React, { useState } from 'react'
import { Range, getTrackBackground } from 'react-range'

// 후에 데이터에서 MIN MAX 값 불러와서 수정 예정
const MIN = 0
const MAX = 1000000

function PriceRangeSelector() {
  const [values, setValues] = useState([MIN, MAX])

  const handleInputChange = (index, event) => {
    let newValue = parseInt(event.target.value.replace(/[^\d]/g, ''), 10)
    if (isNaN(newValue)) {
      newValue = index === 0 ? MIN : MAX
    }

    // input값에 이상치 숫자를 넣으면 render Thumb가 자꾸 벗어나서 if문으로 막음
    if (newValue < MIN) newValue = MIN
    if (newValue > MAX) newValue = MAX

    const newValues = [...values]
    newValues[index] = newValue
    setValues(newValues)
  }

  return (
    <div>
      <header className='font-semibold text-2xl'>가격 범위</header>
      <p className='text-sm py-1'>1박 요금(수수료 및 세금 포함)</p>
      <div className='my-4 py-6'>
        <div className='relative'>
          <Range
            values={values}
            step={1000}
            min={MIN}
            max={MAX}
            onChange={(values) => setValues(values)}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                className='w-full h-1 bg-gray-200 rounded-lg'
                style={{
                  ...props.style,
                  background: getTrackBackground({
                    values,
                    colors: ['#ccc', 'black', '#ccc'],
                    min: MIN,
                    max: MAX,
                  }),
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                className='w-7 h-7 rounded-full'
                style={{
                  ...props.style,
                  backgroundColor: 'white',
                  border: '1px solid lightgray',
                }}
              />
            )}
          />
          <div className='flex items-center justify-around mb-2'>
            <div className='py-6'>
              <input
                type='text'
                value={`₩ ${values[0].toLocaleString()}`}
                onChange={(e) => handleInputChange(0, e)}
                className='border rounded-xl w-64 h-16 text-lg font-semibold p-1'
              />
            </div>
            <div className='text-3xl font-thin'>ㅡ</div>
            <div>
              <input
                type='text'
                value={`₩ ${values[1].toLocaleString()}`}
                onChange={(e) => handleInputChange(1, e)}
                className='border rounded-xl w-64 h-16 p-1 text-lg font-semibold'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceRangeSelector
