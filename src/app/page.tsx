import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-full'>
      <div className='flex justify-center'>
        <Link href={'/rooms/1'}>
            <button className='text-2xl font-bold border-solid border-2 border-black py-4 px-4 mt-4'>
              Detail Page로 이동
            </button>
        </Link>
      </div>
    </div>
  )
}
