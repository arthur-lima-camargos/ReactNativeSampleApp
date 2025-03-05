import { Arc } from "@/types/Arc";
import { convertArcs } from "./utils";
import { getAllArcsRepository } from "./repository";
import { StorageApi } from "./StorageApi";

export const getAllArcsManager = async (): Promise<Arc[]> => {
  const response = await getAllArcsRepository();
  const convertedResponse = convertArcs(response);
  return convertedResponse;
};

export const getFavoriteArc = async (): Promise<Arc | null> => {
  const response = await StorageApi.getFavoriteArc();
  return response;
};

export const setFavoriteArc = async (arc: Arc): Promise<boolean> => {
  return await StorageApi.setFavoriteArc(arc);
};
