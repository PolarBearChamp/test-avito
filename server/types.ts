export type ResponseItem = {
  id: string;
  title: string;
  value: string;
};

export type ResponseData = Array<ResponseItem> | Object;

export type CacheValue = {
  date: number;
  response: ResponseData;
};

export type ApiKey = {
  url: string;
  params: Record<string, string>;
};

export type ApiValue = {
  url: string;
  params: Record<string, string>;
};
