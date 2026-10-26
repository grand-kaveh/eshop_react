import { Link } from 'react-router-dom'

export default function ShopSidebarCategory({category}) {

    return(                    
        <div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="panel-title"><Link to={`/shop?category=${category}`}>{category}</Link></h4>
            </div>
        </div>
    )
}