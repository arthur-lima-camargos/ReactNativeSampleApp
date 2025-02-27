import axios, { AxiosInstance } from "axios";

export class OnePieceApi {
  static readonly shared = (): AxiosInstance => {
    if (OnePieceApi.instance === null) {
      OnePieceApi.instance = axios.create({
        baseURL: "https://api.api-onepiece.com/v2",
      });
    }
    return OnePieceApi.instance;
  };

  private static instance: AxiosInstance | null = null;
  private constructor() {}
}
