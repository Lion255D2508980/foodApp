import React, { useState } from 'react'
import './Login.css';
//import { auth,signInWithEmailAndPassword } from '../Firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault()
        // connect to firebase

    }
    const register = (e) => {
        
       

    }

    
  return (
    <div className='login'>
        <h1 className='login_title'>Sing in to get best experience</h1>
        <div className="login_container">
            <h1>Sign In</h1>
            <form action="">
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button type='submit' onClick={signIn} className='login_signin'>Sign In</button>
                <button onClick={register} className='login_signup'>Create Account</button>
            </form>
        </div>

    </div>
  )
}

export default Login