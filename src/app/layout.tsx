import HeaderNav from '@/app/components/HeaderNav'
import FooterComponent from '@/app/components/FooterComponent'
import Categories from '@/app/components/Categories/Categories'
import '@/app/styles/globals.css'
import HeaderContent from './components/HeaderContent'
import Search from './components/Search'

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className='flex flex-col bg-white h-60'>
          <header className={`fixed bg-white w-full main-padding-list z-20`}>
            <div className='flex py-5 items-center justify-between relative'>
              <HeaderContent />
              <Search />
            </div>
            <div className='bg-white h-44'>
              <Categories />
            </div>
          </header>
        </div>
        <main className='my-5 w-full flex justify-center main-padding-list'>{children}</main>
        <FooterComponent />
      </body>
    </html>
  )
}

export default RootLayout
