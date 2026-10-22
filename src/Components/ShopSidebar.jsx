import { Link } from 'react-router-dom'
import shipping from '../assets/images/home/shipping.jpg'

export default function ShopSidebar() {

    return(
        <div className="col-sm-3">
            <div className="left-sidebar">

                <h2>دسته بندی محصولات</h2>
                <div className="panel-group category-products" id="accordian">
                    
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title"><Link to='/shop?category=بسته بندی1'>بسته بندی 1</Link></h4>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title"><Link to='/shop?category=بسته بندی2'>بسته بندی 2</Link></h4>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title"><Link to='/shop?category=بسته بندی3'>بسته بندی 3</Link></h4>
                        </div>
                    </div>

                </div>
            
                <div className="brands_products">
                    <h2>برنـد ها</h2>
                    <div className="brands-name">
                        <ul className="nav nav-pills nav-stacked">
                            <li><Link to='/shop?brand=برند1'> <span className="pull-left">(50)</span>برنـد 1</Link></li>
                            <li><Link to='/shop?brand=برند2'> <span className="pull-left">(56)</span>برنـد 2</Link></li>
                            <li><Link to='/shop?brand=برند3'> <span className="pull-left">(27)</span>برنـد 3</Link></li>
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