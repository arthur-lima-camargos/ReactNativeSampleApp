import { Arc } from "@/types/Arc";
import { convertArcs } from "./utils";
import { getAllArcsRepository } from "./repository";

export const getAllArcsManager = async (): Promise<Arc[]> => {
  const response = await getAllArcsRepository();
  const convertedResponse = convertArcs(response);
  return convertedResponse;
};
