import { createContext } from "react";
import { createContextualCan } from "@casl/react";

import ability from "./ability";

export const AbilityContext = createContext();
export const Can = createContextualCan(AbilityContext.Consumer);

export const AbilityContextProvider = ({ children }) => {
  return (
    <>
      <AbilityContext.Provider value={ability}>
        {children}
      </AbilityContext.Provider>
    </>
  )
}