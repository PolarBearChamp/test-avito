//@ts-ignore
import React, { useEffect, useState } from 'react'
import { useBottomScrollListener } from 'react-bottom-scroll-listener'

import {
    useLazyGetAllGamesQuery,
    useLazyGetFilteredGamesQuery,
    useLazyGetGamesByParametersQuery,
} from '../../../store/api.ts'

import {
    useSelectGames,
    useSelectGenres,
    useSelectPlatforms,
    useSelectSort,
} from '../../../store/selectors'

import { resetAll } from '../../../store/slices/filterSlice.ts'
import { resetSort } from '../../../store/slices/sortSlice.ts'

import { useAppDispatch } from '../../../hooks/useAppDispatch.ts'
import { SortType } from '../../../types'
import { getTagsString } from '../../../utils/getTagsString/getTagsString.ts'

import { FilterBar } from '../../../components/FilterBar'
import { SortMenu } from '../../../components/SortMenu'
import { GameList } from '../../../components/GameList'

import cls from './MainPage.module.scss'
const MainPage = () => {
    const currentChunk = useSelectGames()
    const currentGenres = useSelectGenres()
    const currentPlatforms = useSelectPlatforms()
    const currentSort = useSelectSort()

    const dispatch = useAppDispatch()

    const [getAllGames, allGamesResult] = useLazyGetAllGamesQuery()
    const [getFilteredGames, filteredGamesResult] =
        useLazyGetFilteredGamesQuery()
    const [getGamesByParameters, gamesByParametersResult] =
        useLazyGetGamesByParametersQuery()
    const onReset = () => {
        dispatch(resetAll())
        dispatch(resetSort())
        getAllGames()
    }

    const generateQueryParams = (chunk: number) => {
        const queryParams = []

        if (currentGenres.length > 0) {
            const genres = getTagsString(currentGenres)
            queryParams.push(`tag=${genres}`)
        }

        if (currentPlatforms.length === 2) {
            queryParams.push('platform=all')
        } else if (currentPlatforms.length === 1) {
            queryParams.push(`platform=${currentPlatforms[0]}`)
        }

        if (currentSort.sort.type !== SortType.NONE) {
            queryParams.push(`sort-by=${currentSort.sort.type}`)
        }
        queryParams.push(`chunk=${chunk}`)
        return queryParams.join('&')
    }

    useEffect(() => {
        const queryParams = generateQueryParams(0)
        if (currentGenres.length > 0) {
            getFilteredGames(`?${queryParams}`)
            // dispatch(setGames(filteredGamesResult.data!))
        } else {
            getGamesByParameters(`?${queryParams}`)
            // dispatch(setGames(gamesByParametersResult.data!))
        }
    }, [dispatch, currentGenres, currentPlatforms, currentSort])

    useBottomScrollListener(
        () => {
            const queryParams = generateQueryParams(currentChunk?.chunk)
            if (currentGenres.length > 0) {
                getFilteredGames(`?${queryParams}`)
            } else {
                getGamesByParameters(`?${queryParams}`)
            }
        },
        { offset: 50, debounce: 0, triggerOnNoScroll: true }
    )

    return (
        <div className={cls.MainPage}>
            <FilterBar onReset={onReset} />
            <SortMenu />
            <GameList
                games={currentChunk?.data}
                isLoading={
                    filteredGamesResult.isLoading ||
                    gamesByParametersResult.isLoading
                }
                isError={allGamesResult.isError}
            />
        </div>
    )
}

export default MainPage
