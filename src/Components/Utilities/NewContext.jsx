import { createContext, useState } from "react";

export let NewContext = createContext()

export function AppDataProvider({children}) {

    let [is_login, set_is_login] = useState(false)

    let [alert, set_alert] = useState('')
    let [type_alert, set_type_alert] = useState('')

    let [users, set_users] = useState([
        {username: '', email: '', pw: ''},
    ])

    let [user_favs, set_user_favs] = useState({
        user: '',
        favs: []
    })

    return(
        <NewContext.Provider value={
            {
                is_login,
                users,
                set_is_login,
                alert, set_alert, 
                type_alert, set_type_alert,
                user_favs, set_user_favs,
            }
        }>
            {children}
        </NewContext.Provider>
    )
}