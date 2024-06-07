'use client'

import { useEffect, useState } from 'react'
import Header from './HeaderContent'
import SearchBar from './Search'
import CompactSearchBar from '@/app/components/CompactSearchBar'

const DynamicHeader = () => {
  const [scroll, setScroll] = useState(0)
  const [showSearchBar, setShowSearchBar] = useState(false)

  useEffect(() => {
    const updateScrollCompletion = () => {
      setScroll(window.scrollY)
    }

    window.addEventListener('scroll', updateScrollCompletion)

    return () => {
      window.removeEventListener('scroll', updateScrollCompletion)
    }
  }, [])

  const handleSearchClick = () => {
    setShowSearchBar(true)
  }

  const handleSearchClose = () => {
    setShowSearchBar(false)
  }

  return (
    <header className={`${scroll > 2 ? 'h-[78px] pb-[78px]' : 'h-52 lg:h-40 pb-52 lg:pb-40'}`}>
      <div className={`fixed top-0 left-0 bg-white w-full z-20 main-padding-list`}>
        <div className='flex items-center justify-between relative py-4'>
          <Header />
          {scroll > 2 ? (
            showSearchBar ? (
              <SearchBar onClose={handleSearchClose} />
            ) : (
              <CompactSearchBar onSearchClick={handleSearchClick} />
            )
          ) : (
            <SearchBar />
          )}
        </div>
      </div>
    </header>
  )
}

export default DynamicHeader
