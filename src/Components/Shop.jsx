import Advertisement from '../assets/images/shop/advertisement.jpg'
import Footer from "./Footer";
import Header from "./Header";
import Child_RecentProduct from './HomePage/Child_RecentProduct'
import ShopSidebar from './ShopSidebar';
import GetProducts from './Utilities/Products';

export default function Shop() {

    let Products = GetProducts().slice(-12)
    

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
                                
                                {Products.map((product, index) => <Child_RecentProduct key={index} product={product} />)}
                                
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