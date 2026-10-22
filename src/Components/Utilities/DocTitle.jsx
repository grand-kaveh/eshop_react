import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const titles = {
  '/': 'صفحه اصلی',
  '/about': 'درباره ما',
  '/contact': 'تماس با ما',
  '/profile': 'پروفایل کاربر',
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