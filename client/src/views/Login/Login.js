import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const logindata = async () => {

    const user = {email,
      password
    }

    const response = await axios.post("/login", user)

    alert(response?.data?.data)
  }

  useEffect({

  }, [])

  return (
    <>
    <Navbar/>
    <div className='signup-form'>
      <h1 className='text-center'>login</h1>

      <div>
          <label htmlFor="email">Email :</label><br />
          <input type='text'
            placeholder='Enter your Enail'
            className='input'
            id='email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label><br />
          <input type='password'
            placeholder='Enter your Password'
            className='input'
            id='password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      <div className='text-center'>
      <button type='button' onClick={logindata}   className='btn'> Login </button>
      </div>



    </div>


    </>
  )
}

export default Login
