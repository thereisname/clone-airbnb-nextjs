import { differenceInDays } from "date-fns"

export const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(price)
  } // 10000을 ₩10,000으로 변환하는 함수
  

  export const calculateNights = (checkInDate, checkOutDate) => {
    if (!checkInDate || !checkOutDate) {
      return 1
    }
    if (checkInDate && checkOutDate) {
      return differenceInDays(checkOutDate, checkInDate)
    }
    return 0
  } // 박 수(night) 계산 함수