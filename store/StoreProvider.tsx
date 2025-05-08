import React, { createContext, PropsWithChildren, useReducer } from "react";
import { initialState, RootState } from "./root";

export const Context = createContext<{
  state: RootState;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => {} });

type ProvideProps = PropsWithChildren<{
  store: {
    reducer: (state: RootState, action: any) => RootState;
    initialState: RootState;
  };
}>;

export const Provider: React.FC<ProvideProps> = ({ children, store }) => {
  const [state, dispatch] = useReducer(store.reducer, store.initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
