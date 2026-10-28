import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NewContext } from './Utilities/NewContext'

export default function TableRowItem({fav}) {

    let {user_favs, set_user_favs} = useContext(NewContext)

    function remove_fav() {

        let rendered_fav = user_favs.favs.filter((element) => element.id != fav.id)
        set_user_favs({
            user: JSON.parse(localStorage.getItem('new_user')).username,
            favs: rendered_fav
        })
    }

    return (
        <tr className='sans'>
            <td className="cart_product">
                <Link to={`/shop/${fav.id}`}><img src={fav.img} alt=""/></Link>
            </td>
            <td className="cart_description">
                <h4><Link to={`/shop/${fav.id}`}>{fav.title}</Link></h4>
                <p>شناسـه : {fav.id}</p>
            </td>
            <td className="cart_price">
                <p>{fav.price} ريال</p>
            </td>
            <td className="cart_delete">
                <a className="cart_quantity_delete" onClick={remove_fav}><i className="fa fa-times"></i></a>
            </td>
        </tr>
    )
}