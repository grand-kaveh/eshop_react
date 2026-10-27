// css files
import "./assets/css/main.css"
import "./assets/css/bootstrap.min.css"
import "./assets/css/font-awesome.min.css"
import "./assets/css/prettyPhoto.css"
import "./assets/css/price-range.css"
import "./assets/css/animate.css"
import "./assets/css/main.css"
import "./assets/css/responsive.css"

import NotFound from './Components/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import Favariots from './Components/Favariots'
import Auth from './Components/Auth'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
import Shop from './Components/Shop'
import Details from './Components/Details'
import DocTitle from './Components/Utilities/DocTitle'
import Blogs from './Components/Blogs'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import { AppDataProvider } from './Components/Utilities/NewContext'


function App() {

  return (
      <AppDataProvider>
        <Router>

          <DocTitle />
          
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/favariots' element={<Favariots />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/shop/:ProductId' element={<Details />} />
            <Route path='/login' element={<Auth />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact-us' element={<ContactUs />} />

          </Routes>

      </Router>
    </AppDataProvider>
  )
}

export default App
