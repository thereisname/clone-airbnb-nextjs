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
import { fetchAccommodations } from '@/lib/fetchAccommodations'

//refactor : fetchAccommodations -> fetch한 후에 map으로 뿌려주기

const AccommodationDetailPage = () => {
  const { accommodationId } = useParams()
  const [accommodationName, setAccommodationName] = useState('')
  const [locationName, setLocationName] = useState('')
  const [reviewCount, setReviewCount] = useState(0)
  const [error, setError] = useState(null)
  const [checkInDate, setCheckInDate] = useState(null)
  const [checkOutDate, setCheckOutDate] = useState(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAccommodations(accommodationId)
        setAccommodationName(data.accommodationName)
        setLocationName(data.locationName)
        setReviewCount(data.reviewCount)
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

  // if (!accommodationName) {
  //   return <div>Loading...</div>
  // }

  return (
    <div className='main-padding-detail'>
      <div className='max-w-full xl:w-[1120px] mx-auto'>
        <DetailTitle accommodationName={accommodationName} />
        {/* <DetailGallery images={accommodation.imageUrl} /> */}

        <div className='flex flex-wrap'>
          <div className='flex-1'>
            <div className='mb-8'>
              <DetailSubTitle locationName={locationName} reviewCount={reviewCount} />
            </div>
            <hr></hr>
            {/* <div className='my-8'>
              <DetailHostInfo
                hostName={accommodation.hostName}
                hostSince={accommodation.hostSince}
              />
            </div> */}
            <hr></hr>
            {/* <div className='my-8'>
              <DetailFeatures amenities={accommodation.amenities} />
            </div> */}
          </div>
          {/* <div className='flex justify-center md:justify-end w-full md:w-auto'>
            <ReservationComponent
              pricePerDay={accommodationPrice}
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
              onDateClick={onDateClick}
              clearDates={clearDates}
              currentMonth={currentMonth}
              setCurrentMonth={setCurrentMonth}
              locationAlias={accommodation.locationAlias}
            />
          </div> */}
        </div>
        <div className=''>
          {/* <DetailCalendar
            py='py-12'
            locationAlias={accommodation.locationAlias}
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
            onDateClick={onDateClick}
            clearDates={clearDates}
            currentMonth={currentMonth}
            setCurrentMonth={setCurrentMonth}
          /> */}
        </div>

        <hr />
        <DetailReview />
        <hr />
        {/* <DetailAccommodationInfo desc={accommodation.desc} accommodationId={accommodationId} /> */}
      </div>
    </div>
  )
}

export default AccommodationDetailPage
