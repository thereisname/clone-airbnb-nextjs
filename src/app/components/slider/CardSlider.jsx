'use client'

import React, { useEffect, useState } from 'react'
import Cards from './Cards'

const CardSlider = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/Accommodation.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('네트워크 응답 없음')
        }
        return response.json()
      })
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error)
      })
  }, [])

  return (
    <div className='grid relative mt-16 pb-8 max-w-screen-full'>
      {data ? <Cards accommodationInfo={data.accommodationInfo} /> : <div>Loading...</div>}
    </div>
  )
}

export default CardSlider
