import { OnePieceArc } from "./apiResponses/types";
import { api } from "./onePieceApi";

export const getAllArcsRepository = async (): Promise<OnePieceArc[]> => {
  const response = await api.get("/arcs/en");
  return response.data;
};
