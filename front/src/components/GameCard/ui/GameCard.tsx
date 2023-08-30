//@ts-ignore
import React, { FC } from 'react'
import { Card, Space, Tag } from 'antd'
import { GameCardProps } from '../../../types'
import { formattedDate } from '../../../utils/getFormattedDate.ts'

const GameCard: FC<GameCardProps> = ({
    title,
    publisher,
    genre,
    release_date,
    thumbnail,
}) => {
    return (
        <Card
            hoverable
            style={{ maxWidth: 360, minWidth: 300 }}
            cover={<img alt={title} src={thumbnail} />}
        >
            <Space direction={'vertical'}>
                <h3>{title}</h3>
                <div>
                    <b>Вышла:</b> {formattedDate(release_date)}
                </div>
                <Space size={2} direction={'vertical'}>
                    <b>Издатель:</b>
                    <Tag
                        color="magenta"
                        style={{
                            maxWidth: '260px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {publisher}
                    </Tag>
                    <b>Жанр:</b>
                    <Tag color="cyan">{genre}</Tag>
                </Space>
            </Space>
        </Card>
    )
}

export default GameCard
