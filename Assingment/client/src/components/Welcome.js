import React, { useEffect, useState } from 'react'
import axios from 'axios';
axios.defaults.withCredentials = true;
 

const Welcome = () => {
  const [users , setUser] = useState();

  // const refreshToken =async() => {
  //   const res = await axios.get("http://localhost:8000/api/refresh", {
  //     withCredentials:true,
  //   }).catch((err) => console.log(err));
  //   const data = await res.data;
  //   return data;
  // };

  const sendRequest =async() => {
    const res = await axios.get("http://localhost:8000/api/user", {
      withCredentials:true,
    }).catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(()=> {
    
      //sendRequest().then((data)=> setUser(data.user))
    
   
      //  refreshToken().then((data) => setUser(data.user))
  },[]);

  return (
    <div>
      {users && <h1>{users.name}</h1>}
    </div>
  );
}

export default Welcome