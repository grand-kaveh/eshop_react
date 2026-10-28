import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { NewContext } from './Utilities/NewContext';

export default function Child_RecentProduct({product, size_height_product}) {

    let {user_favs, set_user_favs} = useContext(NewContext)
    let {is_login, set_alert, set_type_alert} = useContext(NewContext)

    function truncateWords(text, maxWords = 3) {
        if (!text) return "";
        const words = text.trim().split(/\s+/);
        if (words.length <= maxWords) return text;
        return words.slice(0, maxWords).join(" ") + "...";
    }

    function add_fav() {

        if(user_favs.favs.filter((element) => element.id == product.id).length == 0){
            set_user_favs({
                user: JSON.parse(localStorage.getItem('new_user')).username, 
                favs: [...user_favs.favs, product]
            })

            set_alert('محصول مورد نظر به لیست علاقه مندی های شما اضافه شد.')
            event.target.innerHTML = 'اضافه شد!';
            
            set_type_alert('success')
            return;
        }
        else {
            event.target.innerHTML = 'قبلا اضافه کرده بودید';
            set_alert('شما قبلا این محصول را به لیست خود اضافه کرده بودید.')
            set_type_alert('primary')
            return;
        }
    }

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
                        {is_login ? <li><a onClick={add_fav}><i className="fa fa-plus-square"></i>لیست علاقه مندی ها</a></li> : ''}
                    </ul>
                </div>
            </div>
        </div>

    )
}