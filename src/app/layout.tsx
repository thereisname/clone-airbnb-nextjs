import FooterComponent from '@/app/components/FooterComponent'
import '@/app/styles/globals.css'
import DynamicHeader from '@/app/components/DynamicHeader'

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <DynamicHeader />
        <main className={'relative'}>{children}</main>
        <FooterComponent />
      </body>
    </html>
  )
}

export default RootLayout
