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

    const {
        isLoading: gamePageLoading,
        isError: gamePageError,
        data,
    } = useGetGameByIdQuery(+gameId!)

    if (gamePageLoading) {
        return (
            <Skeleton
                active
                style={{
                    maxWidth: '600px',
                    marginInline: 'auto',
                    marginBlock: '200px',
                }}
            />
        )
    }

    if (gamePageError) {
        return (
            <ErrorModal
                title={'Ошибка'}
                message={'При загрузке страницы игры произошла ошибка'}
            />
        )
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
