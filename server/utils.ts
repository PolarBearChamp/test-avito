import type { ResponseItem } from "./types";
import CONFIG from "./config";

export const parseQuery = (url: string) => url.split("?");
export const getChunk = (index: number = 0, data: Array<ResponseItem>) => {
  return data.slice(
    index * CONFIG.CHUNK_SIZE,
    index * CONFIG.CHUNK_SIZE + CONFIG.CHUNK_SIZE,
  );
};
