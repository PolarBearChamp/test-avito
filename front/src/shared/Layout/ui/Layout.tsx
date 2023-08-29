// @ts-ignore
import React, { FC, ReactNode } from 'react'
import { Header } from '../../Header'

interface IProps {
    children: ReactNode
}

const Layout: FC<IProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout
