import Child_RecentProduct from "./Child_RecentProduct";
import GetProducts from '../Utilities/Products'


export default function RecentProducts() {

    let Products = GetProducts().slice(-8)

    return (
        <div>
            <div>
                <div>
                    {Products.map((product, index) => <Child_RecentProduct key={index} product={product} />)}
                </div>
            </div>
        </div>
    )
}