import React, { useEffect, useState } from 'react'
import axios from "axios"
import { 
  Text, 
  Button, 
  Heading,
  Popover, 
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton, } from '@chakra-ui/react'

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
          <Popover >
             <PopoverTrigger  >
              <button onClick={()=>viewUser(el)} style={{backgroundColor:"#bbc1c6"}}>View</button>
            </PopoverTrigger>
            <PopoverContent backgroundColor={'#bbc1c6'} padding={'20px'} color='white' margin={'auto'}  >
               <PopoverCloseButton backgroundColor={'#bbc1c6'}><Button backgroundColor={"black"} color={'white'}>x</Button></PopoverCloseButton>
                <Text>name- {el.content}</Text>
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
          <Button onClick={()=>deleteUser(el._id)} backgroundColor={'red'}>Delete</Button>
        </div>
      ))}
      </div>
    </div>
  )
}

export default AllPosts