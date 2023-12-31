import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FullGame, GamesChunk } from '../types'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', import.meta.env.VITE_API_KEY)
            headers.set('X-RapidAPI-Host', import.meta.env.VITE_API_HOST)
            return headers
        },
    }),

    endpoints: (builder) => ({
        getAllGames: builder.query<GamesChunk, void>({
            query: () => `games`,
        }),
        getGameById: builder.query<FullGame, number>({
            query: (id) => `game?id=${id}`,
            keepUnusedDataFor: 5 * 60,
        }),
        getGamesByParameters: builder.query<GamesChunk, string>({
            query: (params) => `games${params}`,
        }),
        getFilteredGames: builder.query<GamesChunk, string>({
            query: (params) => `filter${params}`,
        }),
    }),
})

export const {
    useLazyGetAllGamesQuery,
    useGetGameByIdQuery,
    useLazyGetGamesByParametersQuery,
    useLazyGetFilteredGamesQuery,
} = api
