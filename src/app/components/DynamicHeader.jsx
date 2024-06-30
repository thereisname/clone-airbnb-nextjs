'use client'

import { useEffect, useState } from 'react'
import Header from './HeaderContent'
import SearchBar from './Search'
import CompactSearchBar from '@/app/components/CompactSearchBar'
import { usePathname } from 'next/navigation'

const DynamicHeader = () => {
  const pathname = usePathname()
  const isAccommodationDetailPage = pathname && pathname.startsWith('/rooms/')
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const updateScrollCompletion = () => {
      setScroll(window.scrollY)
    }

    window.addEventListener('scroll', updateScrollCompletion)

    return () => {
      window.removeEventListener('scroll', updateScrollCompletion)
    }
  }, [])

  return (
    <header className={`${scroll > 2 ? 'h-[78px] pb-[78px]' : 'h-52 lg:h-40 pb-52 lg:pb-40'}`}>
      <div
        className={`fixed top-0 left-0 bg-white w-full z-20 ${isAccommodationDetailPage ? 'main-padding-detail' : 'main-padding-list'}`}
      >
        <div className={`flex items-center justify-center relative py-4`}>
          <div className={`${isAccommodationDetailPage ? 'w-full xl:w-[1120px]' : 'w-full'}`}>
            <Header />
          </div>
          {scroll > 2 ? <CompactSearchBar /> : <SearchBar />}
        </div>
      </div>
    </header>
  )
}

export default DynamicHeader
