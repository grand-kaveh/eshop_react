import Footer from "./Footer";
import Header from "./Header";
import ShopSidebar from './ShopSidebar'
import BlogItem from "./BlogItem";
import { useEffect, useState } from "react";

export default function Blogs() {

    // #TODO 

    const APIKEY = '3b06761ac7d4423f98ccb4ba2d5a335b'
    // const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${APIKEY}`
    const url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${APIKEY}`

    const [news, setNews] = useState([]);

    useEffect( ()=> {

        const fetchNews = async () => {
            const res = await fetch(url);
            const data = await res.json();
            if(data.status == 'ok'){                
                setNews(data.articles)
            }
        };
        fetchNews();
    }, [])

    return (
        <>
            <Header />

        	<section>
                <div className="container sans">
                    <div className="row">
                        
                        <div className="col-sm-9">
                            <div className="blog-post-area">
                                <h2 className="title text-center">آخریـن اخبـار</h2>

                                {news.map((blog, index) => <BlogItem key={index} blog={blog} />)}

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