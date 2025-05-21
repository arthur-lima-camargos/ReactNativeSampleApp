import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

const arcSlice = createSlice({
  name: "arc",
  initialState,
  reducers: {
    setArc: (state, action: PayloadAction<Arc>) => {
      state.favorite = action.payload;
    },
    reset: () => {
      return initialState;
    },
  },
});

export const { setArc: setArcAction, reset: resetAction } = arcSlice.actions;

export const reducer = arcSlice.reducer;
