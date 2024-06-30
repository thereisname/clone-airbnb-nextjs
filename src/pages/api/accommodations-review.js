// pages/api/accommodations-review.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/accommodations-review`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(req.body), // 전달받은 body 그대로 전송
        },
      )

      if (response.ok) {
        const data = await response.json()
        res.status(201).json(data)
      } else {
        res.status(response.status).json({ message: 'Failed to save review' })
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' })
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}
