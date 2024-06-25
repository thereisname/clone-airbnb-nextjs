import React, { useRef, useEffect, useCallback } from 'react'
import DestinationModal from '@/app/components/DestinationModal'
import SearchCalendar from '@/app/components/SearchCalendar'
import GuestSearch from '@/app/components/GuestSearch'

const SearchModal = ({
  closeModal,
  activeSection,
  setSelectedLocation,
  selectedLocation,
  setActiveSection,
  checkInDate,
  checkOutDate,
  onDateClick,
  handleGuestsChange,
}) => {
  const modalRef = useRef(null)

  const handleClickOutside = useCallback(
    (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal()
      }
    },
    [closeModal],
  )

  const handleScroll = useCallback(() => {
    closeModal()
  }, [closeModal])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('scroll', handleScroll, true)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('scroll', handleScroll, true)
    }
  }, [handleClickOutside, handleScroll])

  const renderContent = () => {
    switch (activeSection) {
      case 'destination':
        return (
          <DestinationModal
            setSelectedLocation={setSelectedLocation}
            selectedLocation={selectedLocation}
            setActiveSection={setActiveSection}
          />
        )
      case 'checkin':
      case 'checkout':
        return (
          <SearchCalendar
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
      className={`bg-white rounded-[32px] search-shadow absolute z-50 top-20 ${
        activeSection === 'guests' ? 'right-0' : 'left-0'
      }`}
    >
      {renderContent()}
    </div>
  )
}

export default SearchModal
