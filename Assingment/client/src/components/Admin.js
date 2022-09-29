
import { Dialog, DialogContent, TextField, Box, Button, Typography, styled } from '@mui/material';
 import React, { useEffect, useState } from 'react'
// import axios from 'axios';
//  axios.defaults.withCredentials = true;


const Wrapper = styled(Box)`
    padding: 20px 30px;
    display: flex;
    width:60%;
    flex: 1;
    margin-left:16%;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;
const Submitbtn = styled(Button)`
    // text-transform: green;
    background: green;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;


const signupInitialValues = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  phone: ''
};

const courseInitialvalue = {
  subject: '',
  duration: '',
  fee: ''
};


const Admin = () => {
   const [signup , setTeacher] = useState(signupInitialValues);
   const [course , setCourse] = useState(courseInitialvalue);


  const onInputChange = (e) => {
    setTeacher({ ...signup, [e.target.name]: e.target.value });
};
const onCoursechange = (e) => {
  setCourse({ ...course, [e.target.name]: e.target.value });
};

const submitTeacher = () => {
  console.log(signup);
}

const submitCourse = () => {
  console.log(course);
}

  // const sendRequest =async() => {
  //   const res = await axios.get("http://localhost:8000/api/create", {
  //      withCredentials:true,
  //   }).catch((err) => console.log(err));
  //   const data = await res.data;
  //   return data;
  // };
  // useEffect(()=> {
  //   // if(firstRender) {
  //   //   firstRender=false
  //     sendRequest().then((data)=> setUser(data.user))
    
   
  //     // refreshToken().then((data) => setUser(data.user))
  // },[]);

  return (
    <div>
       <Wrapper>
                      <Typography>ADD TEACHER</Typography>
                  <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' required/>
                  <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' required/>
                  <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Teacher Name' required/>
                   <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label='Enter Email' required/>
                  <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' required/>
                   <Submitbtn onClick={() => submitTeacher()} >Continue</Submitbtn>
     </Wrapper>
     <hr />
     <Wrapper>
                      <Typography>ADD COURSE</Typography>
                  <TextField variant="standard" onChange={(e) => onCoursechange(e)} name='subject' label='Enter Subject' />
                  <TextField variant="standard" onChange={(e) => onCoursechange(e)} name='duration' label='Enter course duration' />
                  <TextField variant="standard" onChange={(e) => onCoursechange(e)} name='fee' label='Enter Course Fee' />
                 
                   <Submitbtn onClick={() => submitCourse()} >Continue</Submitbtn>
     </Wrapper>
     
    </div>
  );
}

export default Admin