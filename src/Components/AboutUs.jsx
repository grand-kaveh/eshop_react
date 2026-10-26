import Logo from '../assets/images/home/About-Logo.jpg'
import Footer from "./Footer";
import Header from "./Header";

export default function AboutUs() {

    return(
        <>
        <Header />

        <div id="contact-page" className="container sans">
            <div className="bg">
                        
                <div className="row"> 
                    <div className="col-sm-4">
                        <div className="contact-info">
                            <h2 className="title text-center">لوگـو شرکت</h2>
                            <img src={Logo} className="img-responsive" />
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="about">
                            <h2 className="title text-center">دربـاره ما</h2>
                            <p className="about-desc">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده ازلورملورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. 
                            </p>
                            <p className="about-desc">
                                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                            </p>
                        </div>
                    </div>    			
                </div>  
                
                <div className="row">
                    <div className="col-sm-12 about-address">
                        <address>
                            <p>گـروه تکنوگـرافی 1614 | یـران - آذربایجـان غربـی - خـوی | مجتـمع تجـاری تفریحـی شمس - طبـقه 2 - پلاک 54 | تلفن تماس : 80 21 24 36 044 | فکس : 80 21 24 36 044 | ایمیـل : info@1614GP.ir
                            </p>
                        </address>
                    </div>
                </div>
                
                
            </div>	
        </div>

        <Footer />
        </>
    )
}