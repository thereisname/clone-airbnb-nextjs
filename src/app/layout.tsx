import HeaderNav from '@/app/components/HeaderNav'
import FooterComponent from '@/app/components/FooterComponent'
import Categories from '@/app/components/Categories/Categories'
import '@/app/styles/globals.css'

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col bg-white">
          <HeaderNav />
          <Categories />
          <main className='my-5 w-full flex justify-center'>
            {children}
          </main>
        </div>
        <FooterComponent />
      </body>
    </html>
  )
}

export default RootLayout