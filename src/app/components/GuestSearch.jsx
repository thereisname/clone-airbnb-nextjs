import React, { useState } from 'react'

function usePersonSelect(initialValue, onChange, adjustAdultsIfZero) {
  const [person, setPerson] = useState(initialValue)

  const increment = () => {
    const newValue = person + 1
    setPerson(newValue)
    onChange(newValue)
    if (adjustAdultsIfZero && person === 0) {
      adjustAdultsIfZero()
    }
  }

  const decrement = () => {
    const newValue = person > 0 ? person - 1 : 0
    setPerson(newValue)
    onChange(newValue)
  }

  return [person, increment, decrement]
}

const GuestSearch = ({ onGuestsChange }) => {
  const adjustAdultsIfZero = () => {
    if (adults === 0) {
      setAdults(1)
      onGuestsChange(1, 'adults')
    }
  }

  const [adults, setAdults] = useState(0)

  const [kids, plusKids, minusKids] = usePersonSelect(
    0,
    (value) => onGuestsChange(value, 'kids'),
    adjustAdultsIfZero,
  )
  const [babies, plusBabies, minusBabies] = usePersonSelect(
    0,
    (value) => onGuestsChange(value, 'babies'),
    adjustAdultsIfZero,
  )
  const [pets, plusPets, minusPets] = usePersonSelect(
    0,
    (value) => onGuestsChange(value, 'pets'),
    adjustAdultsIfZero,
  )

  const incrementAdults = () => {
    const newValue = adults + 1
    setAdults(newValue)
    onGuestsChange(newValue, 'adults')
  }

  const decrementAdults = () => {
    const newValue = adults > 0 ? adults - 1 : 0
    setAdults(newValue)
    onGuestsChange(newValue, 'adults')
  }

  const renderButton = (count, increment, decrement) => (
    <div className='flex items-center space-x-4'>
      <button
        onClick={decrement}
        disabled={count === 0}
        className={`w-8 h-8 rounded-full border flex items-center justify-center 
          ${count === 0 ? 'text-gray-300 border-gray-300 cursor-not-allowed' : 'text-gray-500 border-gray-500'}`}
      >
        -
      </button>
      <div className='text-base'>{count}</div>
      <button
        onClick={increment}
        className='w-8 h-8 rounded-full border flex items-center justify-center text-gray-500 border-gray-500'
      >
        +
      </button>
    </div>
  )

  return (
    <div className='px-10 py-4 w-[25rem]'>
      {/* Adult */}
      <div className='flex items-center justify-between py-6 border-b'>
        <div>
          <div className='text-base font-medium'>성인</div>
          <div className='text-sm text-gray-500'>13세 이상</div>
        </div>
        {renderButton(adults, incrementAdults, decrementAdults)}
      </div>
      <hr />

      {/* Child */}
      <div className='flex items-center justify-between py-6 border-b'>
        <div>
          <div className='text-base font-medium'>어린이</div>
          <div className='text-sm text-gray-500'>2~12세</div>
        </div>
        {renderButton(kids, plusKids, minusKids)}
      </div>
      <hr />

      {/* Infant */}
      <div className='flex items-center justify-between py-6 border-b'>
        <div>
          <div className='text-base font-medium'>유아</div>
          <div className='text-sm text-gray-500'>2세 미만</div>
        </div>
        {renderButton(babies, plusBabies, minusBabies)}
      </div>
      <hr />

      {/* Pet */}
      <div className='flex items-center justify-between py-6'>
        <div>
          <div className='text-base font-medium'>반려동물</div>
          <div className='text-sm text-gray-500'>보조동물을 동반하시나요?</div>
        </div>
        {renderButton(pets, plusPets, minusPets)}
      </div>
    </div>
  )
}

export default GuestSearch
