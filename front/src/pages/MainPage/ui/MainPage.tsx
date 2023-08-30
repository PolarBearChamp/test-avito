//@ts-ignore
import React, { useEffect } from 'react'
import { FilterBar } from '../../../components/FilterBar'
import { GameList } from '../../../components/GameList'
import cls from './MainPage.module.scss'
import { useLazyGetAllGamesQuery } from '../../../store/api.ts'
import { useGetGames } from '../../../store/games/selectors/useGetGames.ts'
import { useAppDispatch } from '../../../hooks/useAppDispatch.ts'
import { setGames } from '../../../store/games/gamesSlice.ts'
import { SortMenu } from '../../../components/SortMenu'

const MainPage = () => {
    const currentGames = useGetGames()
    const dispatch = useAppDispatch()

    const [getGames, { data, isError, isLoading }] = useLazyGetAllGamesQuery()

    useEffect(() => {
        getGames()
        dispatch(setGames(data!))
    }, [])

    return (
        <div className={cls.MainPage}>
            <FilterBar />
            <SortMenu />
            <GameList
                games={currentGames}
                isLoading={isLoading}
                isError={isError}
            />
        </div>
    )
}

export default MainPage
