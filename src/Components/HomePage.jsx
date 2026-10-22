


export default function HomePage() {

    return (
        <>
        <header id="header">
            <div className="header_top">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="contactinfo">
                                <ul className="nav nav-pills">
                                    <li><a href="#"><i className="fa fa-phone"></i> 80 21 24 36 98+ </a></li>
                                    <li><a href="#"><i className="fa fa-envelope"></i> info@domain.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="social-icons pull-right">
                                <ul className="nav navbar-nav">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="header-middle">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-sm-4 header-middle-menu">
                            <div className="shop-menu pull-left">
                                <ul className="nav navbar-nav">
                                    <li><a href="checkout.html"><i className="fa fa-crosshairs"></i> پرداخت</a></li>
                                </ul>
                            </div>
                        </div> */}
                        
                        <div className="col-sm-4" >{/* style="text-align: left;" */} 
                            <div className="logo">
                                <a href="index.html"><img src="images/home/logo.png" alt="Logo" /></a>   {/*style="text-align: center;"*/}
                            </div>
                        </div>
                        
                        <div className="col-sm-8 header-middle-menu">
                            <div className="shop-menu pull-right">
                                <ul className="nav navbar-nav">
                                    <li><a href="#"><i className="fa fa-user"></i> حساب کاربـری</a></li>
                                    <li><a href="#"><i className="fa fa-star"></i> لیست علاقه مندی ها</a></li>
                                    <li><a href="login.html"><i className="fa fa-lock"></i> ورود</a></li>
                                    <li><a href="cart.html"><i className="fa fa-shopping-cart"></i> سبد خریـد</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="header-bottom">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-sm-3">
                            <div className="search_box pull-left">
                                <input type="text" placeholder="جستـجو"/>
                            </div>
                        </div>
                        
                        <div className="col-sm-9">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div className="mainmenu pull-right">
                                <ul className="nav navbar-nav collapse navbar-collapse">
                                    <li><a href="index.html" className="active">خـانه</a></li>
                                    <li className="dropdown"><a href="#">فروشگـاه<i className="fa fa-angle-down"></i></a>
                                        <ul role="menu" className="sub-menu">
                                            <li><a href="shop.html">محصولات</a></li>
                                            <li><a href="product-details.html">جزئیات محصولات</a></li> 
                                            <li><a href="checkout.html">پرداخت</a></li> 
                                            <li><a href="cart.html">سبـد خریـد</a></li> 
                                            <li><a href="login.html">ورود</a></li> 
                                        </ul>
                                    </li> 
                                    <li className="dropdown"><a href="#">اخبـار<i className="fa fa-angle-down"></i></a>
                                        <ul role="menu" className="sub-menu">
                                            <li><a href="blog.html">آخریـن اخبـار</a></li>
                                            <li><a href="blog-single.html">صفحـه خبـر</a></li>
                                        </ul>
                                    </li> 
                                    <li><a href="About.html">درباره مـا</a></li>
                                    <li><a href="contact-us.html">تماس با مـا</a></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </header>
	
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
                                        <img src="images/home/girl2.jpg" className="girl img-responsive" alt="" />
                                        <img src="images/home/pricing.png"  className="pricing" alt="" />
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
                                        <img src="images/home/girl2.jpg" className="girl img-responsive" alt="" />
                                        <img src="images/home/pricing.png" className="pricing" alt="" />
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
                                                        <img src="images/home/Gallery.jpg" alt="" />
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
                                                        <img src="images/home/Gallery.jpg" alt="" />
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
                                                        <img src="images/home/Gallery.jpg" alt="" />
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
                                                        <img src="images/home/Gallery.jpg" alt="" />
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
                                                        <img src="images/home/Gallery.jpg" alt="" />
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
                                                        <img src="images/home/Gallery.jpg" alt="" />
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
                                                        <img src="images/home/Gallery.jpg" alt="" />
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
                                                        <img src="images/home/Gallery.jpg" alt="" />
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
                                                    <img src="images/home/product.jpg" alt="" />
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
                                                    <img src="images/home/product.jpg" alt="" />
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
                                                    <img src="images/home/product.jpg" alt="" />
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
                                                    <img src="images/home/product.jpg" alt="" />
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
                                                <img src="images/home/product.jpg" alt="" />
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
                                                <img src="images/home/product.jpg" alt="" />
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
                                                <img src="images/home/product.jpg" alt="" />
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
                                                <img src="images/home/product.jpg" alt="" />
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
                                                <img src="images/home/product.jpg" alt="" />
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
                                                <img src="images/home/product.jpg" alt="" />
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
                                                <img src="images/home/product.jpg" alt="" />
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
                                                <img src="images/home/product.jpg" alt="" />
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
                                                <img src="images/home/product.jpg" alt="" />
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
                                                <img src="images/home/product.jpg" alt="" />
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
                                                <img src="images/home/product.jpg" alt="" />
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
                                                <img src="images/home/product.jpg" alt="" />
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
                                                    <img src="images/home/Tabs.png" alt="" />
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
                                                    <img src="images/home/Tabs.png" alt="" />
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
                                                    <img src="images/home/Tabs.png" alt="" />
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
                                                    <img src="images/home/Tabs.png" alt="" />
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
                                                    <img src="images/home/Tabs.png" alt="" />
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
                                                    <img src="images/home/Tabs.png" alt="" />
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
                                                    <img src="images/home/Tabs.png" alt="" />
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
                                                    <img src="images/home/Tabs.png" alt="" />
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
                                                    <img src="images/home/Tabs.png" alt="" />
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
                                                    <img src="images/home/Tabs.png" alt="" />
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
                                                    <img src="images/home/Tabs.png" alt="" />
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
                                                    <img src="images/home/Tabs.png" alt="" />
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
                                                    <img src="images/home/Tabs.png" alt="" />
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
                                                    <img src="images/home/Tabs.png" alt="" />
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
                                                    <img src="images/home/Tabs.png" alt="" />
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
                                                    <img src="images/home/Tabs.png" alt="" />
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
                                                    <img src="images/home/Tabs.png" alt="" />
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
                                                    <img src="images/home/Tabs.png" alt="" />
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
                                                    <img src="images/home/Tabs.png" alt="" />
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
                                                    <img src="images/home/Tabs.png" alt="" />
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
        
        <footer id="footer">
            <div className="footer-Before">
                <div className="container">
                    <div className="block-news">
                        <div className="row">
                            <h3>با عضویت در خبـرنامه ما از تخفیفات ویـژه ما با خبـر شوید ... </h3>
                            <div className="searchform newslatter">
                                <input type="text" placeholder="آدرس ایمیـل شما ..."/>
                                <button type="submit" className="btn btn-default">
                                    <i className="fa fa-arrow-circle-o-left"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="address">
                                <img src="images/home/map.png" alt="" />
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="address">
                                <img src="images/home/map.png" alt="" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="companyinfo">
                                <h2><span>SHOP</span>CENTER</h2>
                                <h4>درباره ما :</h4>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده ازلورملورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="footer-widget">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="single-widget">
                                <h2>Service</h2>
                                <ul className="nav nav-pills nav-stacked">
                                    <li><a href="#">Online Help</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Order Status</a></li>
                                    <li><a href="#">Change Location</a></li>
                                    <li><a href="#">FAQ’s</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="single-widget">
                                <h2>Quock Shop</h2>
                                <ul className="nav nav-pills nav-stacked">
                                    <li><a href="#">T-Shirt</a></li>
                                    <li><a href="#">Mens</a></li>
                                    <li><a href="#">Womens</a></li>
                                    <li><a href="#">Gift Cards</a></li>
                                    <li><a href="#">Shoes</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="single-widget">
                                <h2>Policies</h2>
                                <ul className="nav nav-pills nav-stacked">
                                    <li><a href="#">Terms of Use</a></li>
                                    <li><a href="#">Privecy Policy</a></li>
                                    <li><a href="#">Refund Policy</a></li>
                                    <li><a href="#">Billing System</a></li>
                                    <li><a href="#">Ticket System</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="single-widget">
                                <h2>About Shopper</h2>
                                <ul className="nav nav-pills nav-stacked">
                                    <li><a href="#">Company Information</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Store Location</a></li>
                                    <li><a href="#">Affillate Program</a></li>
                                    <li><a href="#">Copyright</a></li>
                                </ul>
                            </div>
                        </div>	
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom" >
                <div className="container">
                    <div className="row">
                        <p className="pull-left">Copyright © 2018 
                            <a target="_blank" href="http://www.1614GP.ir"><b>1614Group</b></a>. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
            
        </footer>
        </>
    )
}