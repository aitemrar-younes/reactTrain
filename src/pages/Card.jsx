import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card() {
    const navigate = useNavigate()
    const onsUbmit = (event) =>{
        event.preventDefault()
        alert('You have submited the form (More functions will be added to it later)')
    }
  return (
    <div className='_card'>
        <div className="pageTitle">Card</div>
        <div className="balance" onClick={()=>navigate('/card-balance')}>MY VIRTO CARD BALANCE</div>
        <form className="form" onSubmit={onsUbmit}>
            <input type="number" maxLength={20} minLength={20} required placeholder='Enter Card number' />
            <input type="number" required maxLength={3} minLength={3} placeholder='CVV' />
            <input type="month" required placeholder='Expiration date' />
            <button>Submit</button>
        </form>
        <div className="recharge" onClick={()=>navigate('/card-recharge')}>
            WAYS TO RECHARGE YOUR CARD
        </div>
    </div>
  )
}

export default Card