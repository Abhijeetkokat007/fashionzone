import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

function SignUpUser() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('male');
  const [storedata, setStoredata] = useState({})

  const signupdata = async () => {

    if(!name){
      alert('Name is required')
    }
    if(!password){
        alert('Password is required')
      }
      if(!email){
        alert('Email is required')
      }
      if(!address){
        alert('Address is required')
      }
      if(!mobile){
        alert('Mobile Number is required')
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
    if(response?.data?.success){
        window.location.href = "/login";
    }
    else{
        alert(response?.data?.message)
        setName('')
        setEmail('')
        setAddress('')
        setMobile('')
        setPassword('')
    }
  }

  
  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("user") || "{}");
    console.log(storageUser);

    if (storageUser?.email) {
      alert("You are already logged in!");
      window.location.href = "/";
    }
  }, []);


  return (
    <>
    <Navbar/>
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

        <Link to={"/Login"} className='link-form'>Already an Account? </Link>

      </div>
    </>
  )
}

export default SignUpUser;
