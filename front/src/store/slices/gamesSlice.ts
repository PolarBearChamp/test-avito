import { createSlice } from '@reduxjs/toolkit'
import { GamesChunk } from '../../types'
import { api } from '../api.ts'

interface GamesState {
    chunk: GamesChunk
    isLoading: boolean
}

const initialState: GamesState = {
    chunk: {
        chunk: 0,
        data: []
    },
    isLoading: false,
}

export const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(api.endpoints.getAllGames.matchPending, (state) => {
                state.isLoading = true
            })
            .addMatcher(
                api.endpoints.getAllGames.matchFulfilled,
                (state, action) => {
                    return {
                        ...state,
                        isLoading: false,
                        chunk: action.payload
                    }
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
                    return {
                        ...state,
                        isLoading: false,
                        chunk: {
                            chunk: action.payload?.chunk,
                            data: action.payload.chunk === 1 ? action.payload.data : [...state.chunk.data || [], ...action.payload?.data]
                        }
                    }
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
                    return {
                        ...state,
                        isLoading: false,
                        chunk: {
                            chunk: action.payload?.chunk,
                            data: action.payload.chunk === 1 ? action.payload.data : [...state.chunk.data || [], ...action.payload?.data]
                        }
                    }
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
export const { } = gamesSlice.actions
export default gamesSlice.reducer
