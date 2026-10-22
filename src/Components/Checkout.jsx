import Footer from "./Footer";
import Header from "./Header";
import TableRowItem from "./TableRowItem";

export default function Checkout() {


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

                <div className="step-one">
                    <h2 className="heading">مرحلـه اول</h2>
                </div>
                <div className="checkout-options">
                    <h3>کاربـر جدیـد</h3>
                    <p>گزینـه های پرداخت</p>
                    <ul className="nav">
                        <li>
                            <label><input type="radio"/> ثبت نام هنگام پرداخت</label>
                        </li>
                        <li>
                            <label><input type="radio"/> پرداخت به عنوان مهمان</label>
                        </li>
                        <li>
                            <a href=""><i className="fa fa-times"></i>انصراف</a>
                        </li>
                    </ul>
                </div>

                <div className="register-req">
                    <p>لطفـاً برای دسترسی آسان به تاریخچـه خریـد خود از گزینه " ثبت نام هنگام پرداخت " استفاده نمایید و در غیر اینصورت گزینه " خرید به عنوان مهمان " را انتخاب نمایید</p>
                </div>

                <div className="shopper-informations">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="shopper-info">
                                <p>اطلاعات خریدار</p>
                                <form>
                                    <input type="text" placeholder="نام و نام خانوادگی" />
                                    <input type="text" placeholder="نام کاربری" />
                                    <input type="password" placeholder="رمز عبور" />
                                    <input type="password" placeholder="تأیید رمز عبور" />
                                </form>
                                <a className="btn btn-primary" href="">ثبت نام و ادامـه</a>
                            </div>
                        </div>
                        <div className="col-sm-9 clearfix">
                            <div className="bill-to">
                                <p>اطلاعات حمل</p>
                                <div className="form-one">
                                    <form>
                                        <input type="text" placeholder="نام شرکت" />
                                        <input type="text" placeholder="* ایمیـل" className="important-field" />
                                        <input type="text" placeholder="عنـوان" />
                                        <input type="text" className="important-field" placeholder="* نـام" />
                                        <input type="text" className="important-field" placeholder="* نام خانوادگـی" />
                                        <input type="text" className="important-field" placeholder="* آدرس 1" />
                                        <input type="text" placeholder="آدرس 2" />
                                    </form>
                                </div>
                                <div className="form-two">
                                    <form>
                                        <input type="text" className="important-field" placeholder="* کد پستـی" />
                                        <select className="important-field">
                                            <option>-- استـان --</option>
                                            <option>تهـران</option>
                                            <option>تهـران</option>
                                            <option>تهـران</option>
                                            <option>تهـران</option>
                                            <option>تهـران</option>
                                            <option>تهـران</option>
                                        </select>
                                        <select className="important-field">
                                            <option>-- شهـر / منطقـه --</option>
                                            <option>تهـران</option>
                                            <option>تهـران</option>
                                            <option>تهـران</option>
                                            <option>تهـران</option>
                                            <option>تهـران</option>
                                            <option>تهـران</option>
                                        </select>
                                        <input type="text" className="important-field" placeholder="* شمـاره تماس" />
                                        <input type="text" placeholder="موبایـل" />
                                        <input type="text" placeholder="فکـس" />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="order-message">
                                <p>توضیحات</p>
                                <textarea name="message"  placeholder="توضیحات دیگر در مورد خریـد" rows="16"></textarea>
                                <label><input type="checkbox"/> میخواهید سفارش خود را به آدرس دیگری ارسال نماییـد ؟!</label>
                            </div>	
                        </div>					
                    </div>
                </div>
                <div className="review-payment">
                    <h2>مشاهـده و پرداخت</h2>
                </div>

                <div className="table-responsive cart_info">
                    <table className="table table-condensed">
                        <thead>
                            <tr className="cart_menu">
                                <td className="image">کـالا</td>
                                <td className="description">توضیحات</td>
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
                            <TableRowItem />

                            <tr>
                                <td colSpan="4">&nbsp;</td>
                                <td colSpan="2">
                                    <table className="table table-condensed total-result">
                                        <tbody>
                                            <tr>
                                                <td>مجمـوع سبـد خریـد</td>
                                                <td>2.030.000 ريال</td>
                                            </tr>
                                            <tr>
                                                <td>مالیـات (9%)</td>
                                                <td>182.700 ريال</td>
                                            </tr>
                                            <tr className="shipping-cost">
                                                <td>هزینـه حمل و نقـل</td>
                                                <td>رایـگان</td>										
                                            </tr>
                                            <tr>
                                                <td>مجمـوع</td>
                                                <td><span>2.212.700 ريال</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="payment-options">
                    <span>
                        <label><input type="radio"/> پرداخت مستقیـم بانکی</label>
                    </span>
                    <span>
                        <label><input type="radio"/> پرداخت از طریـق زریـن پال</label>
                    </span>
                    <span>
                        <label><input type="radio"/> پرداخت از طریـق زریـن پال</label>
                    </span>
                    <span>
                        <button type="button" className="btn-primary">ثبت و پرداخت نهایـی</button>
                    </span>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}