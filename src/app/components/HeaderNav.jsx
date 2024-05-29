import Search from '@/app/components/Search'
import HeaderContent from '@/app/components/HeaderContent'
import Categories from '@/app/components/Categories/Categories'

const HeaderNav = () => {
  return (
    <header className='fixed bg-white z-40 w-full main-padding-list'>
      <div className='flex py-5 items-center justify-between relative'>
        <HeaderContent />
      </div>
    </header>
  )
}

export default HeaderNav
