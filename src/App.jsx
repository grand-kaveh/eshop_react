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
          <Route path='' element={<HomePage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

    </Router>
    </>
  )
}

export default App
