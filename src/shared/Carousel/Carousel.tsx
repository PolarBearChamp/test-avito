import React, { FC } from 'react'
import { Carousel, ConfigProvider } from 'antd'
import { ScreenshotData } from '../../types'

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#7ca8fa',
}

interface IProps {
    gallery: ScreenshotData[]
}

const CarouselWrapper: FC<IProps> = ({ gallery }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorBgContainer: 'white',
                },
            }}
        >
            <Carousel autoplay>
                {gallery.map((pic) => {
                    return (
                        <img
                            key={pic.id}
                            src={pic.image}
                            alt={'picture'}
                            style={contentStyle}
                        />
                    )
                })}
            </Carousel>
        </ConfigProvider>
    )
}

export default CarouselWrapper
