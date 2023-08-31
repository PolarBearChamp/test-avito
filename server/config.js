"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_PARAMS = void 0;
const PORT = 3001;
const CACHE_TIMEOUT = 10000;
const REDIRECT_BASEURL = "https://www.freetogame.com";
const CHUNK_SIZE = 10;
exports.API_PARAMS = {
    "/api/games": "/api/games",
};
exports.default = {
    API_PARAMS: exports.API_PARAMS,
    CACHE_TIMEOUT,
    CHUNK_SIZE,
    PORT,
    REDIRECT_BASEURL,
};
