import newpng from '../assets/images/product-details/new.png'
import Baleimg from '../assets/images/product-details/Bale.png'
import Soroushimg from '../assets/images/product-details/Soroush.png'
import Instagramimg from '../assets/images/product-details/Instagram.png'
import Footer from "./Footer";
import Header from "./Header";
import DetailsComment from "./DetailsComment";
import ShopSidebar from './ShopSidebar'
import GetProducts from './Utilities/Products'
import { Link, useParams } from 'react-router-dom'
import { useContext, useState } from 'react';
import { NewContext } from './Utilities/NewContext';

export default function Details() {

    // document.title = 'نام محصول';
    let all_products = GetProducts()
    const { ProductId } = useParams();
    
    const product = all_products.find(item => item.id === ProductId);

    if (!product) {
        return <p>محصولی با این شناسه پیدا نشد</p>;
    }

    let {is_login} = useContext(NewContext)
    let [tabshow, set_tabshow] = useState('details')

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
                                        <img src={product.img} alt={product.title} />
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
                                                {is_login ? <Link to='/cart' type="button" className="btn btn-fefault cart"><i className="fa fa-shopping-cart"></i>افـزودن به سبـد خریـد</Link> : <Link to='/login' type="button" className="btn btn-fefault cart">برای افزودن به سبد خرید ابتدا باید وارد سایت شوید</Link>}
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
                                        <li onClick={() =>set_tabshow('details')} className={tabshow == 'details' ? 'active' : ''}><a>جزئیات</a></li>
                                        <li onClick={() =>set_tabshow('comments')} className={tabshow == 'comments' ? 'active' : ''}><a>نظرات (5)</a></li>
                                    </ul>
                                </div>
                                <div className="tab-content">

                                    {tabshow == 'details' ? <div className="fade-in sans" id="details" ><p>{product.desc}</p></div> : '' }
                                    {tabshow == 'comments' ? <div className="fade-in sans" id="reviews" ><DetailsComment /></div> : ''}
                                    
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