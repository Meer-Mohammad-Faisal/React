import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})



// step:
// 1. Create a Redux store using configureStore from @reduxjs/toolkit
// 2.wrap app component with Provider 
// 3. create a slice using createSlice from @reduxjs/toolkit
// 4. register reducer int the store
