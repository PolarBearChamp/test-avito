//@ts-ignore
import React, { useEffect } from 'react'
import { FilterBar } from '../../../components/FilterBar'
import { GameList } from '../../../components/GameList'
import cls from './MainPage.module.scss'
import {
    useLazyGetAllGamesQuery,
    useLazyGetFilteredGamesQuery,
    useLazyGetGamesByParametersQuery,
} from '../../../store/api.ts'
import { useGetGames } from '../../../store/games/selectors/useGetGames.ts'
import { useAppDispatch } from '../../../hooks/useAppDispatch.ts'
import { setGames } from '../../../store/games/gamesSlice.ts'
import { SortMenu } from '../../../components/SortMenu'
import { useSelectGenres } from '../../../store/filter/selectors/useSelectGenres.ts'
import { useSelectPlatforms } from '../../../store/filter/selectors/useSelectPlatforms.ts'
import { useSelectSort } from '../../../store/sort/selectors/useSelectSort.ts'
import { SortType } from '../../../types'
import { getTagsString } from '../../../utils/getTagsString/getTagsString.ts'
import { resetAll } from '../../../store/filter/filterSlice.ts'
import { resetSort } from '../../../store/sort/sortSlice.ts'

const MainPage = () => {
    const currentGames = useGetGames()
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

    useEffect(() => {
        dispatch(setGames(currentGames))
    }, [currentGames])

    useEffect(() => {
        if (
            currentGenres.length === 0 &&
            currentSort.sort.type === SortType.NONE &&
            currentPlatforms.length === 0
        ) {
            getAllGames()
            dispatch(setGames(allGamesResult.data!))
        }
        if (currentGenres.length === 0) {
            const result: string[] = []
            const platforms =
                currentPlatforms.length === 2 ? 'all' : currentPlatforms[0]
            const platformString = 'platform=' + platforms
            if (platforms) result.push(platformString)

            const sort =
                currentSort.sort.type !== SortType.NONE
                    ? currentSort.sort.type
                    : null

            const sortString = 'sort-by=' + sort
            if (sort) result.push(sortString)
            const total = result.join('&')

            getGamesByParameters(`?${total}`)
            dispatch(setGames(gamesByParametersResult.data!))
        } else {
            const result: string[] = []

            const genres = getTagsString(currentGenres)
            const genresString = 'tag=' + genres

            result.push(genresString)

            const platforms =
                currentPlatforms.length === 2 || currentPlatforms.length === 0
                    ? 'all'
                    : currentPlatforms[0]
            const platformString = 'platform=' + platforms

            result.push(platformString)

            const sort =
                currentSort.sort.type !== SortType.NONE
                    ? currentSort.sort.type
                    : null

            const sortString = 'sort-by=' + sort
            if (sort) result.push(sortString)
            const total = result.join('&')

            getFilteredGames(`?${total}`)
            dispatch(setGames(filteredGamesResult.data!))
        }
    }, [currentGenres, currentPlatforms, currentSort])

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
