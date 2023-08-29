// @ts-ignore
import React from 'react'

import { RouteProps } from 'react-router-dom'

import { NotFoundPage } from '../../../pages/NotFoundPage'
import { MainPageAsync } from '../../../pages/MainPage'
import { GamePageAsync } from '../../../pages/GamePage'

export enum AppRoutes {
    MAIN = 'main',
    NOT_FOUND = 'not_found',
    GAMES = 'games',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.GAMES]: '/games/:gameId',
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPageAsync />,
    },
    [AppRoutes.GAMES]: {
        path: RoutePath.games,
        element: <GamePageAsync />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
}
