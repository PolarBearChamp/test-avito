// @ts-ignore
import React, { Suspense } from 'react'

import { Route, Routes } from 'react-router-dom'
import { Spin } from 'antd'
import { routeConfig } from '../../../../shared/config'

const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={<Suspense fallback={<Spin />}>{element}</Suspense>}
            />
        ))}
    </Routes>
)

export default AppRouter
