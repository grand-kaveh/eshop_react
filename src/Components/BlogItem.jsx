export default function BlogItem({blog}) {

    const d = new Date(blog.publishedAt);

    const year  = d.getFullYear();
    const month = d.getMonth() + 1; 
    const day   = d.getDate();
    const hour  = d.getHours();      
    const min   = d.getMinutes();

    return(
        <div className="single-blog-post">
            <h3>{blog.title}</h3>
            <div className="post-meta">
                <ul>
                    <li><i className="fa fa-user"></i>{blog.author}</li>
                    <li><i className="fa fa-clock-o"></i> {hour}:{min}</li>
                    <li><i className="fa fa-calendar"></i> {year}-{day}-{month}</li>
                </ul>
            </div>
            <a href={blog.url} target="_blank">
                <img src={blog.urlToImage} alt={blog.title} />
            </a>
            <p>{blog.description}</p>
        </div>
    )
}