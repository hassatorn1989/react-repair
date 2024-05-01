import { configureStore } from '@reduxjs/toolkit'
import prefixReducers from '../features/prefix/prefixSlice'

export const store = configureStore({
    reducer: {
        // Add reducers here
        prefix: prefixReducers
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

