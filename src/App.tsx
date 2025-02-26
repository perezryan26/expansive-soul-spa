import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './landingPage/components/LandingPage'
import RetreatPage from './retreatPage/components/RetreatPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/retreat' element={<RetreatPage />} />
      </Routes>
    </Router>
  )
}

export default App;