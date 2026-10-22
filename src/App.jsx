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
import NavMenu from './Components/NavMenu'

function App() {

  return (
    <>
      <Router>

        <NavMenu />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

    </Router>
    </>
  )
}

export default App
