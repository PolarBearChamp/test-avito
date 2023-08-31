import React, { useEffect, useState } from 'react'
import { ToTopOutlined } from '@ant-design/icons' // Импорт иконки (при необходимости)
import cls from './ScrollToTopButton.module.scss'
import { clsx } from 'clsx'
import { Button } from 'antd' // Подключите ваш файл стилей

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            {isVisible && (
                <Button
                    className={clsx(cls.visible)}
                    shape="circle"
                    size={'large'}
                    icon={<ToTopOutlined className={cls.icon} />}
                    onClick={scrollToTop}
                />
            )}
        </>
    )
}

export default ScrollToTopButton
