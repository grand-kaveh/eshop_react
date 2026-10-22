import Footer from "./Footer";
import Header from "./Header";


export default function Login() {

    return (
        <>
            <Header />
            
            <div className="container">
                <section id="form">
                    <div className="row">
                        <div className="col-sm-4 col-sm-offset-1">
                            <div className="login-form">
                                <h2>ورود به حساب کاربـری :</h2>
                                <form action="#">
                                    <input type="text" placeholder="نام کاربری" />
                                    <input type="email" placeholder="آدرس ایمیـل" />
                                    <span>
                                        <input type="checkbox" className="checkbox"/> 
                                        مرا بخاطـر بسپـار
                                    </span>
                                    <button type="submit" className="btn btn-default">ورود</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-1">
                            <h2 className="or">یا</h2>
                        </div>
                        <div className="col-sm-4">
                            <div className="signup-form">
                                <h2>ثبت نام کاربـر جدیـد</h2>
                                <form action="#">
                                    <input type="text" placeholder="نام کاربـری"/>
                                    <input type="email" placeholder="آدرس ایمیـل"/>
                                    <input type="password" placeholder="رمـز عبـور"/>
                                    <button type="submit" className="btn btn-default">ثبت نام</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />

        </>
    )
}