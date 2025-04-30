import React, { createContext, PropsWithChildren, useReducer } from "react";
import { initialState, rootReducer, RootState } from "./root";

export const Context = createContext<{
  state: RootState;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => {} });

export const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
