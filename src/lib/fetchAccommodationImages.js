export const fetchAccommodationImages = async (accommodationId) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/accommodation-images/search?accommodationId=${accommodationId}`,
  )
  if (!response.ok) {
    throw new Error('Failed to fetch accommodation images')
  }
  const data = await response.json()
  return data
}
