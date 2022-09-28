import React from "react";
import "./App.css";
import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Welcome from './components/Welcome'
import Admin from "./components/Admin";
import Student from "./components/Student";


function App() {
   
  return (
    <>
    <header>
        <Header />
    </header>
    <main>
        <Routes>
          <Route path='/student' element = {<Student />} />
          <Route path='/teacher' element = {<teacher />} />
           <Route path='/admin' element = {<Admin />} />
           <Route path='/login' element = {<Login />} />
           <Route path='/signup' element = {<Signup/>} />
           <Route path='/user' element = {<Welcome />} />
        </Routes>
    </main>
    </>
  )


  };

  

export default App;
