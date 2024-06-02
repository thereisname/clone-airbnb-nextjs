import { configureStore } from '@reduxjs/toolkit'
import accommodationReducer from '@/store/slices/accommodationSlice'

const store = configureStore({
  reducer: {
    accommodation: accommodationReducer,
  },
})

export default store
