'use client'

import React, { useEffect, useState } from 'react'
import CardUI from './CardUI'

const CardGrid = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('./Accommodation.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('네트워크 응답 없음')
        }
        return response.json()
      })
      .then((data) => {
        console.log('Fetched data:', data)
        setData(data)
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error)
      })
  }, [])

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div className='card'>
      <ul className='card-wrap grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 px-10'>
        {data.accommodationInfo.map((item) => (
          <CardUI key={item.accommodationId} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default CardGrid
