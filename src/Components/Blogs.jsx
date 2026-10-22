import Footer from "./Footer";
import Header from "./Header";
import ShopSidebar from './ShopSidebar'
import BlogItem from "./BlogItem";

export default function Blogs() {


    return (
        <>
            <Header />

        	<section>
                <div className="container">
                    <div className="row">
                        
                        <div className="col-sm-9">
                            <div className="blog-post-area">
                                <h2 className="title text-center">آخریـن اخبـار</h2>

                                <BlogItem />
                                <BlogItem />
                                <BlogItem />
                                <BlogItem />

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