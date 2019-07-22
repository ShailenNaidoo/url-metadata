import axios, { AxiosError } from 'axios';

export const getHTML = async (url: string): Promise<[string|undefined, undefined|string]> => {
  const res = await axios.get(url)
    .then(({ data }: { data: string}): [string, undefined] => [data, undefined])
    .catch((e: AxiosError): [undefined, string] => [undefined, e.code]);
  return res;
};

export const getManifestJSON = async (url: string): Promise<[object|undefined, undefined|string]> => {
  const res = await axios.get(url)
    .then(({ data }: { data: object }): [object, undefined] => [data, undefined])
    .catch((e: AxiosError): [undefined, string] => [undefined, e.code]);
  return res;
};
