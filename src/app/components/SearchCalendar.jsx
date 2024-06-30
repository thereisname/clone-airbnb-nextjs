import CalendarLayout from '@/app/rooms/[accommodationId]/CalendarLayout'
import { addMonths } from 'date-fns'
import { useState } from 'react'

const labelContext = ['정확한 날짜', '1일', '2일', '3일', '7일', '14일']

// 모달 창 아래 ['정확한 날짜', '1일', '2일', '3일', '7일', '14일'] 내용이 들어가는 부분.
function Label({ children }) {
  return (
    <button className='rounded-full border border-solid border-gray-300 bg-white px-4 py-1.5 mr-4 text-xs text-gray-500 hover:border-black hover:text-black'>
      {children}
    </button>
  )
}

export default function HeaderCalendar({ checkInDate, checkOutDate, onDateClick }) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const nextMonth = addMonths(currentMonth, 1)

  return (
    <>
      <div className='flex flex-col justify-center items-center px-20 py-8'>
        <div className='rounded-full mb-10 p-1.5 grid grid-cols-3 gap-1 bg-searchBackground'>
          <div className='bg-white px-4 py-1.5 rounded-full w-full flex justify-center text-sm'>
            날짜 지정
          </div>
          <div className='hover:bg-white px-4 py-1.5 rounded-full w-full flex justify-center text-sm'>
            월 단위
          </div>
          <div className='hover:bg-white px-4 py-1.5 rounded-full w-full flex justify-center text-sm'>
            유연한 일정
          </div>
        </div>
        <CalendarLayout
          currentMonth={currentMonth}
          nextMonth={nextMonth}
          onDateClick={onDateClick}
          selectedDates={{ checkInDate, checkOutDate }}
          setCurrentMonth={setCurrentMonth}
        />
        <div className='flex pt-5 w-full'>
          {labelContext.map((prev, index) => (
            <Label key={index}>{prev}</Label>
          ))}
        </div>
      </div>
    </>
  )
}
