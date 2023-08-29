// @ts-ignore
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetGameByIdQuery } from '../../../store/api.ts'
import { Button, Skeleton } from 'antd'
import ErrorModal from '../../../shared/ErrorModal/ErrorModal.tsx'
import GameDetails from '../../../components/GameDetails/ui/GameDetails.tsx'
import cls from './GamePage.module.scss'

const GamePage = () => {
    const params = useParams()
    const gameId = params.gameId
    const { isLoading, isError, data } = useGetGameByIdQuery(+gameId!)

    if (isLoading) {
        return <Skeleton />
    }
    if (isError) {
        return <ErrorModal />
    }

    return (
        <div className={cls.GamePage}>
            <Link to={'/'}>
                <Button type={'primary'}>Назад к списку</Button>
            </Link>
            {data && <GameDetails {...data} />}
        </div>
    )
}

export default GamePage
