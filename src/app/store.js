import { configureStore } from '@reduxjs/toolkit'
import calendarDataSlice from '../features/counter/calendarDataSlice'

export default configureStore({
  reducer: {
    calendarDataSlice:calendarDataSlice
  }
})