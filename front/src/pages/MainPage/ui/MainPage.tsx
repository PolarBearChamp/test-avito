//@ts-ignore
import React, { useEffect } from 'react'
import { FilterBar } from '../../../components/FilterBar'
import { GameList } from '../../../components/GameList'
import cls from './MainPage.module.scss'
import {
    useLazyGetAllGamesQuery,
    useLazyGetFilteredGamesQuery,
    useLazyGetGamesByAllQuery,
} from '../../../store/api.ts'
import { useGetGames } from '../../../store/games/selectors/useGetGames.ts'
import { useAppDispatch } from '../../../hooks/useAppDispatch.ts'
import { setGames } from '../../../store/games/gamesSlice.ts'
import { SortMenu } from '../../../components/SortMenu'
import { useSelectGenres } from '../../../store/filter/selectors/useSelectGenres.ts'
import { useSelectPlatforms } from '../../../store/filter/selectors/useSelectPlatforms.ts'
import { useSelectSort } from '../../../store/sort/selectors/useSelectSort.ts'

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
        useLazyGetGamesByAllQuery()

    useEffect(() => {
        getAllGames()
        dispatch(setGames(allGamesResult.data!))
    }, [])

    useEffect(() => {}, [currentGenres, currentPlatforms])

    useEffect(() => {}, [currentSort])
    return (
        <div className={cls.MainPage}>
            <FilterBar />
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
