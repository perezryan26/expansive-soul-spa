import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './landingPage/components/LandingPage'
import RetreatPage from './retreatPage/components/RetreatPage'
import { HOME_URL, RETREATS_URL } from './base/Constants'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={HOME_URL} element={<LandingPage />} />
        <Route path={RETREATS_URL} element={<RetreatPage />} />
      </Routes>
    </Router>
  )
}

export default App;