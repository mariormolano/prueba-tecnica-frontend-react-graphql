import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from '../slices/pokemon-slice'

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
})

// Inferir tipos del store y dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
