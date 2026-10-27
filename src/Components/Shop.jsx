import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Advertisement from '../assets/images/shop/advertisement.jpg'
import Footer from "./Footer";
import Header from "./Header";
import Child_RecentProduct from './HomePage/Child_RecentProduct'
import ShopSidebar from './ShopSidebar';
import GetProducts from './Utilities/Products';


export default function Shop() {
    
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");
    const brand = searchParams.get("brand");
    
    let Products = GetProducts()

    if(category) {
        Products = Products.filter((product) => product.title.includes(category))               
    }
    if(brand) {
        Products = Products.filter((product) => product.brand.includes(brand))               
    }

    // let loc = useLocation()
    // let nav = useNavigate()

    return (
        <>
            <Header />
            
            <section id="advertisement">
                <div className="container">
                    <img src={Advertisement} alt="" />
                </div>
            </section>
            
            <section>
                <div className="container">
                    <div className="row">
                        
                        <div className="col-sm-9 padding-right">
                            <div className="features_items">
                                <h2 className="title text-center">محصولات عمده</h2>
                                
                                {Products.map((product, index) => <Child_RecentProduct key={index} product={product} size_height_product='4' />)}
                                
                            </div>
                        </div>
                        
                        <ShopSidebar />
                        
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}