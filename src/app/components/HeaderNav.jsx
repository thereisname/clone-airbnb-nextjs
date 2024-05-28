import Search from '@/app/components/Search'
import HeaderContent from '@/app/components/HeaderContent'

const HeaderNav = () => {
  return (
    <header className="py-5 bg-white">
      <HeaderContent />
      <Search />
    </header>
  )
}

export default HeaderNav
