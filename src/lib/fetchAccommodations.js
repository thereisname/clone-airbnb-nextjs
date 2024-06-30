export const fetchAccommodations = async (accommodationId) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/accommodations/${accommodationId}`,
  )

  if (!response.ok) {
    throw new Error('Failed to fetch accommodations')
  }
  const data = await response.json()
  return data
}

export const fetchAccommodation = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/accommodations`)

  if (!response.ok) {
    throw new Error('Failed to fetch accommodations')
  }
  const data = await response.json()
  return data
}
