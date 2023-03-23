import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CarsList from './pages/CarsList.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [cars, setCars] = useState([])

  return (
    <div className="App">
      <Router>
        <div className='container'>
          {/* <Header /> */}
          <Routes>
            <Route path='/' element={<CarsList />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
    </div>
  )
}

export default App
