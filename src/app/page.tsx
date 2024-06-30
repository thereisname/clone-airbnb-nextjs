'use client'
import Categories from './components/Categories/Categories'
import FooterComponent from './components/FooterComponent'
import CardGrid from './components/slider/CardGrid'
import DynamicHeader from './components/DynamicHeader'

export default function Home() {
  return (
    <div>
      <DynamicHeader />
      <Categories />
      <CardGrid />
      <footer className='bg-gray-100 main-padding-list'>
        <FooterComponent />
      </footer>
    </div>
  )
}
