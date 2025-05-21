import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export { createSlice } from "@reduxjs/toolkit";

export type FormState = {
  email: string;
  error: boolean;
};

export const initialState: FormState = {
  email: "",
  error: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    send: (state) => {
      if (!state.email) {
        state.error = true;
      } else {
        state.error = false;
        state.email = "";
      }
    },
  },
});

export const { send: sendAction, setEmail: setEmailAction } = formSlice.actions;

export const reducer = formSlice.reducer;
