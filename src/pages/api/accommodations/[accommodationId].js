import data from 'public/Accommodation.json'

export default function handler(req, res) {
  const { accommodationId } = req.query
  const accommodation = data.accommodationInfo.find(
    (item) => item.accommodationId === parseInt(accommodationId),
  )

  if (!accommodation) {
    return res.status(404).json({ message: 'Accommodation not found' })
  }

  res.status(200).json(accommodation)
}
