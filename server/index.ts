import express, { Request, Response } from "express";
import qs from "qs";
import path from "path";

import CONFIG from "./config";
import { getChunk, parseQuery } from "./utils";
import type { CacheValue, ResponseData } from "./types";

const app = express();

const cache = new Map<string, CacheValue>();

app.use("/", express.static(path.join(__dirname, "..", "front", "dist")));

app.get("/api/*", async (req: Request, res: Response) => {
  try {
    const cacheValue = cache.get(req.url);
    console.log({ url: req.url });
    console.log({ cacheValue: !!cacheValue });
    const currentDate = Date.now();

    const [url, params] = parseQuery(req.url);
    const parsedParams = qs.parse(params);

    if (cacheValue && currentDate - cacheValue.date <= CONFIG.CACHE_TIMEOUT) {
      console.log("cache response");
      if (cacheValue.response instanceof Array) {
        const chunk = getChunk(
          Number(parsedParams?.chunk || 0),
          cacheValue.response,
        );
        return res.json({ data: chunk, chunk: parsedParams?.chunk || 1 });
      }

      return res.json(cacheValue.response);
    }
    console.log("cache invalidate");
    const convertedUrl = CONFIG.API_PARAMS[url] || url;

    if (convertedUrl) {
      const response = await fetch(
        `${CONFIG.REDIRECT_BASEURL}${convertedUrl}?${params}`,
      );

      if (response.status) {
        const data = (await response.json()) as ResponseData;
        cache.set(req.url, {
          date: Date.now(),
          response: data,
        });

        if (data instanceof Array) {
          const chunk = getChunk(Number(parsedParams?.chunk || 0), data);
          return res.json({ data: chunk, chunk: parsedParams?.chunk || 1 });
        }

        return res.json(data);
      }
    }
    throw { message: "api handler error" };
  } catch (e) {
    res.status(500);
  }
});

app.listen(CONFIG.PORT);
