import React, { useRef, useEffect, useCallback } from 'react'

const DetailReviewModal = ({ fetchMoreReviews, closeModal }) => {
  const loadMoreRef = useRef(null)

  const handleClickOutside = useCallback(
    (event) => {
      if (loadMoreRef.current && !loadMoreRef.current.contains(event.target)) {
        closeModal()
      }
    },
    [closeModal],
  )

  useEffect(() => {
    const currentRef = loadMoreRef.current

    const handleScroll = () => {
      fetchMoreReviews()
    }

    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll)
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll)
      }
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [fetchMoreReviews, handleClickOutside])

  return <div ref={loadMoreRef}>{/* Modal content */}</div>
}

export default DetailReviewModal
