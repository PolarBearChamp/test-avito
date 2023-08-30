import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL, X_RapidAPI_Host, X_RapidAPI_Key } from '../constants'
import { FullGame, ShortGame } from '../types'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', X_RapidAPI_Key)
            headers.set('X-RapidAPI-Host', X_RapidAPI_Host)
            return headers
        },
    }),

    endpoints: (builder) => ({
        getAllGames: builder.query<ShortGame[], void>({
            query: () => `games`,
        }),
        getGameById: builder.query<FullGame, number>({
            query: (id) => `game?id=${id}`,
            keepUnusedDataFor: 5 * 60,
        }),
        getGamesByParameters: builder.query<ShortGame[], string>({
            query: (params) => `games${params}`,
        }),
        getFilteredGames: builder.query<ShortGame[], string>({
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
