import { useContext } from "react";
import { NewContext } from "./Utilities/NewContext";
import { useNavigate } from "react-router-dom";

export default function Logout(){

    let {set_is_login} = useContext(NewContext)
    const naviagate = useNavigate()
    
    set_is_login(false)
    // localStorage.removeItem('new_user');
    localStorage.setItem('is_login', false);
    naviagate('/')
}