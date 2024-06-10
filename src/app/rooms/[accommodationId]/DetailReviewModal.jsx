import React from 'react'
import { useState, useEffect, useRef } from 'react'

const initialReviews = [
  {
    id: 1,
    name: 'Junki',
    location: '서울, 한국',
    date: '2주 전',
    rating: 5.0,
    comment: '완벽한 하루였습니다. 강추합니다.',
  },
  {
    id: 2,
    name: 'Adam',
    location: '서울, 한국',
    date: '2022년 9월',
    rating: 5.0,
    comment: '아름답고 편안한 분위기의 놀라운 숙소. 적극 추천합니다.',
  },
  {
    id: 3,
    name: 'Jihyung',
    location: '서울, 한국',
    date: '2022년 9월',
    rating: 5.0,
    comment:
      '가족 여행을 위해 이 아름다운 숙소를 선택하게 되어 매우 기쁩니다. 이곳을 강력히 추천합니다!',
  },
  {
    id: 4,
    name: 'Jung Beom',
    location: '에어비앤비 가입 기간 9년',
    date: '2022년 6월 · 1년 5달',
    rating: 5.0,
    comment:
      '조용하고 여유로운 공간, 훌륭한 다이닝룸으로 지인들과 좋은 시간을 보냈고 갑니다. 가격이 되면 재방문 100프로 입니다.',
  },
  {
    id: 5,
    name: '혜란',
    location: '서울, 한국',
    date: '3주 전',
    rating: 5.0,
    comment: '편히 잘 쉬었다가 왔습니다.',
  },
  {
    id: 6,
    name: '안나',
    location: '서울, 한국',
    date: '2024년 2월',
    rating: 5.0,
    comment:
      '저희 가족 좋은 추억 쌓고 왔습니다! 가봤던 숙소중에 최고로 깨끗했습니다! 애견 동반이면 살짝 냄새가 날법도 한데,,,',
  },
  {
    id: 7,
    name: '성훈',
    location: '한국',
    date: '2023년 10월',
    rating: 5.0,
    comment:
      '아주 깨끗해요~강아지도 너무 좋아하고 조미료랑 뭐 찾는건 다 있다더라고요&사장님도 너무 친절하시고 아프신 와중에도 꼼꼼 왔으면서도 대답 다해주시고 연락도 바로 바로 연결되었어요. 이번에는...',
  },
  {
    id: 8,
    name: 'Joonho',
    location: '에어비앤비 가입 기간 4년',
    date: '2023년 9월',
    rating: 5.0,
    comment: '놀라움',
  },
  {
    id: 9,
    name: '수지',
    location: '부산, 한국',
    date: '2024년 1월',
    rating: 5.0,
    comment: '정말 멋진 숙소였습니다. 다시 방문할게요!',
  },
  {
    id: 10,
    name: '민준',
    location: '서울, 한국',
    date: '2023년 12월',
    rating: 5.0,
    comment: '아주 만족스러운 경험이었습니다.',
  },
]

const ReviewModal = ({ onClose }) => {
  const [reviews, setReviews] = useState(initialReviews.slice(0, 4))
  const [isFetching, setIsFetching] = useState(false)
  const loadMoreRef = useRef(null)

  const fetchMoreReviews = () => {
    setIsFetching(true)
    // Simulate fetching more reviews
    setTimeout(() => {
      const nextReviews = initialReviews.slice(reviews.length, reviews.length + 4)
      setReviews((prevReviews) => [...prevReviews, ...nextReviews])
      setIsFetching(false)
    }, 500)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching) {
          fetchMoreReviews()
        }
      },
      { threshold: 1.0 },
    )
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current)
    }
    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current)
      }
    }
  }, [isFetching])

  const handleClickOutside = (event) => {
    if (event.target.id === 'modal-overlay') {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div
      id='modal-overlay'
      className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
    >
      <div className='bg-white rounded-lg shadow-lg p-6 w-2/3 max-h-[80vh] overflow-y-auto relative'>
        <button className='absolute top-4 right-4 text-gray-600' onClick={onClose}>
          &times;
        </button>
        <h2 className='text-2xl font-bold mb-4'>★ 5.0 · 후기 {initialReviews.length}개</h2>

        <div>
          {reviews.map((review) => (
            <div key={review.id} className='mb-4'>
              <div className='flex items-center space-x-4'>
                <img
                  src={`https://i.pravatar.cc/50?img=${review.id}`}
                  alt={review.name}
                  className='w-12 h-12 rounded-full'
                />
                <div>
                  <div className='font-semibold'>{review.name}</div>
                  <div className='text-gray-600'>{review.location}</div>
                  <div className='text-gray-600'>{review.date}</div>
                  <div className='text-yellow-500'>
                    {'★'.repeat(review.rating)}
                    {'☆'.repeat(5 - review.rating)}
                  </div>
                </div>
              </div>
              <p className='mt-4'>{review.comment}</p>
            </div>
          ))}
        </div>
        {reviews.length < initialReviews.length && (
          <div ref={loadMoreRef} className='h-16 flex justify-center items-center'>
            {isFetching ? '로딩 중...' : '더 많은 댓글 불러오는 중...'}
          </div>
        )}
      </div>
    </div>
  )
}

export default ReviewModal
