import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const titles = {
    '/': 'صفحه اصلی',
    '/about-us': 'درباره ما',
    '/contact-us': 'تماس با ما',
    '/favariots': 'مورد علاقه ها',
    '/shop': 'لیست محصولات',
    '/login': 'صفحه ورود',
    '/cart': 'سبد خرید',
    '/checkout': 'پرداخت',
    '/blogs': 'اخبار',
};

function DocumentTitle() {
    const location = useLocation();

    useEffect(() => {
        const pageTitle = titles[location.pathname] || 'فروشگاه الکترونیکی ایشاپ';
        document.title = pageTitle;
    }, [location.pathname]); 

    return null; 
}

export default DocumentTitle;