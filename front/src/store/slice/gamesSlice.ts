import { createSlice } from '@reduxjs/toolkit'
import { ShortGame } from '../../types'

interface GamesState {
    games: ShortGame[]
}

// Define the initial state using that type
const initialState: GamesState = {
    games: [],
}

export const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {},
})

export default gamesSlice.reducer
