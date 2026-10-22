import { Link } from 'react-router-dom'
import Product from '../../assets/images/home/product.jpg'


export default function Child_Last4Product() {

    return (
        <div>
            <div>
                <div>
                    
                    <div className="col-sm-3">
                        <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                    <img src={Product} alt="" />
                                    <h2>محصول شماره 1</h2>
                                    <p>توضیحات کوتاه محصـول</p>
                                    <Link to="/shop/1" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>مشاهده ی جزئیات</Link>
                                </div>
                                <div className="product-overlay">
                                    <div className="overlay-content">
                                        <h2>2.500.000 R</h2>
                                        <p>توضیحات کوتاه محصـول</p>
                                        <Link to="/shop/1" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>مشاهده ی جزئیات</Link>
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
                                    
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}