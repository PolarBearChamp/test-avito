//@ts-ignore
import React, { useEffect } from 'react'
import { FilterBar } from '../../../components/FilterBar'
import { GameList } from '../../../components/GameList'
import cls from './MainPage.module.scss'
import { useLazyGetAllGamesQuery } from '../../../store/api.ts'

const MainPage = () => {
    const [triggerAll, result] = useLazyGetAllGamesQuery()

    useEffect(() => {
        triggerAll()
    }, [])

    if (result.status === 'pending') {
        return (
            <div className={cls.MainPage}>
                <FilterBar />
                <GameList games={[]} isLoading={true} isError={false} />
            </div>
        )
    } else {
        const { data: allGames, isError, isLoading } = result
        return (
            <div className={cls.MainPage}>
                <FilterBar />
                <GameList
                    games={allGames!}
                    isLoading={isLoading}
                    isError={isError}
                />
            </div>
        )
    }
}

export default MainPage
