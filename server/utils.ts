import type { ResponseItem } from "./types";
import CONFIG from "./config";

export const parseQuery = (url: string) => url.split("?");
export const getChunk = (index: number = 0, data: Array<ResponseItem>) => {
  const slice = index * CONFIG.CHUNK_SIZE
  if (slice > data.length) {

  }
  return data.slice(
    slice,
    slice + CONFIG.CHUNK_SIZE,
  );
};
