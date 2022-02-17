import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    // [pokemonApi.reducerPath]: pokemonApi.reducer
  },
  // middleware: (getDefaultMiddleware) => {}
    // getDefaultMiddleware().concat(pokemonApi.middleware)
})