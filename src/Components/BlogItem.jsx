import blogimg from "../assets/images/blog/blog-one.jpg"

export default function BlogItem() {

    return(
        <div className="single-blog-post">
            <h3>خبـر شمـاره 1 - خبـر</h3>
            <div className="post-meta">
                <ul>
                    <li><i className="fa fa-clock-o"></i> 17:20 ب.ظ</li>
                    <li><i className="fa fa-calendar"></i> 28 تیـر 1397</li>
                </ul>
            </div>
            <a href="">
                <img src={blogimg} alt="" />
            </a>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده ازلورملورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت</p>
        </div>
    )
}