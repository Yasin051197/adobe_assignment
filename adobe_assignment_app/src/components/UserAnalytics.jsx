import { Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
const getUsersCount=async()=>{
    return await axios.get('https://adobe-assignment-server.onrender.com/analytics/users')
}
const UserAnalytics = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        getUsersCount().then((res)=>setCount(res.data.count))
    },[])
  return (
    <div>
        <Navbar />
        <Heading>UserAnalytics</Heading>
        <Text fontWeight={'bold'} >Total users:- {count}</Text>
        </div>
  )
}

export default UserAnalytics