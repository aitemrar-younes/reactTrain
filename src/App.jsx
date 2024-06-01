import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import '/src/assets/styles/global.scss'
import Layout from './components/Layout'
import Card from './pages/Card'
import TripPrice from './pages/TripPrice'
import Road from './pages/Road'
import CardRecharge from './pages/CardRecharge'
import TripPriceDetail from './pages/TripPriceDetail'
import CardBalance from './pages/CardBalance'
import QRScanner from './pages/QRScanner'
import PlanTrip from './pages/PlanTrip'

function App() {

  return (
    <div className='_app'>
      <div className="phone">
        <Router>
          <Routes>
            <Route element={<Layout /> } >
              <Route path='/' element={<Home />} />
              <Route path='/road' element={<Road />} />
              {/* <Route path='/' element={<Home />} /> */}
              <Route path='/trip-price' element={<TripPrice />} />
              <Route path='/card' element={<Card />} />

              <Route path='/card-recharge' element={<CardRecharge />} />
              <Route path='/card-balance' element={<CardBalance />} />

              <Route path='/tripPrice-detail' element={<TripPriceDetail />} />
              <Route path='/qrscanner' element={<QRScanner />} />
              <Route path='/plan-trip' element={<PlanTrip />} />
            </Route>
            <Route path='/login' element={<Login />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
