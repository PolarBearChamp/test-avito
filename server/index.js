"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const qs_1 = __importDefault(require("qs"));
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("./config"));
const utils_1 = require("./utils");
const app = (0, express_1.default)();
const cache = new Map();
app.use("/", express_1.default.static(path_1.default.join(__dirname, "..", "front", "dist")));
app.get("/api/*", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cacheValue = cache.get(req.url);
        console.log({ url: req.url });
        console.log({ cacheValue: !!cacheValue });
        const currentDate = Date.now();
        const [url, params] = (0, utils_1.parseQuery)(req.url);
        const parsedParams = qs_1.default.parse(params);
        if (cacheValue && currentDate - cacheValue.date <= config_1.default.CACHE_TIMEOUT) {
            console.log("cache response");
            if (cacheValue.response instanceof Array) {
                const chunk = (0, utils_1.getChunk)(Number((parsedParams === null || parsedParams === void 0 ? void 0 : parsedParams.chunk) || 0), cacheValue.response);
                return res.json({ data: chunk, chunk: Number(parsedParams === null || parsedParams === void 0 ? void 0 : parsedParams.chunk) + 1 || 1 });
            }
            return res.json(cacheValue.response);
        }
        console.log("cache invalidate");
        const convertedUrl = config_1.default.API_PARAMS[url] || url;
        if (convertedUrl) {
            const response = yield fetch(`${config_1.default.REDIRECT_BASEURL}${convertedUrl}?${params}`);
            if (response.status) {
                const data = (yield response.json());
                cache.set(req.url, {
                    date: Date.now(),
                    response: data,
                });
                if (data instanceof Array) {
                    const chunk = (0, utils_1.getChunk)(Number((parsedParams === null || parsedParams === void 0 ? void 0 : parsedParams.chunk) || 0), data);
                    return res.json({ data: chunk, chunk: Number(parsedParams === null || parsedParams === void 0 ? void 0 : parsedParams.chunk) + 1 || 1 });
                }
                return res.json(data);
            }
        }
        throw { message: "api handler error" };
    }
    catch (e) {
        res.status(500);
    }
}));
app.get("*", (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, "..", "front", "dist", "index.html"));
});
app.listen(config_1.default.PORT);
