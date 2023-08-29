// @ts-ignore
import React from 'react'

import { AppRouter } from './providers/Router'
import { Layout } from '../shared/Layout'

function App() {
    return (
        <div className={'app'}>
            <Layout>
                <AppRouter />
            </Layout>
        </div>
    )
}

export default App
