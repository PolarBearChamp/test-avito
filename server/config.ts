const PORT = 5001
const CACHE_TIMEOUT = 10000
const REDIRECT_BASEURL = 'https://www.freetogame.com'
const CHUNK_SIZE = 10

export const API_PARAMS: Record<string, string> = {
    '/api/games': '/api/games'
}
export default {
    API_PARAMS,
    CACHE_TIMEOUT,
    CHUNK_SIZE,
    PORT,
    REDIRECT_BASEURL
}