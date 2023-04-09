import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Heading, Text } from '@chakra-ui/react'
import "./AllUsers.css"

const getData=async()=>{
    return await axios.get("https://adobe-assignment-server.onrender.com/users")
}

const AllUsers = () => {
    const [allusers,setAllusers]=useState([])
    useEffect(()=>{
      getData().then((res)=>setAllusers(res.data))
    },[])
  return (
    <div>
      <Heading>AllUsers</Heading>
      <div id="container">
      {allusers.map((el)=>(
        <div key={el._id}>
          <Text>Name:-{el.name}</Text>
        </div>
      ))}
      </div>
    </div>
  )
}

export default AllUsers