import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterState } from '../../types'

const initialState: FilterState = {
    genres: [],
    platforms: [],
    sortBy: '',
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
