import Logo from '../assets/images/home/logo.png'
import I404 from '../assets/images/404/404.png'
import { Link } from 'react-router-dom'
export default function NotFound() {

    return (
        <div className="container text-center">
            <div className="logo-404">
                <Link to="/"><img src={Logo} alt="" /></Link>
            </div>
            <div className="content-404">
                <img src={I404} className="img-responsive" alt="" />
                <h1><b>متأسفانـه</b> صفحه مورد نظـر شما یافت نشد!</h1>
                <h2><Link to="/">برو به صفحـه اصلی</Link></h2>
            </div>
        </div>
    )
}