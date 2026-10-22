import Baleimg from '../assets/images/product-details/Bale.png'
import Soroushimg from '../assets/images/product-details/Soroush.png'
import Instagramimg from '../assets/images/product-details/Instagram.png'
import Footer from "./Footer";
import Header from "./Header";

export default function ContactUs() {


    return(
        <>
        <Header />

        <div id="contact-page" className="container">
            <div className="bg">

                <div className="row">  	
                    <div className="col-sm-8">
                        <div className="contact-form">
                            <h2 className="title text-center">با ما در ارتباط باشیـد</h2>
                            
                            <form id="main-contact-form" className="contact-form row" name="contact-form" method="post">
                                <div className="form-group col-md-6">
                                    <input type="text" name="name" className="form-control" required="required" placeholder="نام" />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="email" name="email" className="form-control" required="required" placeholder="ایمیـل"/>
                                </div>
                                <div className="form-group col-md-12">
                                    <input type="text" name="subject" className="form-control" required="required" placeholder="موضـوع"/>
                                </div>
                                <div className="form-group col-md-12">
                                    <textarea name="message" id="message" required className="form-control" rows="8" placeholder="پیغـام شمـا"></textarea>
                                </div>                        
                                <div className="form-group col-md-12">
                                    <input type="submit" name="submit" className="btn btn-primary pull-right" value="ارسـال"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="contact-info">
                            <h2 className="title text-center">اطلاعات تماس</h2>
                            <address>
                                <p>گـروه تکنوگـرافی 1614</p>
                                <p>ایـران - آذربایجـان غربـی - خـوی</p>
                                <p>مجتـمع تجـاری تفریحـی شمس - طبـقه 2 - پلاک 54</p>
                                <p>تلفن تماس : 80 21 24 36 044</p>
                                <p>فکس : 80 21 24 36 044</p>
                                <p>ایمیـل : info@1614GP.ir</p>
                            </address>
                            <div className="social-networks">
                                <h2 className="title text-center">شبکـه های اجتـماعی</h2>
                                <span  className="socials-share share">
                                        <ul>
                                            <a href="#">
                                                <li>
                                                    <label>بلـه</label>
                                                    <img src={Baleimg}/>
                                                </li>
                                            </a>
                                            <a href="#">
                                                <li>
                                                    <label>سـروش</label>
                                                    <img src={Soroushimg}/>
                                                </li>
                                            </a>
                                            <a href="#">
                                                <li>
                                                    <label>اینستاگرام</label>
                                                    <img src={Instagramimg}/>
                                                </li>
                                            </a>
                                        </ul>
                                    </span>
                            </div>
                        </div>
                    </div>    			
                </div>  
            </div>	
        </div>

        <Footer />
        </>
    )
}