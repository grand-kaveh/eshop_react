import Girl2 from '../assets/images/home/girl2.jpg'
import Pricing from '../assets/images/home/pricing.png'
import Footer from './Footer'
import Header from './Header'
// import CategoryTab from './HomePage/CategoryTab'
import RecentProducts from './HomePage/RecentProducts'

export default function HomePage() {


    return (
        <>

        <Header />

        <section id="slider">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div id="slider-carousel" className="carousel slide" data-ride="carousel">
                            
                            <div>
                                
                                <div className="item">
                                    <div className="col-sm-6">
                                        <h1><span>SHOP</span>CENTER</h1>
                                        <h2>Shop Center</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                    <div className="col-sm-6">
                                        <img src={Girl2} className="girl img-responsive" alt="" />
                                        <img src={Pricing}  className="pricing" alt="" />
                                    </div>
                                </div>
                                
                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        
        <section>
            <div className="container">
                <div className="row">
                    
                    <div className="recommended_items">
                        <h2 className="title text-center">جدیدترین محصولات</h2>                  
                        <RecentProducts />
                    </div>
                    
                    {/* <div className="col-sm-12 padding-right">
                        
                        <CategoryTab />
                        
                    </div> */}
                    
                </div>			
            </div>
        </section>

        <Footer />

        </>
    )
}