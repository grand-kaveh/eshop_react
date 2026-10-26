import CommentItem from "./CommentItem";

export default function DetailsComment() {

    return(

        <div className="tab-pane fade in active sans" id="reviews" >
            <div className="col-sm-12">


                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />


                <br />
                <br />
                <br />
                <hr />
                <p><b>نظـر خود را بنویسیـد</b></p>
                <form action="#">
                    <span>
                        <input type="text" placeholder="نام و نام خانوادگـی"/>
                        <input type="email" placeholder="آدرس ایمیـل"/>
                    </span>
                    <textarea name="" placeholder="نظر خود را وارد کنید:"></textarea>
                    
                    <button type="button" className="btn btn-default pull-left">
                        ارسـال
                    </button>
                </form>
            </div>
        </div>


    )
}