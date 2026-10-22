import Footer from "./Footer";
import Header from "./Header";
import TableRowItem from "./TableRowItem";


export default function Favariots() {

    return (
        <>
            <Header />

            <section id="cart_items">
                <div className="container">
                    <div className="breadcrumbs">
                        <ol className="breadcrumb">
                        <li><a href="#">خانـه</a></li>
                        <li className="active">پرداخت</li>
                        </ol>
                    </div>
                    <div className="table-responsive cart_info">
                        <table className="table table-condensed">
                            <thead>
                                <tr className="cart_menu">
                                    <td className="image">کـالا</td>
                                    <td className="description"></td>
                                    <td className="price">قیمت</td>
                                    <td className="quantity">تعـداد</td>
                                    <td className="total">مجمـوع</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>

                                <TableRowItem />
                                <TableRowItem />
                                <TableRowItem />

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            
            <Footer />

        </>
    )
}