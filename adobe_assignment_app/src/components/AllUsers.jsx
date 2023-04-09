import React, { useEffect, useState } from 'react'
import axios from "axios"

import {
  Button, 
  Heading, 
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
} from '@chakra-ui/react'
import "./AllUsers.css"

const getData=async()=>{
    return await axios.get("https://adobe-assignment-server.onrender.com/users")
}

const AllUsers = () => {
    const [allusers,setAllusers]=useState([])
    const [flag,setFlag]=useState(false)
    const [data,setData]=useState([])
    useEffect(()=>{
      getData().then((res)=>setAllusers(res.data))
    },[])

    const viewUser=(id)=>{
      axios.get(`https://adobe-assignment-server.onrender.com/users/${id}`).then((el)=>setData(el.data))
    }
    const editUser=(id)=>{
      console.log(id)
    }
    const deleteUser=(id)=>{
      axios.delete(`https://adobe-assignment-server.onrender.com/users/${id}`).then(()=>getData().then((res)=>setAllusers(res.data)))
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
              <button onClick={()=>viewUser(el._id)} style={{backgroundColor:"#bbc1c6"}}>View</button>
            </PopoverTrigger>
            <PopoverContent backgroundColor={'#bbc1c6'} padding={'20px'} color='white' margin={'auto'}  >
               <PopoverCloseButton backgroundColor={'#bbc1c6'}><Button backgroundColor={"black"} color={'white'}>x</Button></PopoverCloseButton>
                <Text>name- {data.name}</Text>
                <Text>id- {data._id}</Text>
                <Text>email- {data.email}</Text>
                <Text>bio- {data.bio}</Text>
            </PopoverContent>
          </Popover>
          <Popover >
             <PopoverTrigger  >
             <button onClick={()=>editUser(el._id)} style={{backgroundColor:"#517629"}}>Edit</button>
            </PopoverTrigger>
            <PopoverContent backgroundColor={'#517629'} padding={'20px'} color='white' margin={'auto'}   >
               <PopoverCloseButton backgroundColor={'#517629'}><Button backgroundColor={"black"} color={'white'}>x</Button></PopoverCloseButton>
                <input type='text' placeholder='name' />
                <br />
                <input  type='text' placeholder='bio' />
                <br />
                <input type="submit" />
            </PopoverContent>
          </Popover>
          <button onClick={()=>deleteUser(el._id)} style={{backgroundColor:"red"}}>Delete</button>
        </div>
      ))}
      </div>
    </div>
  )
}

export default AllUsers