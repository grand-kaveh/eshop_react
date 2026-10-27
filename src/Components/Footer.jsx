import { Link } from 'react-router-dom'
import Map from '../assets/images/home/map.png'
import { useContext } from 'react'
import { NewContext } from './Utilities/NewContext'

export default function Footer() {

    let {is_login} = useContext(NewContext)

    return (
        <footer id="footer">

            <div className="footer-Before">
                <div className="container">
                    <div className="block-news">
                        <div className="row">
                            <h3 className='sans'>با عضویت در خبـرنامه ما از تخفیفات ویـژه ما با خبـر شوید ... </h3>
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
                                <img src={Map} alt="" />
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="address">
                                <img src={Map} alt="" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="companyinfo">
                                <h2><span>SHOP</span>CENTER</h2>
                                <h4 className='sans'>درباره ما :</h4>
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
                                <h2>خدمات</h2>
                                <ul className="nav nav-pills nav-stacked">
                                    <li><a href="#">تماس باما</a></li>
                                    <li><a href="#">درباره ما</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="single-widget">
                                <h2>دسترسی سریع</h2>
                                <ul className="nav nav-pills nav-stacked">
                                    <li><Link to='shop?category=شلوار'>شلوار</Link></li>
                                    <li><Link to='shop?category=کفش'>کفش</Link></li>
                                    <li><Link to='shop?category=پیراهن'>پیراهن</Link></li>
                                    <li><Link to='shop?category=کیف'>کیف</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="single-widget">
                                <h2>لینک های اصلی</h2>
                                <ul className="nav nav-pills nav-stacked">
                                    <li><a href="#">صفحه اصلی</a></li>
                                    <li><a href="#">محصولات</a></li>
                                    {is_login ? <li><a href="#">علاقه مندی ها</a></li> : ''}
                                    {is_login ? '' : <li><a href="#">ورود</a></li>}
                                    {is_login ? <li><a href="#">سبد خرید</a></li> : ''}
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
    )
}