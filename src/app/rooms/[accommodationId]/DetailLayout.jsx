import DetailCalendar from '@/app/rooms/[accommodationId]/DetailCalendar'
import DetailFeatures from '@/app/rooms/[accommodationId]/DetailFeature'
import DetailGallery from '@/app/rooms/[accommodationId]/DetailGallery'
import DetailHostInfo from '@/app/rooms/[accommodationId]/DetailHostInfo'
import DetailSubTitle from '@/app/rooms/[accommodationId]/DetailSubTitle'
import DetailTitle from '@/app/rooms/[accommodationId]/DetailTitle'
import ReservationComponent from '@/app/rooms/[accommodationId]/ReservationComponent'
// import Layout from './Layout.jsx'
import DetailReview from '@/app/rooms/[accommodationId]/DetailReview.jsx'
import DetailAccommodationInfo from '@/app/rooms/[accommodationId]/DetailAccommodation.jsx'

const DetailLayout = ({ children }) => {
  return (
    // <Layout padding={'main-padding-detail'}>
    <div className='max-w-full xl:w-[1120px] gap-10'>
      <DetailTitle />
      <DetailGallery />
      <div className='flex flex-wrap my-10'>
        <div className='flex-1'>
          <DetailSubTitle />
          <DetailFeatures />
          <DetailHostInfo />
        </div>
        <div className='flex justify-center md:justify-end w-full md:w-auto'>
          <ReservationComponent />
          {/* 그거 이름이 모였지?? 가격정보?? */}
        </div>
      </div>
      <DetailCalendar py={'py-12'} />
      <hr />
      <DetailReview />
      <hr />
      <DetailAccommodationInfo />
    </div>
    // </Layout>
  )
}

export default DetailLayout
