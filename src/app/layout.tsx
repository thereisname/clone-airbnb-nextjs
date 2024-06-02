import HeaderNav from '@/app/components/HeaderNav'
import FooterComponent from '@/app/components/FooterComponent'
import '@/app/styles/globals.css'
import HeaderContent from './components/HeaderContent'
import Search from './components/Search'

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className='flex flex-col bg-white min-h-screen relative'>
          <header className='fixed bg-white w-full main-padding-list z-30'>
            <div className='flex items-center justify-between relative py-5'>
              <HeaderContent />
              <Search />
            </div>
          </header>
          {/* main 요소에 relative와 z-index 추가 */}
          <main className='my-48 justify-center main-padding-list relative'>{children}</main>
          <FooterComponent />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
