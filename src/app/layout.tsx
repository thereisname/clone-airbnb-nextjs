import HeaderNav from '@/app/components/HeaderNav'
import FooterComponent from '@/app/components/FooterComponent'
import Categories from '@/app/components/Categories/Categories'
import '@/app/styles/globals.css'
import HeaderContent from './components/HeaderContent'
import Search from './components/Search'
import Grid from '@/app/components/slider/Grid'
import Category from '@/app/components/Categories/Category'

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className='flex flex-col bg-white min-h-screen relative'>
          <header className='fixed bg-white w-full main-padding-list z-40'>
            <div className='flex items-center justify-between relative py-5'>
              <HeaderContent />
              <Search />
            </div>
          </header>
          <div className='flex justify-center mt-12 z-10'>
            <Category />
          </div>
          {/* main 요소에 relative와 z-index 추가 */}
          <main className='my-5 w-full flex justify-center main-padding-list relative z-20'>
            {children}
          </main>
          
          <FooterComponent />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
