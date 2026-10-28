import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import TableRowItemCart from "./TableRowItemCart";


export default function Cart() {

    return (
        <>
            <Header />

            <section id="cart_items">
                <div className="container">
                    <div className="breadcrumbs">
                        <ol className="breadcrumb">
                            <li><Link to="/">خانـه</Link></li>
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

                                <TableRowItemCart />
                                <TableRowItemCart />
                                <TableRowItemCart />

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section id="do_action">
                <div className="container">
                    <div className="heading">
                        <h3>نهایی کردن سفارش یا ادامه خریـد ؟! </h3>
                        <p>در صورتیکـه کوپن خریـد و یا کد تخفیف داریـد میتوانید از آن استفاده نمایید | با استفاده از بخش مربوطه هزینه حمل و نقل خود را محاسبـه نمایید</p>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="chose_area">
                                <ul className="user_option">
                                    <li>
                                        <h3>استفاده از کوپـن خریـد / کارت تخفیـف :</h3>
                                    </li>
                                    <li className="single_field zip-field">
                                        <input type="text" placeholder="کد تخفیف خود را وارد نمایید ..."/>
                                    </li>
                                    <li>
                                        <a className="btn btn-default update" href="">بررسی و اعمال</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="total_area">
                                <ul>
                                    <li>مجمـوع سبـد خریـد <span>2.030.000 ريال</span></li>
                                    <li>مالیـات (9%) <span>182.700 ريال</span></li>
                                    <li>هزینـه حمل و نقـل <span>رایـگان</span></li>
                                    <li>مجمـوع <span>2.212.700 ريال</span></li>
                                </ul>
                                    <a className="btn btn-default update" href="shop.html">به روز رسانی سبـد خریـد </a>
                                    <a className="btn btn-default check_out" href="">پرداخت</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />

        </>
    )
}