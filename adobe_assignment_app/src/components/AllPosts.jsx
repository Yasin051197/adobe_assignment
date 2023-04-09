import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import "./AllUsers.css"

const getData=async()=>{
  return await axios.get("https://adobe-assignment-server.onrender.com/posts")
}

const AllPosts = () => {
  const [allposts,setAllposts]=useState([])
    useEffect(()=>{
      getData().then((res)=>setAllposts(res.data))
    },[])

    const viewUser=(el)=>{
      console.log(el)
    }
    const editUser=(id)=>{
      console.log(id)
    }
    const deleteUser=(id)=>{
      console.log(id)
    }
  return (
    <div>
      <Heading>AllUsers</Heading>
      <div id="container">
      {allposts.map((el)=>(
        <div id="container_div" key={el._id}>
          <Text>Content:- {el.content}</Text>
          <Button onClick={()=>viewUser(el.user_id)} backgroundColor={'gray'} >View</Button>
          <Button onClick={()=>editUser(el._id)} backgroundColor={'green'}>Edit</Button>
          <Button onClick={()=>deleteUser(el._id)} backgroundColor={'red'}>Delete</Button>
        </div>
      ))}
      </div>
    </div>
  )
}

export default AllPosts