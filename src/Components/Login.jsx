import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NewContext } from "./Utilities/NewContext";

export default function Login() {

    let [msg, set_msg] = useState('')
    let {set_is_login} = useContext(NewContext)
    const navigate = useNavigate()
    
    
    function login_form(ev) {
        if(ev.key == 'Enter' || ev._reactName == 'onClick'){
            set_msg('')
            
            // let un_field = document.getElementById('un_field').value;
            // let pw_field = document.getElementById('pw_field').value;
            
            // new_user {"username":"admin","email":"admin@gmail.com","pw":"admin"}
            let un_field = 'admin'
            let pw_field = 'admin'

            if(un_field.length <=3){set_msg('نام کاربری نباید کمتر از 3 حرف باشد.');return;}
            if (!pw_field){set_msg("رمز عبور را وارد کنید."); return;} 
        
            let saved_user = JSON.parse(localStorage.getItem('new_user'))
            if(saved_user && saved_user.username == un_field && saved_user.pw == pw_field){ 
                set_msg('ورود شما به سایت تایید شد.');
                set_is_login(true)
                localStorage.setItem('is_login', true);
                
                navigate('/')
            } else {
                set_msg('نام کاربری یا رمزعبور اشتباه است.')
                return;
            }
        }
    }

    return (
        <div className="col-sm-4 col-sm-offset-1">
            <div className="login-form">
                <h2>ورود به حساب کاربـری :</h2>
                {msg ? <p className="error_msg">{msg}</p> : ''}
                <form>
                    <input type="text" onKeyDown={login_form} id="un_field" placeholder="نام کاربری" />
                    <input type="password" onKeyDown={login_form} id="pw_field" placeholder="رمز عبور" />
                    <span>
                        <input type="checkbox" id="rememberMe" className="checkbox"/> 
                        مرا بخاطـر بسپـار
                    </span>
                    <button type="button" onClick={login_form} className="btn btn-default">ورود</button>
                </form>
            </div>
        </div>
    )
}