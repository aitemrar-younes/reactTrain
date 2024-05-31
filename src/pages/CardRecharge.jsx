import React from 'react'
import { TiArrowRightThick } from 'react-icons/ti'

function CardRecharge() {
  return (
    <div className='_CardRecharge'>
        <div className="pageTitle">Card Recharge</div>
        {/* available on these lines  */}
        <div className="step">
            <div className="depart">Alger</div> 
            <TiArrowRightThick className='tripRightIcon' />
            <div className="depart">Affroun</div>
        </div>
        <div className="step">
            <div className="depart">Affroun</div>
            <TiArrowRightThick className='tripRightIcon' />
            <div className="depart">Alger</div>
        </div>
        
        <div className="step">
            <div className="depart">Alger</div>
            <TiArrowRightThick className='tripRightIcon' />
            <div className="depart">Bab ezzouar</div>
        </div>
        <div className="step">
            <div className="depart">Bab ezzouar</div>
            <TiArrowRightThick className='tripRightIcon' />
            <div className="depart">Alger</div>
        </div>
    </div>
  )
}

export default CardRecharge