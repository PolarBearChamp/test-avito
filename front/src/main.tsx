import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { ConfigProvider, theme } from 'antd'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ConfigProvider
                    theme={{
                        algorithm: theme.darkAlgorithm,
                        token: {
                            fontSize: 16,
                        },
                    }}
                >
                    <App />
                </ConfigProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
