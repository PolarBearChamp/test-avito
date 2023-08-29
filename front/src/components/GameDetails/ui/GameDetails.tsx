//@ts-ignore
import React, { FC } from 'react'
import { FullGame } from '../../../types'
import { formattedDate } from '../../../utils/getFormattedDate.ts'
import CarouselWrapper from '../../../shared/Carousel/Carousel.tsx'
import cls from './GameDetails.module.scss'
import { clsx } from 'clsx'

const GameDetails: FC<FullGame> = (props) => {
    const {
        title,
        release_date,
        publisher,
        developer,
        genre,
        minimum_system_requirements,
        screenshots,
        thumbnail,
    } = props
    return (
        <div className={cls.GameDetails}>
            <div className={cls.title}>{title}</div>
            <img src={thumbnail} alt={'logo'} className={cls.gamePicture} />

            <div className={clsx(cls.list, cls.details)}>
                <h3>Детали</h3>
                <div>
                    <b>Дата релиза:</b> {formattedDate(release_date)}
                </div>
                <div>
                    <b>Издатель:</b> {publisher}
                </div>
                <div>
                    <b>Разработчик:</b> {developer}
                </div>
                <div>
                    <b>Жанр:</b> {genre}
                </div>
            </div>
            {minimum_system_requirements && (
                <div className={clsx(cls.list, cls.system)}>
                    <h3>Системные требования:</h3>
                    <div>
                        <b>ОС:</b> {minimum_system_requirements.os}
                    </div>
                    <div>
                        <b>Процессор:</b>{' '}
                        {minimum_system_requirements.processor}
                    </div>
                    <div>
                        <b>Оперативная память:</b>{' '}
                        {minimum_system_requirements.memory}
                    </div>
                    <div>
                        <b>Видеокарта:</b>{' '}
                        {minimum_system_requirements.graphics}
                    </div>
                    <div>
                        <b>Места на диске:</b>{' '}
                        {minimum_system_requirements.storage}
                    </div>
                </div>
            )}
            <div className={cls.carousel}>
                <h3>Скриншоты</h3>
                <CarouselWrapper gallery={screenshots} />
            </div>
        </div>
    )
}

export default GameDetails
