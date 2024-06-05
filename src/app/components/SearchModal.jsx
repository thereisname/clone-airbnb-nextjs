import React, { useRef, useEffect } from 'react'
import DestinationModal from '@/app/components/DestinationModal'
import SearchCalendar from '@/app/components/SearchCalendar'
import GuestSearch from '@/app/components/GuestSearch'

const SearchModal = ({
  closeModal,
  activeSection,
  setTravel,
  setActiveSection,
  checkInDate,
  checkOutDate,
  onDateClick,
  handleGuestsChange,
}) => {
  const modalRef = useRef(null)

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal()
    }
  }

  const handleScroll = () => {
    closeModal()
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('scroll', handleScroll, true)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('scroll', handleScroll, true)
    }
  }, [])

  const renderContent = () => {
    switch (activeSection) {
      case 'destination':
        return <DestinationModal setTravel={setTravel} setActiveSection={setActiveSection} />
      case 'checkin':
      case 'checkout':
        return (
          <SearchCalendar
            setActiveSection={setActiveSection}
            activeSection={activeSection}
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
            onDateClick={onDateClick}
          />
        )
      case 'guests':
        return <GuestSearch onGuestsChange={handleGuestsChange} />
      default:
        return null
    }
  }

  return (
    <div
      ref={modalRef}
      className={`bg-white rounded-[32px] search-shadow absolute z-50 top-20 ${activeSection === 'guests' ? 'right-0' : 'left-0'}`}
    >
      {renderContent()}
    </div>
  )
}

export default SearchModal
