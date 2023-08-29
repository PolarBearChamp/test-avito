import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from '../constants'
import { FullGame, ShortGame } from '../types'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
        prepareHeaders: (headers) => {
            headers.set(
                'X-RapidAPI-Key',
                '8912b5836cmsh653f70e27deda63p1cb563jsn7368c8120e4e'
            )
            headers.set(
                'X-RapidAPI-Host',
                'free-to-play-games-database.p.rapidapi.com'
            )
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
        getGamesByPlatform: builder.query<ShortGame[], string>({
            query: (platform) => `games?platform=${platform}`,
        }),
        getGamesByCategory: builder.query<ShortGame[], string>({
            query: (category) => `games?category=${category}`,
        }),
        getSortedGames: builder.query<ShortGame[], string>({
            query: (sortType) => `games?sort-by=${sortType}`,
        }),
        getGamesByAll: builder.query<ShortGame[], string>({
            query: ([platform, category, sortType]) =>
                `games?platform=${platform}&category=${category}&sort-by=${sortType}`,
        }),
        getFilteredGames: builder.query<ShortGame[], string>({
            query: ([tags, platforms]) =>
                `filter?tag=${tags}&platform=${platforms}`,
        }),
    }),
})

export const {
    useGetAllGamesQuery,
    useGetGamesByPlatformQuery,
    useGetGamesByCategoryQuery,
    useGetGamesByAllQuery,
    useGetSortedGamesQuery,
    useGetGameByIdQuery,
    useGetFilteredGamesQuery,
} = api
