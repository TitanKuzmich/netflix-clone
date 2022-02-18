import { configureStore } from '@reduxjs/toolkit'

import userReducer from 'state/reducers/user'

export const store = configureStore({
  reducer: {
    user: userReducer
  }
})