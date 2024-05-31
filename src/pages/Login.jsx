import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
  return (
    <div className='_login'>
        <div className="logo">
            <img src="/src/assets/images/image.png" />
        </div>
        <div className="subTextLogo">
            One City One Card
        </div>
        <form className="form">
            <label htmlFor="firstName">First name</label>
            <input required type="text" id='firstName' />

            <label htmlFor="lastName">Last name</label>
            <input required type="text" id='lastName' />

            <label htmlFor="password">Password</label>
            <input required type="password" id='password' />

            <label htmlFor="email">Email</label>
            <input required type="email" id='email' />

            <label htmlFor="email">State</label>
            <select required defaultValue={""} className='select'>
                <option value="" disabled>Please select an option</option>
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="Other">Other</option>
            </select>

            <button onClick={()=>navigate('/')}>Register</button>
            
        </form>
    </div>
  )
}

export default Login