import Similar1 from '../assets/images/product-details/similar1.jpg'
import Similar2 from '../assets/images/product-details/similar2.jpg'
import Similar3 from '../assets/images/product-details/similar3.jpg'
import img1 from '../assets/images/product-details/1.jpg'
import newpng from '../assets/images/product-details/new.png'
import Baleimg from '../assets/images/product-details/Bale.png'
import Soroushimg from '../assets/images/product-details/Soroush.png'
import Instagramimg from '../assets/images/product-details/Instagram.png'
import Footer from "./Footer";
import Header from "./Header";
import DetailsComment from "./DetailsComment";
import ShopSidebar from './ShopSidebar'

export default function Details() {

    return (
        <>
            <Header />
            
            <section>
                <div className="container">
                    <div className="row">
                        
                        <div className="col-sm-9 padding-right">
                            <div className="product-details">
                                <div className="col-sm-5">
                                    <div className="view-product">
                                        <img src={img1} alt="" />
                                    </div>
                                    <div id="similar-product" className="carousel slide" data-ride="carousel">
                                        
                                        <div className="carousel-inner">
                                            <div className="item active">
                                            <a href=""><img src={Similar1} alt="" /></a>
                                            <a href=""><img src={Similar2} alt="" /></a>
                                            <a href=""><img src={Similar3} alt="" /></a>
                                            </div>
                                            
                                        </div>
                                    </div>

                                </div>
                                <div className="col-sm-7">
                                    <div className="product-information">
                                        <img src={newpng} className="newarrival" alt="" />
                                        <div>
                                            <h2>کـالای شمـاره 010</h2>
                                            <p>شناسـه : 0110110</p>
                                        </div>
                                        <div>
                                            <span>
                                                <span>قیمت : 2.350.000 ريال</span>
                                            </span>
                                            <span>
                                                <button type="button" className="btn btn-fefault cart">
                                                    <i className="fa fa-shopping-cart"></i>
                                                    افـزودن به سبـد خریـد
                                                </button>
                                            </span>
                                        </div>
                                        <div>
                                            <p><b>موجـودی :</b> در انبـار موجود می باشد</p>
                                            <p><b>شرایـط :</b> جدیـد</p>
                                            <p><b>برنـد :</b> برنـد </p>
                                        </div>
                                        <span  className="socials-share share">
                                            <ul>
                                                <a href="#">
                                                    <li>
                                                        <label>بلـه</label>
                                                        <img src={Baleimg} />
                                                    </li>
                                                </a>
                                                <a href="#">
                                                    <li>
                                                        <label>سـروش</label>
                                                        <img src={Soroushimg} />
                                                    </li>
                                                </a>
                                                <a href="#">
                                                    <li>
                                                        <label>اینستاگرام</label>
                                                        <img src={Instagramimg} />
                                                    </li>
                                                </a>
                                            </ul>
                                        </span>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <div className="category-tab shop-details-tab">
                                <div className="col-sm-12">
                                    <ul className="nav nav-tabs">
                                        <li><a href="#details" data-toggle="tab">جزئیات</a></li>
                                        <li className="active"><a href="#reviews" data-toggle="tab">نظرات (5)</a></li>
                                    </ul>
                                </div>
                                <div className="tab-content">

                                    <div className="tab-pane fade" id="details" >
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ipsa!</p>

                                    </div>
                                    
                                    <DetailsComment />
                                    
                                </div>
                            </div>
                            
                        </div>
                        
                        <ShopSidebar />
                        
                    </div>
                </div>
            </section>
            

            <Footer />
        </>
    )
}