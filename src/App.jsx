import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import CarsList from './pages/CarsList'
import CarDetail from './pages/CarDetail'
import Footer from './components/Footer'

function App() {

  return (
      <Router>
        <div className='container mx-auto w-screen min-h-screen flex flex-col'>
          <Header />
          <Routes>
            <Route path='/' element={<CarsList />} />
            <Route path='/cars/:vin' element={<CarDetail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
  )
}

export default App
