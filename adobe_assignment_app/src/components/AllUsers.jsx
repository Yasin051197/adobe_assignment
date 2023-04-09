import React, { useEffect, useState } from 'react'
import axios from "axios"

import {
  Box, 
  Button, 
  Flex, 
  Heading, 
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Grid,
} from '@chakra-ui/react'
import "./AllUsers.css"

const getData=async()=>{
    return await axios.get("https://adobe-assignment-server.onrender.com/users")
}

const AllUsers = () => {
    const [allusers,setAllusers]=useState([])
    const [flag,setFlag]=useState(false)
    useEffect(()=>{
      getData().then((res)=>setAllusers(res.data))
    },[])

    const viewUser=(el)=>{
      
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
      {allusers.map((el)=>(
        <div id="container_div" key={el._id}>
          <Text>User:- {el.name}</Text>
          <Popover >
             <PopoverTrigger  >
              <button onClick={()=>viewUser(el)} style={{backgroundColor:"gray"}}>View</button>
            </PopoverTrigger>
            <PopoverContent backgroundColor={'gray'} padding={'20px'} color='white' position={'fixed'}  >
               <PopoverCloseButton backgroundColor={'gray'}><Button backgroundColor={"black"} color={'white'}>x</Button></PopoverCloseButton>
                <Text>name- {el.name}</Text>
                <Text>id- {el._id}</Text>
                <Text>email- {el.email}</Text>
                <Text>bio- {el.bio}</Text>
            </PopoverContent>
          </Popover>
          <button onClick={()=>editUser(el._id)} style={{backgroundColor:"green"}}>Edit</button>
          <button onClick={()=>deleteUser(el._id)} style={{backgroundColor:"red"}}>Delete</button>
        </div>
      ))}
      </div>
    </div>
  )
}

export default AllUsers