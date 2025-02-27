import { ArcResponse } from "./apiResponses/types";
import { api } from "./onePieceApi";

export const getAllArcsRepository = async (): Promise<ArcResponse> => {
  const response = await api.get("/arcs/en");
  return response.data;
};
