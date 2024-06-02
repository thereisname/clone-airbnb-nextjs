'use client'

import React from 'react'
import CardImageBox from './CardImageBox'
import GuestFavorite from './GuestFavorite'

export default function Cards({ accommodationInfo }) {
  return (
    <div className='card'>
      <ul className='card-wrap grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
        {accommodationInfo.map((item) => (
          <li className='card-item p-2' key={item.accommodationId}>
            <div className='relative'>
              <CardImageBox images={item.imageUrl} />
              {item.guestFavorite && (
                <div>
                  <GuestFavorite />
                </div>
              )}
            </div>
            <div className='txt mt-2 text-black'>
              <h3 className='title font-semibold'>{item.accommodationName}</h3>
              <div className='host text-gray-600'>
                <p>호스트: {item.hostName} 님</p>
              </div>
              <span className='price font-bold'>${item.pricePerDay}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
