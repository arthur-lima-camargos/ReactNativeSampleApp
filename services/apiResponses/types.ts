export type ArcResponse = Partial<{
  id: number;
  title: string;
  description: string;
  saga: Partial<{
    id: number;
    title: string;
    saga_number: string;
    saga_chapitre: string;
    saga_volume: string;
    saga_episode: string;
  }>;
}>[];
