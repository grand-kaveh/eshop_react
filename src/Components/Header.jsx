import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/images/home/logo.png'
import { useContext } from 'react'
import { NewContext } from './Utilities/NewContext'


export default function Header() {

    let {is_login} = useContext(NewContext)

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
                                <Link to="/"><img src={Logo} alt="Logo" /></Link>  
                            </div>
                        </div>
                        
                        <div className="col-sm-8 header-middle-menu">
                            <div className="shop-menu pull-right">
                                <ul className="nav navbar-nav">
                                    {is_login ? '' : <li><NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}><i className="fa fa-lock"></i> ورود</NavLink></li> }
                                    {is_login ? <li><NavLink to="/favariots" className={({ isActive }) => (isActive ? "active" : "")}><i className="fa fa-star"></i> لیست علاقه مندی ها</NavLink></li> : ''}
                                    {is_login ? <li><NavLink to="/cart" className={({ isActive }) => (isActive ? "active" : "")}><i className="fa fa-shopping-cart"></i> سبد خریـد</NavLink></li> : ''}
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
                                    <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>خـانه</NavLink></li>
                                    <li className="dropdown"><a>فروشگـاه<i className="fa fa-angle-down"></i></a>
                                        <ul role="menu" className="sub-menu">
                                            <li><Link to="/shop">محصولات</Link></li>
                                            {is_login ? <li><Link to='/cart'>سبـد خریـد</Link></li> : ''}
                                        </ul>
                                    </li>
                                    <li><NavLink to="/blogs" className={({ isActive }) => (isActive ? "active" : "")}>اخبار</NavLink></li>
                                    <li><NavLink to="/about-us" className={({ isActive }) => (isActive ? "active" : "")}>درباره مـا</NavLink></li>
                                    <li><NavLink to="/contact-us" className={({ isActive }) => (isActive ? "active" : "")}>تماس با مـا</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </header>
    )
}