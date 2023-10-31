// import React from 'react';
import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react';

function Signup() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [mobail, setMobail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  const signupdata =async () => {
const response = await axios.post("/signup", {
  name,
  email,
  mobail,
  address,
  gender,
  password
} )

alert(response.data.message)
setName('')
setEmail('')
setMobail('')
setAddress('')
setPassword('')
  }



  return (
    <>
    <div className='signup-form'>
      <h1 className='text-center'>signup</h1>
      <div>
        <label name="name">Name:</label><br/>
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
        <label name="email">Email :</label><br/>
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
        <label name="number">MO. Number :</label><br/>
        <input type='text'
        placeholder='Enter your Number'
         className='input' 
         id='number'
         value={mobail}
         onChange={(e) => {
           setMobail(e.target.value);
         }}
         />
      </div>

      <div>
        <label name="address">address:</label><br/>
        <input type='text'
        placeholder='Enter your Address'
         className='input' 
         id='address'
        //  value={address}
         onChangecfde={(e) => {
           setAddress(e.target.value);
         }}
         />
      </div>

      <div>
        <label name="password">Password:</label><br/>
        <input type='text'
        placeholder='Enter your Password'
         className='input' 
         id='password'
         value={password}
         onClick={(e) => {
          setPassword(e.target.value);
         }}
         />
      </div>

   
        <input type='radio'
        placeholder='Enter your Password'
        //  className='input' 
         id='password'
         name='gender'
         value={password}
         onClick={(e) => {
           setName(e.target.value);
         }}
         />
         <label name="male">male</label>
    

      
        <input type='radio'
        placeholder='Enter your Password'
        //  className='input' 
         id='female'
         name='gender'
         value={password}
         onClick={(e) => {
           setName(e.target.value);
         }}
         />
         <label name="male">female</label>
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
