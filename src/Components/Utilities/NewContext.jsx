import { createContext, useState } from "react";

export let NewContext = createContext()

export function AppDataProvider({children}) {

    let [is_login, set_is_login] = useState(false)

    let [users, set_users] = useState([
        {username: '', email: '', pw: ''},
    ])

    return(
        <NewContext.Provider value={
            {
                is_login,
                users,
                set_is_login,
            }
        }>
            {children}
        </NewContext.Provider>
    )
}