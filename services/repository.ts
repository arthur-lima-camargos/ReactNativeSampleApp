import { ArcResponse } from "./apiResponses/types";
import { OnePieceApi } from "./OnePieceApi";

export const getAllArcsRepository = async (): Promise<ArcResponse> => {
  const response = await OnePieceApi.shared().get("/arcs/en");
  return response.data;
};
