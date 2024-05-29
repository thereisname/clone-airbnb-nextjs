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
        {/* 부모 div에 relative와 z-index 추가 */}
        <div className='flex flex-col bg-white min-h-screen relative'>
          {/* header에 z-index 값 추가 */}
          <header className='fixed bg-white w-full main-padding-list z-40'>
            <div className='flex items-center justify-between relative py-5'>
              <HeaderContent />
              <Search />
            </div>
          </header>
          {/* Categories의 부모 div에 relative와 z-index 추가 */}
          <div className='flex justify-center mt-24 relative z-10'>
            <Categories padding='main-padding-list' />
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
