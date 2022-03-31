import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/features/userSlice'
import movieReducer from './features/movie/movieSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
})

export default store;