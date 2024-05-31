import Category from './components/Categories/Category'
import Grid from './components/slider/Grid'

export default function Home() {
  // (1) FIXME : Root Page.tsx에 Category와 Grid 들어가야 함 
  // TODO : Grid 컴포넌트명 변경
  return (
    <div className='w-full'>
      <div className='flex justify-center mt-12 relative z-10'>
        <Category />
      </div>
      <Grid></Grid>
    </div>
  )
}
