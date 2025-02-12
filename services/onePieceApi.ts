import axios from 'axios';

const api = axios.create({
baseURL: 'https://api.api-onepiece.com/v2',
});

export interface OnePieceArc {
id: number;
title: string;
description: string;
saga: {
  id: number;
  title: string;
  saga_number: string;
  saga_chapitre: string;
  saga_volume: string;
  saga_episode: string;
};
}

export const getAllOnePieceArcs = async (): Promise<OnePieceArc[]> => {
try {
  const response = await api.get('/arcs/en');
  return response.data;
} catch (error) {
  console.error('Something went wrong...', error);
  throw error;
}
};