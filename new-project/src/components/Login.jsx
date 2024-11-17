import React from 'react'
import './CSS/login.css'
const Login = () => {
  return (
    <>
      <div className="container">
        <h1>Login</h1>
        <input type="text" placeholder='Username'/>
        <input type="password" placeholder='Password' />
        <input type="checkbox" />
        <button type="btn">
          Submit
        </button>
      </div>
    </>
  )
}

export default Login