import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {FilterState} from '../../types'

// Define the initial state using that type
const initialState: FilterState = {
    genres: [],
    platforms: [],
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setGenres: (state, action: PayloadAction<string[]>) => {
            state.genres = action.payload
        },
        setPlatforms: (state, action: PayloadAction<string[]>) => {
            state.platforms = action.payload
        },
        resetAll: (state) => {
            state.genres = []
            state.platforms = []
        },
    },
})

export const { setGenres, setPlatforms, resetAll } = filterSlice.actions

export default filterSlice.reducer
