import { createContext, useState } from "react";

export let NewContext = createContext()

export function AppDataProvider({children}) {

    let [is_login, set_is_login] = useState(false)

    return(
        <NewContext.Provider value={
            {
                is_login,
            }
        }>
            {children}
        </NewContext.Provider>
    )
}