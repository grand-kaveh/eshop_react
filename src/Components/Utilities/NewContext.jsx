import { createContext } from "react";

export let NewContext = createContext()

export function AppDataProvider({children}) {




    return(
        <NewContext.Provider value={
            {

            }
        }>
            {children}
        </NewContext.Provider>
    )
}