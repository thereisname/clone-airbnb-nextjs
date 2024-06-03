'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import DetailTitle from './DetailTitle'
import DetailGallery from './DetailGallery'
import DetailFeatures from './DetailFeature'
import DetailHostInfo from './DetailHostInfo'
import DetailSubTitle from './DetailSubTitle'
import DetailReview from './DetailReview'
import DetailCalendar from './DetailCalendar'
import DetailAccommodationInfo from './DetailAccommodation'
import ReservationComponent from './ReservationComponent'

const fetchAccommodation = async (accommodationId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/accommodations/${accommodationId}`,
  )
  if (!res.ok) {
    throw new Error('Failed to fetch accommodation data')
  }
  return res.json()
}

const AccommodationDetailPage = () => {
  // @ts-ignore
  const { accommodationId } = useParams()
  const [accommodation, setAccommodation] = useState(null)
  const [error, setError] = useState(null)
  const [checkInDate, setCheckInDate] = useState(null)
  const [checkOutDate, setCheckOutDate] = useState(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAccommodation(accommodationId)
        setAccommodation(data)
      } catch (err) {
        setError(err.message)
      }
    }

    if (accommodationId) {
      fetchData()
    }
  }, [accommodationId])

  const onDateClick = (day) => {
    if (!checkInDate || (checkInDate && checkOutDate)) {
      setCheckInDate(day)
      setCheckOutDate(null)
    } else if (day < checkInDate) {
      setCheckInDate(day)
    } else {
      setCheckOutDate(day)
    }
  }

  const clearDates = () => {
    setCheckInDate(null)
    setCheckOutDate(null)
  }

  if (error) {
    return <div>{error}</div>
  }

  if (!accommodation) {
    return <div>Loading...</div>
  }

  return (
    <div className='main-padding-detail'>
      <div className='max-w-full xl:w-[1120px] mx-auto'>
        <DetailTitle accommodation={accommodation} />
        <DetailGallery images={accommodation.imageUrl} />
        <div className='flex flex-wrap my-10'>
          <div className='flex-1'>
            <DetailSubTitle accommodation={accommodation} />
            <DetailFeatures amenities={accommodation.amenities} />
            <DetailHostInfo hostName={accommodation.hostName} hostSince={accommodation.hostSince} />
          </div>
          <div className='flex justify-center md:justify-end w-full md:w-auto'>
            <ReservationComponent 
              pricePerDay={accommodation.pricePerDay}
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
              onDateClick={onDateClick}
              clearDates={clearDates}
              currentMonth={currentMonth}
              setCurrentMonth={setCurrentMonth}
            />
          </div>
        </div>
        <DetailCalendar 
          py='py-12'
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          onDateClick={onDateClick}
          clearDates={clearDates}
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
        />
        <hr />
        <DetailReview reviews={accommodation.reviews} />
        <hr />
        <DetailAccommodationInfo desc={accommodation.desc} />
      </div>
    </div>
  )
}

export default AccommodationDetailPage
