import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { NewContext } from '../Utilities/NewContext';

export default function Child_RecentProduct({product, size_height_product}) {

    function truncateWords(text, maxWords = 3) {
        if (!text) return "";
        const words = text.trim().split(/\s+/);
        if (words.length <= maxWords) return text;
        return words.slice(0, maxWords).join(" ") + "...";
    }

    let {is_login} = useContext(NewContext)

    return (
                    
        <div className={`col-sm-${size_height_product}`}>
            <div className="product-image-wrapper">
                <div className="single-products">
                    <div className="productinfo text-center">
                        <img src={product.img} alt={product.title} />
                        <h2>{truncateWords(product.title)}</h2>
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
                        {is_login ? <li><Link to="/favariots"><i className="fa fa-plus-square"></i>لیست علاقه مندی ها</Link></li> : ''}
                    </ul>
                </div>
            </div>
        </div>

    )
}