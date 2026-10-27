import { useContext, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { NewContext } from "./Utilities/NewContext";
import Register from "./Register";
import Login from "./Login";


export default function Auth() {

    let {is_login} = useContext(NewContext)
    if(is_login) {
        return <h3>شما در سایت ثبتنام کرده اید.</h3>
    }



    return (
        <>
            <Header />
            
            <div className="container sans">
                <section id="form">
                    <div className="row">


                        <Login />


                        <div className="col-sm-1">
                            <h2 className="or">یا</h2>
                        </div>


                        <Register />

                        
                    </div>
                </section>
            </div>
            <Footer />

        </>
    )
}