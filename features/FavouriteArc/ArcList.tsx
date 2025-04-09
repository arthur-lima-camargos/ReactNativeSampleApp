import { Arc } from "@/types/Arc";
import React, { createContext, PropsWithChildren, useState } from "react";

export const ArcContext = createContext<{
  value: Arc | null;
  setValue: React.Dispatch<React.SetStateAction<Arc | null>>;
}>({ value: null, setValue: () => {} });

export const ArcList: React.FC<PropsWithChildren> = ({ children }) => {
  const [arc, setArc] = useState<Arc | null>(null);

  return (
    <ArcContext.Provider value={{ value: arc, setValue: setArc }}>
      {children}
    </ArcContext.Provider>
  );
};
