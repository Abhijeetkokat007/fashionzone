import React, { useState, useEffect } from 'react';
import axios from 'axios';



function Signup() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('male');

  const signupdata = async () => {

    if(!name){
      alert('Name is required')
    }

    const data = {
      name,
      email,
      mobile,
      address,
      gender,
      password
    }
    const response = await axios.post("/signup", data)

    alert(response.data.message)

    setName('')
    setEmail('')
    setAddress('')
    setMobile('')
    setPassword('')
  }

  useEffect({
    
  }, [])



  return (
    <>
      <div className='signup-form'>
        <h1 className='text-center'>signup</h1>
        <div>
          <label htmlFor="name">Name:</label><br />
          <input type='text'
            placeholder='Enter your Name'
            className='input'
            id='name'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

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
          <label htmlFor="number">MO. Number :</label><br />
          <input type='text'
            placeholder='Enter your Number'
            className='input'
            id='number'
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="address">address:</label><br />
          <input type='text'
            placeholder='Enter your Address'
            className='input'
            id='address'
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
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


        <input type='radio'
          id='password'
          name='gender'
          checked={gender === 'male'}
          value={gender}
          onClick={() => {
            setGender('male');
          }}
        />
        <label htmlFor="male">male</label>



        <input type='radio'
          id='female'
          name='gender'
          checked={gender === 'female'}
          value={gender}
          onClick={() => {
            setGender('female');
          }}
        />
        <label htmlFor="male">female</label>


        <div className='text-center'>
          <button type='button'
            className='btn'
            onClick={signupdata}
          >Signup</button>
        </div>

      </div>
    </>
  )
}

export default Signup
