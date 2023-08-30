import { configureStore } from '@reduxjs/toolkit'
import { api } from './api.ts'
import { setupListeners } from '@reduxjs/toolkit/query'
import { filterSlice } from './filter/filterSlice.ts'

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        filter: filterSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
