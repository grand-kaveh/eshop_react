import { Link } from 'react-router-dom'
import Productimg from '../../assets/images/home/product.jpg'


export default function Child_RecentProduct({product}) {

    return (
        <div>
            <div>
                <div>
                    
                    <div className="col-sm-3">
                        <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                    <img src={Productimg} alt={product.title} />
                                    <h2>{product.title}</h2>
                                    <p>{product.short_desc}</p>
                                    <Link to={`/shop/${product.id}`} className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>مشاهده ی جزئیات</Link>
                                </div>
                                <div className="product-overlay">
                                    <div className="overlay-content">
                                        <h2>{product.price} R</h2>
                                        <p>{product.short_desc}</p>
                                        <Link to={`/shop/${product.id}`} className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>مشاهده ی جزئیات</Link>
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