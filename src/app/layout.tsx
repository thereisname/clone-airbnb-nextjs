import FooterComponent from '@/app/components/FooterComponent'
import '@/app/styles/globals.css'
import HeaderContent from './components/HeaderContent'
import Search from './components/Search'

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <header
          className={`fixed top-0 left-0 right-0 bg-white w-full z-20 h-52 lg:h-40 main-padding-list`}
        >
          <div className='flex items-center justify-between relative py-5'>
            <HeaderContent />
            <Search />
          </div>
        </header>
        {/* main 요소에 relative와 z-index 추가 */}
        <main className='relative pt-56 lg:pt-48'>{children}</main>
        <FooterComponent />
      </body>
    </html>
  )
}

export default RootLayout
