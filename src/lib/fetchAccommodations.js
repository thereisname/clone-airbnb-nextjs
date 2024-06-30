export const fetchAccommodations = async (accommodationId) => {
  const response = await fetch(`http://localhost:8080/api/accommodations/${accommodationId}`)

  if (!response.ok) {
    throw new Error('Failed to fetch accommodations')
  }
  const data = await response.json()
  return data
}

export const fetchAccommodation = async () => {
  const response = await fetch(`http://localhost:8080/api/accommodations`)

  if (!response.ok) {
    throw new Error('Failed to fetch accommodations')
  }
  const data = await response.json()
  return data
}
