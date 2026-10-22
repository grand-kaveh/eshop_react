import One from '../assets/images/cart/one.png'

export default function TableRowItem() {

    return (
        <tr>
            <td className="cart_product">
                <a href=""><img src={One} alt=""/></a>
            </td>
            <td className="cart_description">
                <h4><a href="">کالای شمـاره 1</a></h4>
                <p>شناسـه : 01010101</p>
            </td>
            <td className="cart_price">
                <p>590.000 ريال</p>
            </td>
            <td className="cart_quantity">
                <div className="cart_quantity_button">
                    <a className="cart_quantity_up" href=""> + </a>
                    <input className="cart_quantity_input" type="text" name="quantity" autoComplete="off" size="2"/>
                    <a className="cart_quantity_down" href=""> - </a>
                </div>
            </td>
            <td className="cart_total">
                <p className="cart_total_price">590.000 ريال</p>
            </td>
            <td className="cart_delete">
                <a className="cart_quantity_delete" href=""><i className="fa fa-times"></i></a>
            </td>
        </tr>
    )
}