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
          <header className={`fixed py-5 bg-white w-full main-padding-list`}>
            <div className='flex items-center justify-between relative'>
              <HeaderContent />
            </div>
          </header>
          <Search />
          <Categories padding={'main-padding-list'} />
        </div>
        <main className='my-5 w-full flex justify-center main-padding-list'>{children}</main>
        <FooterComponent />
      </body>
    </html>
  )
}

export default RootLayout
