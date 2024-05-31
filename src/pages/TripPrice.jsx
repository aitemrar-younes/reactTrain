import React from 'react'
import { GrTrain } from "react-icons/gr";
import { TiArrowRightThick } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';


function TripPrice() {
    const navigate = useNavigate()
  return (
    <div className='_TripPrice'>
        <div className="pageTitle">TRIP PRICES</div>
        <div className="tripList">
            <div className="tipItem" onClick={()=>navigate('/tripPrice-detail')}>
                <GrTrain className='tripItemIcon' />
                <div className="tripItemText">Train</div>
                <TiArrowRightThick className='tripRightIcon' />
            </div>
        </div>
    </div>
  )
}

export default TripPrice