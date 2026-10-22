import Advertisement from '../assets/images/shop/advertisement.jpg'
import Footer from "./Footer";
import Header from "./Header";
import Child_Last4Product from './HomePage/Child_Last4Product'
import ShopSidebar from './ShopSidebar';

export default function Shop() {

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
                                
                                <Child_Last4Product />
                                <Child_Last4Product />
                                <Child_Last4Product />
                                <Child_Last4Product />
                                <Child_Last4Product />
                                <Child_Last4Product />
                                <Child_Last4Product />
                                <Child_Last4Product />
                                <Child_Last4Product />
                                <Child_Last4Product />
                                <Child_Last4Product />
                                <Child_Last4Product />
                                <Child_Last4Product />
                                <Child_Last4Product />
                                <Child_Last4Product />
                                <Child_Last4Product />
                                
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