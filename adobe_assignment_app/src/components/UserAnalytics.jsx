import { Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
const getUsersCount=async()=>{
    return await axios.get('https://adobe-assignment-server.onrender.com/analytics/users')
}
const getTop5users=async()=>{
    return await axios.get('https://adobe-assignment-server.onrender.com/analytics/users/top-active')
}
const UserAnalytics = () => {
    const [count,setCount]=useState(0)
    const [top5users,setTop5Users]=useState([])
    useEffect(()=>{
        getUsersCount().then((res)=>setCount(res.data.count))
        getTop5users().then((res)=>setTop5Users(res.data.top_5_users))
    },[])
  return (
    <div>
        <Navbar />
        <Heading>UserAnalytics</Heading>
        <Text fontWeight={'bold'} >Total users:- {count}</Text>
        {top5users.map((el)=>(
        <div id="top5posts" key={el._id}>
            <Text>ID:- {el._id}</Text>
            <Text>name:- {el.name}</Text>
            <Text>postCount:- {el.postCount}</Text>
        </div>
       ))}
        </div>
  )
}

export default UserAnalytics