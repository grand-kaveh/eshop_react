import Girl2 from '../assets/images/home/girl2.jpg'
import Pricing from '../assets/images/home/pricing.png'
import Footer from './Footer'
import Header from './Header'
import RecentProducts from './RecentProducts'

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
                                        <h2>مرکز خرید</h2>
                                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده ازلورملورم ایپسوم متن ساختگی با تولید سادگی نامفهلورم ایپسوم متن ساختگی با تول نعت چاپ و با استفاده ازلورملورم ایپسوم متن ساختگی با تولید سادگی نامفه</p>
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
                    
                </div>			
            </div>
        </section>

        <Footer />

        </>
    )
}