import React from 'react'
import DetailTitle from './DetailTitle'
import DetailGallery from './DetailGallery'
import DetailFeatures from './DetailFeature'
import DetailHostInfo from './DetailHostInfo'
import DetailSubTitle from './DetailSubTitle'
import DetailReview from './DetailReview'
import DetailCalendar from './DetailCalendar'
import DetailAccommodationInfo from './DetailAccommodation'
import ReservationComponent from './ReservationComponent'

const DetailLayout = ({ accommodation }) => {
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
            <ReservationComponent pricePerDay={accommodation.pricePerDay} />
          </div>
        </div>
        <DetailCalendar py='py-12' />
        <hr />
        <DetailReview reviews={accommodation.reviews} />
        <hr />
        <DetailAccommodationInfo desc={accommodation.desc} />
      </div>
    </div>
  )
}

export default DetailLayout
