import { Arc } from "@/types/Arc";

export type ArcState = {
  favorite: Arc;
};

export const initialState: ArcState = {
  favorite: {
    description: "",
    id: 0,
    saga: {
      id: 0,
      title: "",
      chapter: "",
      episode: "",
      number: "",
      volume: "",
    },
    title: "",
  },
};

const PREFIX = "@ARC/";

const ACTIONS = {
  SET_ARC: `${PREFIX}SET_ARC`,
};

export const setArcAction = (arc: Arc) => ({
  type: ACTIONS.SET_ARC,
  payload: arc,
});

export function reducer(state: ArcState, action: any): ArcState {
  switch (action.type) {
    case ACTIONS.SET_ARC:
      return { ...state, favorite: action.payload };
    default:
      return state;
  }
}
