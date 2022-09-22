import { Box, Button,TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [inputs , setInputs] = useState({
    email:'',
    password:'',
  });

  const handleChange= (e)=> {
      setInputs((prev)=>({
        ...prev,
        [e.target.name] : e.target.value, 
      }));;
  }
  const sendRequest =async() => {
    const res = await axios
      .post('http://localhost:8000/api/login', {
      email:    inputs.email,
      password: inputs.password,
    }).catch((err) => console.log(err));
    const data = await res.data;
    return data;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputs);
    sendRequest().then(()=> navigate('/user'));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <Box width={300} margin={'auto'} justifyContent='center' alignContent={'center'} display='flex' flexDirection={'column'}>
             <Typography variant='h2' marginLeft={9}>Login</Typography>

             <TextField  value={inputs.email} onChange={handleChange} name='email'  required    type={'email'} margin='normal' variant='outlined' placeholder='EMAIL'/>
             <TextField  value={inputs.password} onChange={handleChange}  name ='password' required type={'password'}  margin='normal' variant='outlined' placeholder='PASSWORD'/>
             <Button variant='contained'  type='submit'>Login</Button>

          </Box>
      </form>
    </div>
  )
}


export default Login