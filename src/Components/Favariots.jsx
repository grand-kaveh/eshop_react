import { useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import TableRowItemFav from "./TableRowItemFav";
import { NewContext } from "./Utilities/NewContext";
import { Link } from "react-router-dom";


export default function Favariots() {

    let {user_favs} = useContext(NewContext)

    return (
        <>
            <Header />

            <section id="cart_items">
                <div className="container">
                    <div className="breadcrumbs sans">
                        <ol className="breadcrumb">
                        <li><Link to="/">خانـه</Link></li>
                        <li className="active">لیست علاقه مندی ها</li>
                        </ol>
                    </div>
                    <div className="table-responsive cart_info">
                        <table className="table table-condensed">
                            <thead>
                                <tr className="cart_menu">
                                    <td className="image">کـالا</td>
                                    <td className="description"></td>
                                    <td className="price">قیمت</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {user_favs.favs.map((fav, index) => <TableRowItemFav key={index} fav={fav} />)}

                            </tbody>
                        </table>
                        {user_favs.favs.length == 0 ? <p className="sans alert">لیست علاقه مندی های شما خالی است.</p> : ''}

                    </div>
                </div>
            </section>
            
            <Footer />

        </>
    )
}