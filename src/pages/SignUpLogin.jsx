import React from 'react'

export function SignUpLogin() {
  return (
    <div className="signup-login">
      <div className='login'>
        <img src="src/assets/img/logo.PNG" alt="" />
        <input type='email' name='email' placeholder='Enter your email'></input>
        <input type='password' name='password' placeholder='Enter your password'></input>
        <button>Login</button>
      </div>


      <div className='options'>
        <p> ------ Or ------</p>
        <p>Forgot Your Password?</p>
        <p>Don't have an account? <span>Sign Up</span></p>
      </div>

    </div>
  )
}
