import { useRouter } from 'next/router'

export default async function handler(req, res) {
  const {
    query: { id },
  } = req

  try {
    const apiResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/accommodations/${id}`,
    )

    if (apiResponse.ok) {
      const data = await apiResponse.json()
      res.status(200).json(data)
    } else {
      res.status(apiResponse.status).json({ message: 'Accommodation not found' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
