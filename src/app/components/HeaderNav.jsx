import Search from '@/app/components/Search'
import HeaderContent from '@/app/components/HeaderContent'
import Categories from '@/app/components/Categories/Categories'

const HeaderNav = () => {
  return (
    <header className={`fixed py-5 bg-white z-40 w-full main-padding-list`}>
      <div className='flex items-center justify-between relative'>
        <HeaderContent />
        <Search />
      </div>
      <Categories />
    </header>
  )
}

export default HeaderNav
