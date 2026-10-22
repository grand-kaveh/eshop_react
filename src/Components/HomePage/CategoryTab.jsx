import ListCategoryTab from "./ListCategoryTab";


export default function CategoryTab() {

    return (
        <div className="category-tab">

            <div className="col-sm-12">
                <ul className="nav nav-tabs">
                    <li className="active"><a href="#Tab_001" data-toggle="tab">گـروه محصولات 1</a></li>
                    <li><a href="#Tab_002" data-toggle="tab">گـروه محصولات 2</a></li>
                    <li><a href="#Tab_003" data-toggle="tab">گـروه محصولات 3</a></li>
                    <li><a href="#Tab_004" data-toggle="tab">گـروه محصولات 4</a></li>
                    <li><a href="#Tab_005" data-toggle="tab">گـروه محصولات 5</a></li>
                </ul>
            </div>

            <div className="tab-content">

                <ListCategoryTab />

            </div>
        </div>
    )
}