import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
  return (
    <div className='_home'>
        <div className="cardItem" onClick={()=>navigate('/plan-trip')}>
            <div className="textPart">
                PLAN YOUR TRIP
            </div>
            <img src='/src/assets/images/path.png' className="imagePart" />
        </div>
        <div className="cardItem" onClick={()=>navigate('/road')}>
            <img src='/src/assets/images/road.png' className="imagePart" />
            <div className="textPart">
                ROAD
            </div>
        </div>
        <div className="cardItem" onClick={()=>navigate('/card')}>
            <div className="textPart">
                VIRTO CARD
            </div>
            <img src='/src/assets/images/card.png' className="imagePart" />
        </div>
        <div className="cardItem" onClick={()=>navigate('/trip-price')}>
            <img src='/src/assets/images/path.png' className="imagePart" />
            <div className="textPart">
                TRIP PRICES
            </div>
        </div>
    </div>
  )
}

export default Home