'use client'

import React from 'react'
import CardImageBox from './CardImageBox'
import Link from 'next/link'
import GuestFavorite from './GuestFavorite'
import Image from 'next/image'

export default function Cards({ accommodationInfo }) {
  return (
    <div className='card'>
      <ul className='card-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-2'>
        {accommodationInfo.map((item) => (
          <li key={item.accommodationId} className='card-item p-2'>
            <Link href={`rooms/${item.accommodationId}`} className='block'>
              <div className='relative'>
                <CardImageBox images={item.imageUrl} />
                {item.guestFavorite && (
                  <div>
                    <GuestFavorite />
                  </div>
                )}
                <div className='flex justify-between'>
                  <div className='txt mt-2 text-black'>
                    <h3 className='title font-semibold'>
                      {item.locationName.length > 21
                        ? `${item.locationName.substring(0, 15)}...`
                        : item.locationName}
                    </h3>
                    <div className='host text-gray-600'>
                      <p>호스트: {item.hostName} 님</p>
                    </div>
                    <span className='flex'>
                      <div className='price font-semibold pr-2'>
                        {' '}
                        ₩{new Intl.NumberFormat('ko-KR').format(item.pricePerDay)}
                      </div>
                      /박
                    </span>
                  </div>
                  <div className='p-2 flex justify-between font-medium'>
                    <Image
                      width={100}
                      height={100}
                      src='/assets/star1.svg'
                      alt='star icon'
                      className='w-4 h-6 pr-1'
                    />
                    {item.rating}
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
