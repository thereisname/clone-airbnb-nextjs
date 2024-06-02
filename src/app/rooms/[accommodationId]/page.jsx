'use client'

import React, { useEffect, useState } from 'react'
import DetailLayout from './DetailLayout'
import { useParams } from 'next/navigation'

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
  const { accommodationId } = useParams()
  const [accommodation, setAccommodation] = useState(null)
  const [error, setError] = useState(null)

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

  if (error) {
    return <div>{error}</div>
  }

  if (!accommodation) {
    return <div>Loading...</div>
  }

  return <DetailLayout accommodation={accommodation} />
}

export default AccommodationDetailPage
