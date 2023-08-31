//@ts-ignore
import React, { FC } from 'react'
import { GameCard } from '../../GameCard'
import cls from './GameList.module.scss'
import { Link } from 'react-router-dom'
import { ShortGame } from '../../../types'
import { Spin } from 'antd'
import ErrorModal from '../../../shared/ErrorModal/ErrorModal.tsx'

interface IProps {
    games: ShortGame[]
    isLoading: boolean
    isError: boolean
}

const GameList: FC<IProps> = ({ games, isLoading, isError }) => {
    if (isLoading) {
        return <Spin size="large" style={{ margin: 'auto' }} />
    }
    if (isError) {
        return (
            <ErrorModal
                title={'Ошибка'}
                message={'При загрузке списка произошла ошибка'}
            />
        )
    }
    return (
        <div className={cls.GameList}>
            {games?.map((game) => {
                return (
                    <Link to={`games/${game.id}`} key={game.id}>
                        <GameCard
                            key={game.id}
                            title={game.title}
                            genre={game.genre}
                            publisher={game.publisher}
                            release_date={game.release_date}
                            thumbnail={game.thumbnail}
                        />
                    </Link>
                )
            })}
        </div>
    )
}

export default GameList
