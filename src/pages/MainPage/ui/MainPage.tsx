//@ts-ignore
import React, { useEffect, useState } from 'react'
import { FilterBar } from '../../../components/FilterBar'
import { GameList } from '../../../components/GameList'
import cls from './MainPage.module.scss'
import { useGetAllGamesQuery } from '../../../services/api.ts'
import { useAppDispatch } from '../../../hooks/useAppDispatch.ts'
import { resetAll } from '../../../store/slice/filterSlice.ts'
import { ShortGame } from '../../../types'

const MainPage = () => {
    const dispatch = useAppDispatch()

    const [games, setGames] = useState<ShortGame[]>([])

    const { data: allGames = [], isLoading, isError } = useGetAllGamesQuery()

    const onReset = () => {
        dispatch(resetAll())
    }

    useEffect(() => {
        setGames(allGames)
    }, [allGames])

    return (
        <div className={cls.MainPage}>
            <FilterBar onReset={onReset} />
            <GameList games={games} isLoading={isLoading} isError={isError} />
        </div>
    )
}

export default MainPage
