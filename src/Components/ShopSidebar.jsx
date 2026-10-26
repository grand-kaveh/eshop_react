import { Link } from 'react-router-dom'
import shipping from '../assets/images/home/shipping.jpg'
import ShopSidebarCategory from './ShopSidebarCategory'
import GetProducts from './Utilities/Products';

export default function ShopSidebar() {

    let all_products = GetProducts()
    let  brands = [...new Set(all_products.map((p) => p.brand).filter(Boolean))];
    // console.log(brands);

    function getBrandCount(brand) {
          return all_products.reduce(
            (count, p) => (p.brand === brand ? count + 1 : count),
            0
        );
    }

    return(
        <div className="col-sm-3">
            <div className="left-sidebar">

                <h2>دسته بندی محصولات</h2>
                <div className="panel-group category-products" id="accordian">

                    <ShopSidebarCategory category='شلوار' />
                    <ShopSidebarCategory category='کفش' />
                    <ShopSidebarCategory category='کیف' />
                    <ShopSidebarCategory category='پیراهن' />

                </div>
            
                <div className="brands_products">
                    <h2>برنـد ها</h2>
                    <div className="brands-name">
                        <ul className="nav nav-pills nav-stacked">
                            {brands.map((brand, index) => <li key={index}><Link to={`/shop?brand=${brand}`}> <span className="pull-left">({getBrandCount(brand)})</span>{brand}</Link></li>)}
                            
                        </ul>
                    </div>
                </div>
                
                <div className="shipping text-center">
                    <img src={shipping} alt="" />
                </div>
                
            </div>
        </div>
    )
}