import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ShortGame } from '../../types'
import { api } from '../api.ts'

interface GamesState {
    games: ShortGame[]
    isLoading: boolean
}

const initialState: GamesState = {
    games: [],
    isLoading: false,
}

export const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        setGames: (state, action: PayloadAction<ShortGame[]>) => {
            state.games = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(api.endpoints.getAllGames.matchPending, (state) => {
                state.isLoading = true
            })
            .addMatcher(
                api.endpoints.getAllGames.matchFulfilled,
                (state, action) => {
                    state.isLoading = false
                    state.games = action.payload
                }
            )
            .addMatcher(api.endpoints.getAllGames.matchRejected, (state) => {
                state.isLoading = false
            })
            .addMatcher(
                api.endpoints.getFilteredGames.matchPending,
                (state) => {
                    state.isLoading = true
                }
            )
            .addMatcher(
                api.endpoints.getFilteredGames.matchFulfilled,
                (state, action) => {
                    state.isLoading = false
                    state.games = action.payload
                }
            )
            .addMatcher(
                api.endpoints.getFilteredGames.matchRejected,
                (state) => {
                    state.isLoading = false
                }
            )
            .addMatcher(
                api.endpoints.getGamesByParameters.matchPending,
                (state) => {
                    state.isLoading = true
                }
            )
            .addMatcher(
                api.endpoints.getGamesByParameters.matchFulfilled,
                (state, action) => {
                    state.isLoading = false
                    state.games = action.payload
                }
            )
            .addMatcher(
                api.endpoints.getGamesByParameters.matchRejected,
                (state) => {
                    state.isLoading = false
                }
            )
    },
})
export const { setGames } = gamesSlice.actions
export default gamesSlice.reducer
