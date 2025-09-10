import axios from 'axios'
import React, { useState } from 'react'

export default function App() {

  let [state, functionState] = useState({
    name: '',
    email: '',
    password: ''
  })


  async function regClick() {
    try{
      let send=await axios.post("http://localhost:5000/register",state)
      console.log(send)
    }

    catch(err){
      console.log("register Error",err)
    }
  }

  return (
    <div>
      <input type="text" placeholder='Enter Name' onChange={(e) =>
        functionState((old) => ({
          ...old,
          name: e.target.value
        }))
      } />


      <input type="text" placeholder='Enter Email' onChange={(e) =>
        functionState((old) => ({
          ...old,
          email: e.target.value
        }))
      } />


      <input type="text" placeholder='Generate Password' onChange={(e) =>
        functionState((old) => ({
          ...old,
          password: e.target.value
        }))
      } />


      <button onClick={regClick}>Register</button>

    </div>
  )
}
