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
import GetProducts from './Utilities/Products'
import { useParams } from 'react-router-dom'

export default function Details() {

    // document.title = 'نام محصول';
    let all_products = GetProducts()
    const { ProductId } = useParams();
    
    const product = all_products.find(item => item.id === ProductId);

    if (!product) {
        return <p>محصولی با این شناسه پیدا نشد</p>;
    }

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
                                        <img src={img1} alt={product.title} />
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
                                            <h2>{product.title}</h2>
                                        </div>
                                        <div>
                                            <span>
                                                <span>قیمت : {product.price} ريال</span>
                                            </span>
                                            <span>
                                                <button type="button" className="btn btn-fefault cart">
                                                    <i className="fa fa-shopping-cart"></i>
                                                    افـزودن به سبـد خریـد
                                                </button>
                                            </span>
                                        </div>
                                        <div>
                                            <p><b>موجـودی :</b> {product.isexist ? 'در انبار موجود میباشد' : 'در حال حاضر موجودی نداریم'}</p>
                                            <p><b>برنـد :</b> {product.brand} </p>
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
                                        <p>{product.desc}</p>

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