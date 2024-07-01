import { AxiosResponse } from "axios";
import instance from "../instance";

// NOTE :  post method 처리 구현부
export const postMethod =
  <TOptions>({
    url,
    body,
    options,
    onError,
    isOrigin = false,
  }: {
    url: string;
    body?: any;
    options?: TOptions;
    onError?: () => void;
    isOrigin?: boolean;
  }) =>
  async (mapper?: (data: AxiosResponse["data"]) => void) => {
    const axiosConfig = instance;
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    try {
      const response = await axiosConfig({
        method: "post",
        url: isOrigin ? url : `${baseUrl}${url}`,
        data: body,
        ...options,
      });
      return mapper ? mapper(response.data) : response.data;
    } catch (err) {
      console.warn(err);
      onError && onError();
    }
  };
