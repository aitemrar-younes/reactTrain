import React from 'react'

function Home() {
  return (
    <div className='_home'>
        <div className="cardItem">
            <div className="textPart">
                PLAN YOUR TRIP
            </div>
            <img src='/src/assets/images/path.png' className="imagePart" />
        </div>
        <div className="cardItem">
            <img src='/src/assets/images/road.png' className="imagePart" />
            <div className="textPart">
                ROAD
            </div>
        </div>
        <div className="cardItem">
            <div className="textPart">
                VIRTO CARD
            </div>
            <img src='/src/assets/images/card.png' className="imagePart" />
        </div>
        <div className="cardItem">
            <img src='/src/assets/images/path.png' className="imagePart" />
            <div className="textPart">
                TRIP PRICES
            </div>
        </div>
    </div>
  )
}

export default Home