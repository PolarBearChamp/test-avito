// @ts-ignore
import React from 'react'
import cls from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className={cls.Header}>
            <Link to={'/'}>
                <img src={'/src/shared/Header/assets/Logo.png'} alt={'Logo'} />
            </Link>
        </div>
    )
}

export default Header
