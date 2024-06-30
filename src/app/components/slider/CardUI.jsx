'use client'

import React from 'react'
import CardImageSlider from './CardImageSlider'
import GuestFavorite from './GuestFavorite'
import HeartFavorite from './HeartFavorite'
import Link from 'next/link'
import Image from 'next/image'

const CardUI = ({ item }) => {
  return (
    <li className='card-item p-2 w-full'>
      <div className='z-10 grid grid-cols-1'>
        <div className='top-1 flex justify-between relative'>
          {item.guestFavorite && (
            <div className='w-1/2'>
              <GuestFavorite />
            </div>
          )}
          <div className='w-1/2 flex justify-end'>
            <HeartFavorite />
          </div>
        </div>
      </div>

      <Link href={`rooms/${item.accommodationId}`} className='block'>
        <div className='relative'>
          <CardImageSlider images={item.images} />
        </div>
      </Link>

      <div className='flex justify-between'>
        <div className='txt mt-2 text-black'>
          <h3 className='title font-semibold'>
            {item.locationName.length > 21
              ? `${item.locationName.substring(0, 15)}...`
              : item.locationName}
          </h3>
          <div className='host text-gray-600'>
            <p>호스트: {item.hosts.map((host) => host?.member?.name)} 님</p>
          </div>
          <span className='flex'>
            <div className='price font-semibold pr-2'>
              ₩{new Intl.NumberFormat('ko-KR').format(item.accommodationPrice)}
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
          {item.accommodationRating}
        </div>
      </div>
    </li>
  )
}

export default CardUI
