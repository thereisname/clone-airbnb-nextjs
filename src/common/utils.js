export default function formatPrice(price) {
    return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(price)
  } // 10000을 ₩10,000으로 변환하는 함수
  