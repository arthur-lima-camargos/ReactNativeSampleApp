import { Arc } from "@/types/Arc";
import { ArcResponse } from "./apiResponses/types";

export const convertArcs = (data: ArcResponse): Arc[] => {
  const converted: Arc[] = data.map((item) => ({
    id: item.id ?? 0,
    description: item.description ?? "",
    title: item.title ?? "",
    saga: {
      id: item.saga?.id ?? 0,
      chapter: item.saga?.saga_chapitre ?? "",
      episode: item.saga?.saga_episode ?? "",
      number: item.saga?.saga_number ?? "",
      title: item.saga?.title ?? "",
      volume: item.saga?.saga_volume ?? "",
    },
  }));
  return converted;
};
