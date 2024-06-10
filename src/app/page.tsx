import Categories from './components/Categories/Categories'
import CardGrid from './components/slider/CardGrid'

export default function Home() {
  // (1) FIXME : Root Page.tsx에 Category와 Grid 들어가야 함
  // TODO : Grid 컴포넌트명 변경
  return (
    <div>
      <Categories />
      <CardGrid />
    </div>
  )
}
