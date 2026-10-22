import Girl2 from '../assets/images/home/girl2.jpg'
import Pricing from '../assets/images/home/pricing.png'
import Gallery from '../assets/images/home/Gallery.jpg'
import Product from '../assets/images/home/product.jpg'
import Tabs from '../assets/images/home/Tabs.png'
import Footer from './Footer'
import Header from './Header'

export default function HomePage() {

    

    return (
        <>

        <Header />

        <section id="slider">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div id="slider-carousel" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#slider-carousel" data-slide-to="0" className="active"></li>
                                <li data-target="#slider-carousel" data-slide-to="1"></li>
                            </ol>
                            
                            <div className="carousel-inner">
                                
                                <div className="item active">
                                    <div className="col-sm-6">
                                        <h1><span>SHOP</span>CENTER</h1>
                                        <h2>Shop Center</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <button type="button" className="btn btn-default get">Get it now</button>
                                    </div>
                                    <div className="col-sm-6">
                                        <img src={Girl2} className="girl img-responsive" alt="" />
                                        <img src={Pricing}  className="pricing" alt="" />
                                    </div>
                                </div>
                                
                                <div className="item">
                                    <div className="col-sm-6">
                                        <h1><span>SHOP</span>CENTER</h1>
                                        <h2>Shop Center</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <button type="button" className="btn btn-default get">Get it now</button>
                                    </div>
                                    <div className="col-sm-6">
                                        <img src={Girl2} className="girl img-responsive" alt="" />
                                        <img src={Pricing} className="pricing" alt="" />
                                    </div>
                                </div>
                                
                            </div>
                            
                            <a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
                                <i className="fa fa-angle-left"></i>
                            </a>
                            <a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
                                <i className="fa fa-angle-right"></i>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        
        <section>
            <div className="container">
                <div className="row">
                    
                    <div className="recommended_items">
                            <h2 className="title text-center">پر فروش ترین محصولات</h2>
                            
                            <div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="item active">	
                                        <div className="col-sm-3">
                                            <div className="product-image-wrapper">
                                                <div className="single-products">
                                                    <div className="productinfo text-center">
                                                        <img src={Gallery} alt="" />
                                                        <h2>1.250.000 R</h2>
                                                        <p>توضیحات کوتاه محصول</p>
                                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خرید</a>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="product-image-wrapper">
                                                <div className="single-products">
                                                    <div className="productinfo text-center">
                                                        <img src={Gallery} alt="" />
                                                        <h2>1.250.000 R</h2>
                                                        <p>توضیحات کوتاه محصول</p>
                                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خرید</a>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="product-image-wrapper">
                                                <div className="single-products">
                                                    <div className="productinfo text-center">
                                                        <img src={Gallery} alt="" />
                                                        <h2>1.250.000 R</h2>
                                                        <p>توضیحات کوتاه محصول</p>
                                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خرید</a>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="product-image-wrapper">
                                                <div className="single-products">
                                                    <div className="productinfo text-center">
                                                        <img src={Gallery} alt="" />
                                                        <h2>1.250.000 R</h2>
                                                        <p>توضیحات کوتاه محصول</p>
                                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خرید</a>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">	
                                        <div className="col-sm-3">
                                            <div className="product-image-wrapper">
                                                <div className="single-products">
                                                    <div className="productinfo text-center">
                                                        <img src={Gallery} alt="" />
                                                        <h2>1.250.000 R</h2>
                                                        <p>توضیحات کوتاه محصول</p>
                                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خرید</a>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="product-image-wrapper">
                                                <div className="single-products">
                                                    <div className="productinfo text-center">
                                                        <img src={Gallery} alt="" />
                                                        <h2>1.250.000 R</h2>
                                                        <p>توضیحات کوتاه محصول</p>
                                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خرید</a>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="product-image-wrapper">
                                                <div className="single-products">
                                                    <div className="productinfo text-center">
                                                        <img src={Gallery} alt="" />
                                                        <h2>1.250.000 R</h2>
                                                        <p>توضیحات کوتاه محصول</p>
                                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خرید</a>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="product-image-wrapper">
                                                <div className="single-products">
                                                    <div className="productinfo text-center">
                                                        <img src={Gallery} alt="" />
                                                        <h2>1.250.000 R</h2>
                                                        <p>توضیحات کوتاه محصول</p>
                                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خرید</a>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
                                    <i className="fa fa-angle-left"></i>
                                </a>
                                <a className="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
                                    <i className="fa fa-angle-right"></i>
                                </a>			
                            </div>
                        </div>
                    
                    <div className="col-sm-12 padding-right">
                        <div className="features_items">
                            <a href="shop-2.html"><h2 className="title text-center">فـروش خـرده</h2></a>
                            <div id="new-item-carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                            <div className="item active">
                                <div className="col-sm-3">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={Product} alt="" />
                                                    <h2>2.500.000 R</h2>
                                                    <p>توضیحات کوتاه محصـول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                                <div className="product-overlay">
                                                    <div className="overlay-content">
                                                        <h2>2.500.000 R</h2>
                                                        <p>توضیحات کوتاه محصـول</p>
                                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-plus-square"></i>لیست علاقه مندی ها
                                                    </a>
                                                </li>
                                                <li><a href="#"><i className="fa fa-plus-square"></i>مقایسه</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={Product} alt="" />
                                                    <h2>2.500.000 R</h2>
                                                    <p>توضیحات کوتاه محصـول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                                <div className="product-overlay">
                                                    <div className="overlay-content">
                                                        <h2>2.500.000 R</h2>
                                                        <p>توضیحات کوتاه محصـول</p>
                                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-plus-square"></i>لیست علاقه مندی ها
                                                    </a>
                                                </li>
                                                <li><a href="#"><i className="fa fa-plus-square"></i>مقایسه</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={Product} alt="" />
                                                    <h2>2.500.000 R</h2>
                                                    <p>توضیحات کوتاه محصـول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                                <div className="product-overlay">
                                                    <div className="overlay-content">
                                                        <h2>2.500.000 R</h2>
                                                        <p>توضیحات کوتاه محصـول</p>
                                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-plus-square"></i>لیست علاقه مندی ها
                                                    </a>
                                                </li>
                                                <li><a href="#"><i className="fa fa-plus-square"></i>مقایسه</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={Product} alt="" />
                                                    <h2>2.500.000 R</h2>
                                                    <p>توضیحات کوتاه محصـول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                                <div className="product-overlay">
                                                    <div className="overlay-content">
                                                        <h2>2.500.000 R</h2>
                                                        <p>توضیحات کوتاه محصـول</p>
                                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-plus-square"></i>لیست علاقه مندی ها
                                                    </a>
                                                </li>
                                                <li><a href="#"><i className="fa fa-plus-square"></i>مقایسه</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                            <div className="col-sm-3">
                                <div className="product-image-wrapper">
                                    <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src={Product} alt="" />
                                                <h2>2.500.000 R</h2>
                                                <p>توضیحات کوتاه محصـول</p>
                                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>2.500.000 R</h2>
                                                    <p>توضیحات کوتاه محصـول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="choose">
                                        <ul className="nav nav-pills nav-justified">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-plus-square"></i>لیست علاقه مندی ها
                                                </a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-plus-square"></i>مقایسه</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="product-image-wrapper">
                                    <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src={Product} alt="" />
                                                <h2>2.500.000 R</h2>
                                                <p>توضیحات کوتاه محصـول</p>
                                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>2.500.000 R</h2>
                                                    <p>توضیحات کوتاه محصـول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="choose">
                                        <ul className="nav nav-pills nav-justified">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-plus-square"></i>لیست علاقه مندی ها
                                                </a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-plus-square"></i>مقایسه</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="product-image-wrapper">
                                    <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src={Product} alt="" />
                                                <h2>2.500.000 R</h2>
                                                <p>توضیحات کوتاه محصـول</p>
                                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>2.500.000 R</h2>
                                                    <p>توضیحات کوتاه محصـول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="choose">
                                        <ul className="nav nav-pills nav-justified">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-plus-square"></i>لیست علاقه مندی ها
                                                </a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-plus-square"></i>مقایسه</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="product-image-wrapper">
                                    <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src={Product} alt="" />
                                                <h2>2.500.000 R</h2>
                                                <p>توضیحات کوتاه محصـول</p>
                                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>2.500.000 R</h2>
                                                    <p>توضیحات کوتاه محصـول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="choose">
                                        <ul className="nav nav-pills nav-justified">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-plus-square"></i>لیست علاقه مندی ها
                                                </a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-plus-square"></i>مقایسه</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                                <a className="left recommended-item-control" href="#new-item-carousel" data-slide="prev">
                                    <i className="fa fa-angle-left"></i>
                                </a>
                                <a className="right recommended-item-control" href="#new-item-carousel" data-slide="next">
                                    <i className="fa fa-angle-right"></i>
                                </a>
                        </div>
                        </div>			
                        
                        <div className="features_items">
                            <a href="shop.html"><h2 className="title text-center">فـروش عـمده</h2></a>
                            <div id="major-item-carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                            <div className="item active">
                            <div className="col-sm-3">
                                <div className="product-image-wrapper">
                                    <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src={Product} alt="" />
                                                <h2>2.500.000 R</h2>
                                                <p>توضیحات کوتاه محصـول</p>
                                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>2.500.000 R</h2>
                                                    <p>توضیحات کوتاه محصـول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="choose">
                                        <ul className="nav nav-pills nav-justified">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-plus-square"></i>لیست علاقه مندی ها
                                                </a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-plus-square"></i>مقایسه</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="product-image-wrapper">
                                    <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src={Product} alt="" />
                                                <h2>2.500.000 R</h2>
                                                <p>توضیحات کوتاه محصـول</p>
                                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>2.500.000 R</h2>
                                                    <p>توضیحات کوتاه محصـول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="choose">
                                        <ul className="nav nav-pills nav-justified">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-plus-square"></i>لیست علاقه مندی ها
                                                </a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-plus-square"></i>مقایسه</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div><div className="col-sm-3">
                                <div className="product-image-wrapper">
                                    <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src={Product} alt="" />
                                                <h2>2.500.000 R</h2>
                                                <p>توضیحات کوتاه محصـول</p>
                                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>2.500.000 R</h2>
                                                    <p>توضیحات کوتاه محصـول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="choose">
                                        <ul className="nav nav-pills nav-justified">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-plus-square"></i>لیست علاقه مندی ها
                                                </a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-plus-square"></i>مقایسه</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div><div className="col-sm-3">
                                <div className="product-image-wrapper">
                                    <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src={Product} alt="" />
                                                <h2>2.500.000 R</h2>
                                                <p>توضیحات کوتاه محصـول</p>
                                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>2.500.000 R</h2>
                                                    <p>توضیحات کوتاه محصـول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="choose">
                                        <ul className="nav nav-pills nav-justified">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-plus-square"></i>لیست علاقه مندی ها
                                                </a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-plus-square"></i>مقایسه</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="item">
                            <div className="col-sm-3">
                                <div className="product-image-wrapper">
                                    <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src={Product} alt="" />
                                                <h2>2.500.000 R</h2>
                                                <p>توضیحات کوتاه محصـول</p>
                                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>2.500.000 R</h2>
                                                    <p>توضیحات کوتاه محصـول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="choose">
                                        <ul className="nav nav-pills nav-justified">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-plus-square"></i>لیست علاقه مندی ها
                                                </a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-plus-square"></i>مقایسه</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="product-image-wrapper">
                                    <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src={Product} alt="" />
                                                <h2>2.500.000 R</h2>
                                                <p>توضیحات کوتاه محصـول</p>
                                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>2.500.000 R</h2>
                                                    <p>توضیحات کوتاه محصـول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="choose">
                                        <ul className="nav nav-pills nav-justified">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-plus-square"></i>لیست علاقه مندی ها
                                                </a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-plus-square"></i>مقایسه</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="product-image-wrapper">
                                    <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src={Product} alt="" />
                                                <h2>2.500.000 R</h2>
                                                <p>توضیحات کوتاه محصـول</p>
                                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>2.500.000 R</h2>
                                                    <p>توضیحات کوتاه محصـول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="choose">
                                        <ul className="nav nav-pills nav-justified">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-plus-square"></i>لیست علاقه مندی ها
                                                </a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-plus-square"></i>مقایسه</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="product-image-wrapper">
                                    <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src={Product} alt="" />
                                                <h2>2.500.000 R</h2>
                                                <p>توضیحات کوتاه محصـول</p>
                                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>2.500.000 R</h2>
                                                    <p>توضیحات کوتاه محصـول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="choose">
                                        <ul className="nav nav-pills nav-justified">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-plus-square"></i>لیست علاقه مندی ها
                                                </a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-plus-square"></i>مقایسه</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                                <a className="left recommended-item-control" href="#major-item-carousel" data-slide="prev">
                                    <i className="fa fa-angle-left"></i>
                                </a>
                                <a className="right recommended-item-control" href="#major-item-carousel" data-slide="next">
                                    <i className="fa fa-angle-right"></i>
                                </a>
                        </div>
                        </div>
                        
                        <div className="category-tab">
                            <div className="col-sm-12">
                                <ul className="nav nav-tabs">
                                    <li className="active"><a href="#Tab_001" data-toggle="tab">گـروه محصولات 1</a></li>
                                    <li><a href="#Tab_002" data-toggle="tab">گـروه محصولات 2</a></li>
                                    <li><a href="#Tab_003" data-toggle="tab">گـروه محصولات 3</a></li>
                                    <li><a href="#Tab_004" data-toggle="tab">گـروه محصولات 4</a></li>
                                    <li><a href="#Tab_005" data-toggle="tab">گـروه محصولات 5</a></li>
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade active in" id="Tab_001" >
                                    <div className="col-sm-3">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={Tabs} alt="" />
                                                    <h2>560.000 ريال</h2>
                                                    <p>توضیحات کوتاه محصول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={Tabs} alt="" />
                                                    <h2>560.000 ريال</h2>
                                                    <p>توضیحات کوتاه محصول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={Tabs} alt="" />
                                                    <h2>560.000 ريال</h2>
                                                    <p>توضیحات کوتاه محصول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={Tabs} alt="" />
                                                    <h2>560.000 ريال</h2>
                                                    <p>توضیحات کوتاه محصول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="tab-pane fade" id="Tab_002" >
                                    <div className="col-sm-3">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={Tabs} alt="" />
                                                    <h2>560.000 ريال</h2>
                                                    <p>توضیحات کوتاه محصول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={Tabs} alt="" />
                                                    <h2>560.000 ريال</h2>
                                                    <p>توضیحات کوتاه محصول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={Tabs} alt="" />
                                                    <h2>560.000 ريال</h2>
                                                    <p>توضیحات کوتاه محصول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={Tabs} alt="" />
                                                    <h2>560.000 ريال</h2>
                                                    <p>توضیحات کوتاه محصول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="tab-pane fade" id="Tab_003" >
                                    <div className="col-sm-3">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={Tabs} alt="" />
                                                    <h2>560.000 ريال</h2>
                                                    <p>توضیحات کوتاه محصول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={Tabs} alt="" />
                                                    <h2>560.000 ريال</h2>
                                                    <p>توضیحات کوتاه محصول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={Tabs} alt="" />
                                                    <h2>560.000 ريال</h2>
                                                    <p>توضیحات کوتاه محصول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={Tabs} alt="" />
                                                    <h2>560.000 ريال</h2>
                                                    <p>توضیحات کوتاه محصول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="tab-pane fade" id="Tab_004" >
                                    <div className="col-sm-3">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={Tabs} alt="" />
                                                    <h2>560.000 ريال</h2>
                                                    <p>توضیحات کوتاه محصول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={Tabs} alt="" />
                                                    <h2>560.000 ريال</h2>
                                                    <p>توضیحات کوتاه محصول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={Tabs} alt="" />
                                                    <h2>560.000 ريال</h2>
                                                    <p>توضیحات کوتاه محصول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={Tabs} alt="" />
                                                    <h2>560.000 ريال</h2>
                                                    <p>توضیحات کوتاه محصول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="tab-pane fade" id="Tab_005" >
                                    <div className="col-sm-3">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={Tabs} alt="" />
                                                    <h2>560.000 ريال</h2>
                                                    <p>توضیحات کوتاه محصول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={Tabs} alt="" />
                                                    <h2>560.000 ريال</h2>
                                                    <p>توضیحات کوتاه محصول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={Tabs} alt="" />
                                                    <h2>560.000 ريال</h2>
                                                    <p>توضیحات کوتاه محصول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={Tabs} alt="" />
                                                    <h2>560.000 ريال</h2>
                                                    <p>توضیحات کوتاه محصول</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>			
            </div>
        </section>

        <Footer />

        </>
    )
}