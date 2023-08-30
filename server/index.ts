import express, { Request, Response } from 'express'
import axios, { AxiosRequestConfig } from 'axios'
import morgan from 'morgan'

import cors from 'cors'

const responseCache = new Map<string, any[]>()

const app = express()
const PORT = 3000

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.get('/', async (req: Request, res: Response) => {
    const cachedResponse = responseCache.get('data')

    if (cachedResponse) {
        console.log('Sending cached response')
        res.json(cachedResponse)
    } else {
        try {
            const axiosConfig: AxiosRequestConfig = {
                headers: {
                    'X-RapidAPI-Key':
                        '8912b5836cmsh653f70e27deda63p1cb563jsn7368c8120e4e',
                    'X-RapidAPI-Host':
                        'free-to-play-games-database.p.rapidapi.com',
                },
            }

            const externalApiResponse = await axios.get(
                'https://free-to-play-games-database.p.rapidapi.com/api/games',
                axiosConfig
            )
            const responseData = externalApiResponse.data

            const chunkSize = 10
            const chunks: any[] = []
            for (let i = 0; i < responseData.length; i += chunkSize) {
                chunks.push(responseData.slice(i, i + chunkSize))
            }

            responseCache.set('data', chunks)

            console.log('Sending new response')
            res.json(chunks)
        } catch (error) {
            console.log(error)
        }
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
