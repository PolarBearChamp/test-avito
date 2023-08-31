//@ts-ignore
import React, { useEffect, useState } from 'react'

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

import { setGames } from '../../../store/slices/gamesSlice.ts'
import { resetAll } from '../../../store/slices/filterSlice.ts'
import { resetSort } from '../../../store/slices/sortSlice.ts'

import { useAppDispatch } from '../../../hooks/useAppDispatch.ts'
import { SortType } from '../../../types'
import { getTagsString } from '../../../utils/getTagsString/getTagsString.ts'

import { FilterBar } from '../../../components/FilterBar'
import { SortMenu } from '../../../components/SortMenu'
import { GameList } from '../../../components/GameList'

import cls from './MainPage.module.scss'
import { useBottomScrollListener } from 'react-bottom-scroll-listener'

const MainPage = () => {
    const currentGames = useSelectGames()

    const currentGenres = useSelectGenres()
    const currentPlatforms = useSelectPlatforms()
    const currentSort = useSelectSort()

    const [isBottom, setIsBottom] = useState<boolean>(false)
    const scroll = useBottomScrollListener(
        () => {
            setIsBottom((prevState) => !prevState)
        },
        { offset: 100 }
    )

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

    const generateQueryParams = () => {
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

        return queryParams.join('&')
    }
    useEffect(() => {
        dispatch(setGames(currentGames))
    }, [])

    useEffect(() => {
        dispatch(setGames(currentGames))
    }, [currentGames])

    useEffect(() => {
        const queryParams = generateQueryParams()

        if (queryParams === '') {
            getAllGames()
            dispatch(setGames(allGamesResult.data!))
        } else if (currentGenres.length > 0) {
            getFilteredGames(`?${queryParams}`)
            dispatch(setGames(filteredGamesResult.data!))
        } else {
            getGamesByParameters(`?${queryParams}`)
            dispatch(setGames(gamesByParametersResult.data!))
        }
    }, [currentGenres, currentPlatforms, currentSort, isBottom])

    return (
        <div className={cls.MainPage}>
            <FilterBar onReset={onReset} />
            <SortMenu />
            <GameList
                games={currentGames}
                isLoading={allGamesResult.isLoading}
                isError={allGamesResult.isError}
            />
        </div>
    )
}

export default MainPage
