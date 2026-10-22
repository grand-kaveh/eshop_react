import Tabs from '../../assets/images/home/Tabs.png'

export default function ItemCategoryTab() {

    return (
        <div className="col-sm-3">
            <div className="product-image-wrapper">
                <div className="single-products">
                    <div className="productinfo text-center">
                        <img src={Tabs} alt="" />
                        <h2>560.000 ريال</h2>
                        <p>توضیحات کوتاه محصول</p>
                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>افزودن به سبـد خریـد</a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}