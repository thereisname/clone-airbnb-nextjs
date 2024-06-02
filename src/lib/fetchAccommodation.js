import fs from 'fs'
import path from 'path'

export const fetchAccommodation = async (accommodationId) => {
  const filePath = path.join(process.cwd(), 'public', 'Accommodation.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const accommodations = JSON.parse(fileContents).accommodationInfo

  return accommodations.find((acc) => acc.accommodationId === parseInt(accommodationId, 10))
}
