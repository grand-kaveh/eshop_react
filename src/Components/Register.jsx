import { useState } from "react"


export default function Register() {

    const unREGEX = /^[A-Za-z0-9._]+$/;
    const emailREGEX = /^(?!.*\.\.)[A-Za-z0-9](?:[A-Za-z0-9._%+-]{0,62}[A-Za-z0-9])?@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;
    const pwREGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])\S{8,}$/;

    let [msg, set_msg] = useState('')

    function register_form(ev) {
        if(ev.key == 'Enter' || ev._reactName == 'onClick'){
            set_msg('')
            let un_field = document.getElementById('un_Lfield').value;
            let email_field = document.getElementById('email_field').value;
            let pw_field = document.getElementById('password_Lfield').value;

            // username validation
            if(un_field.length <=3){set_msg('نام کاربری نباید کمتر از 3 حرف باشد.');return;}
            if(un_field.length > 50){set_msg('نام کاربری نباید بیشتر از 50 حرف باشد.');return;}
            if (!unREGEX.test(un_field)) {set_msg("نام کاربری فقط می‌تواند شامل حروف انگلیسی، عدد، نقطه و آندرلاین باشد."); return;}

            // email validation
            if (!email_field) {set_msg("ایمیل را وارد کنید.");return;}
            if (email_field.length > 254) {set_msg("ایمیل بیش از حد طولانی است."); return;}
            if (!emailREGEX.test(email_field)) {set_msg("ایمیل معتبر نیست."); return;}

            // pw validation
            if (!pw_field){set_msg("رمز عبور را وارد کنید."); return;} 
            if (pw_field.length > 128){set_msg("رمز عبور بیش از حد طولانی است."); return;}
            if (!pwREGEX.test(pw_field)) {set_msg("رمز عبور باید حداقل ۸ کاراکتر و شامل حرف بزرگ، حرف کوچک، عدد و کاراکتر خاص باشد."); return;}

            if(localStorage.getItem('new_user')){ 
                set_msg('شما قبلا ثبتنام کرده اید.');
                return;
            } else {
                localStorage.setItem('new_user', JSON.stringify({username: un_field, email: email_field, pw: pw_field}));
                document.getElementById('un_Lfield').value = '';
                document.getElementById('email_field').value = '';
                document.getElementById('password_Lfield').value = '';
                set_msg('ثبتنام شما با موفقیت انجام شد.')
                return;
            }
        }
    }

    return (
        <div className="col-sm-4">
            <div className="signup-form">
                <h2>ثبت نام کاربـر جدیـد</h2>
                {msg ? <p className="error_msg">{msg}</p> : ''}
                <form>
                    <input type="text" id="un_Lfield" onKeyDown={register_form} placeholder="نام کاربـری"/>
                    <input type="email" id="email_field" onKeyDown={register_form} placeholder="آدرس ایمیـل"/>
                    <input type="password" id="password_Lfield" onKeyDown={register_form} placeholder="رمـز عبـور"/>
                    <button type="button" onClick={register_form} className="btn btn-default">ثبت نام</button>
                </form>
            </div>
        </div>
    )
}