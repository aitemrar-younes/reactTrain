import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";

function PlanTrip() {
  return (
    <div className='_PlanTrip'>
        <div className="pageTitle">Plan trip</div>
        <form className="form" onSubmit={(event)=>{event.preventDefault(); alert('Your request is being processed...')}}>
            <label htmlFor="origin">ORIGIN STOP</label>
            <div className="groupedInput">
                <FaLocationDot className='originIcon' />
                <select required id='origin' defaultValue={''}>
                    <option value="" disabled>Select an option</option>
                    <option value="Alger">Alger</option>
                    <option value="Agha">Agha</option>
                    <option value="Atelier">Atelier</option>
                    <option value="Husseinday">Hussein day</option>
                    <option value="Karoubier">Karoubier</option>
                    <option value="Elharach">El harach</option>
                    <option value="Guedeconstantine">Gue de constantine</option>
                    <option value="Ain'naadja">Ain'naadja</option>
                    <option value="Babaali">Baba ali</option>
                    <option value="Birtouta">Birtouta</option>
                    <option value="Boufarik">Boufarik</option>
                    <option value="Beni tamou">Beni tamou</option>
                    <option value="Blida">Blida</option>
                    <option value="Chiffa">Chiffa</option>
                    <option value="Affroun">Affroun</option>
                </select>
            </div>

            <label htmlFor="destination">Destination STOP</label>
            <div className="groupedInput">
                <FaLocationDot className='destinationIcon' />
                <select required id='destination' defaultValue={''}>
                    <option value="" disabled>Select an option</option>
                    <option value="Alger">Alger</option>
                    <option value="Agha">Agha</option>
                    <option value="Atelier">Atelier</option>
                    <option value="Husseinday">Hussein day</option>
                    <option value="Karoubier">Karoubier</option>
                    <option value="Elharach">El harach</option>
                    <option value="Guedeconstantine">Gue de constantine</option>
                    <option value="Ain'naadja">Ain'naadja</option>
                    <option value="Babaali">Baba ali</option>
                    <option value="Birtouta">Birtouta</option>
                    <option value="Boufarik">Boufarik</option>
                    <option value="Beni tamou">Beni tamou</option>
                    <option value="Blida">Blida</option>
                    <option value="Chiffa">Chiffa</option>
                    <option value="Affroun">Affroun</option>
                </select>
            </div>
            <label htmlFor="depart">Depart date & time</label>
            <div className="groupedInput">
                <MdOutlineDateRange className='icon'/>
                <input required type="date" name="" id="depart" />
            </div>
            <label htmlFor="depart">Depart time</label>
            <div className="groupedInput">
                <MdOutlineAccessTime className='icon' />
                <input required type="time" name="" id="depart" />
            </div>
            <button type="submit">Submit</button>
        </form>
        <div className="notice">
            Flight time may changedue to delays in depart time or in event of stop
        </div>
    </div>
  )
}

export default PlanTrip