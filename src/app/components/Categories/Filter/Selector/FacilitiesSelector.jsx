import { useState } from 'react'

function FacilitiesSelector() {
  const facilities = [
    { name: 'wifi', label: 'Wi-Fi' },
    { name: 'kitchen', label: '부엌' },
    { name: 'washingMachine', label: '세탁기' },
    { name: 'dryer', label: '건조기' },
    { name: 'airConditioner', label: '에어컨' },
    { name: 'heater', label: '난방' },
  ]

  const [selectedFacilities, setSelectedFacilities] = useState({
    wifi: false,
    kitchen: false,
    washingMachine: false,
    dryer: false,
    airConditioner: false,
    heater: false,
  })

  const checkboxChange = (event) => {
    const { name, checked } = event.target
    setSelectedFacilities({
      ...selectedFacilities,
      [name]: checked,
    })
  }

  return (
    <div className='py-6'>
      <header className='font-semibold text-2xl'>편의 시설</header>
      <div className='my-6'>
        <h3 className='font-semibold'>필수</h3>
        <div className='grid grid-cols-2 my-4'>
          {facilities.map((facility) => (
            <label key={facility.name} className='flex items-center py-4'>
              <input
                type='checkbox'
                name={facility.name}
                checked={selectedFacilities[facility.name]}
                onChange={checkboxChange}
                className='mr-4 size-5 accent-black'
              />
              {facility.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FacilitiesSelector
