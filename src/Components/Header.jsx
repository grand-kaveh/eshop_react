import { Link } from 'react-router-dom'
import Logo from '../assets/images/home/logo.png'

export default function Header() {


    return (
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
                        
                        <div className="col-sm-4" >
                            <div className="logo">
                                <a href="index.html"><img src={Logo} alt="Logo" /></a>  
                            </div>
                        </div>
                        
                        <div className="col-sm-8 header-middle-menu">
                            <div className="shop-menu pull-right">
                                <ul className="nav navbar-nav">
                                    <li><Link to='/favariots'><i className="fa fa-star"></i> لیست علاقه مندی ها</Link></li>
                                    <li><Link to='/login'><i className="fa fa-lock"></i> ورود</Link></li>
                                    <li><Link to='/cart'><i className="fa fa-shopping-cart"></i> سبد خریـد</Link></li>
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
                                    <li><Link to="/" className="active">خـانه</Link></li>
                                    <li className="dropdown"><a>فروشگـاه<i className="fa fa-angle-down"></i></a>
                                        <ul role="menu" className="sub-menu">
                                            <li><Link to="/shop">محصولات</Link></li>
                                            <li><Link to='/cart'>سبـد خریـد</Link></li>
                                        </ul>
                                    </li> 
                                    <li><Link to="/blogs" className="active">اخبار</Link></li>
                                    <li><Link to="/about-us">درباره مـا</Link></li>
                                    <li><Link to="/contact-us">تماس با مـا</Link></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </header>
    )
}