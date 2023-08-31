"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChunk = exports.parseQuery = void 0;
const config_1 = __importDefault(require("./config"));
const parseQuery = (url) => url.split("?");
exports.parseQuery = parseQuery;
const getChunk = (index = 0, data) => {
    return data.slice(index * config_1.default.CHUNK_SIZE, index * config_1.default.CHUNK_SIZE + config_1.default.CHUNK_SIZE);
};
exports.getChunk = getChunk;