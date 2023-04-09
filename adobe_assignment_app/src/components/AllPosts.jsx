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
import Navbar from './Navbar'

const getData=async()=>{
  return await axios.get("https://adobe-assignment-server.onrender.com/posts")
}

const AllPosts = () => {
    const initial={  
      content:""
  }
  
     const [post,setpost]=useState(initial);
  const [allposts,setAllposts]=useState([])
  const [data,setData]=useState([])
  const [loading, setloading] = useState(false)
    useEffect(()=>{
      getData().then((res)=>setAllposts(res.data))
    },[])

    const viewPost=(id)=>{
      console.log(id)
      axios.get(`https://adobe-assignment-server.onrender.com/users/${id}`).then((el)=>setData(el.data))
    }
    const editPost=(id)=>{
      console.log(id)
    }
    const deletePost=(id)=>{
      axios.delete(`https://adobe-assignment-server.onrender.com/posts/${id}`).then(()=>getData().then((res)=>setAllposts(res.data)))
    }
    const handlechange=(e)=>{
  
      const {name,value}=e.target;
  
      setpost({...post,[name]:value});
     
    }
    const handleSubmit = async(e,id) => {
      console.log(e,id)
      e.preventDefault();    
          setloading(true)
          try{
            axios.patch(`https://adobe-assignment-server.onrender.com/posts/${id}`,{content:post.content}).then(()=>getData().then((res)=>setAllposts(res.data)))
            setloading(false)
          }
          catch(err){
            setloading(false);
            console.log(err)
          }       
    }  
    const likepost=(id)=>{
      axios.post(`https://adobe-assignment-server.onrender.com/posts/${id}/like`).then(()=>getData().then((res)=>setAllposts(res.data)))
    }
    const unlikepost=(id,like)=>{
      axios.post(`https://adobe-assignment-server.onrender.com/posts/${id}/unlike`).then(()=>getData().then((res)=>setAllposts(res.data)))
    }
  return (
    <div>
      <Navbar />
      <Heading>AllPosts</Heading>
      <div id="container">
      {allposts.map((el)=>(
        <div id="container_div" key={el._id}>
          <Text height={"auto"}>Content:- {el.content}</Text>
          <Popover >
             <PopoverTrigger  >
              <button onClick={()=>viewPost(el.user_id)} style={{backgroundColor:"#bbc1c6"}}>View</button>
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
             <button onClick={()=>editPost(el._id)} style={{backgroundColor:"#517629"}}>Edit</button>
            </PopoverTrigger>
            <PopoverContent backgroundColor={'#517629'} padding={'20px'} color='white' margin={'auto'}   >
               <PopoverCloseButton backgroundColor={'#517629'}><Button backgroundColor={"black"} color={'white'}>x</Button></PopoverCloseButton>
                <input type='text' placeholder='Enter your new content' name="content" maxLength={300}  onChange={handlechange} />
                <br />
                <Button
                onClick={(e)=>handleSubmit(e,el._id)}
                  isLoading={loading}
                  loadingText="Submitting"
                  color={'white'}
                  size="lg"
                  bg={'black'}
                  
                >
                  Submit
                </Button>
            </PopoverContent>
          </Popover>
          <button onClick={()=>deletePost(el._id)} style={{backgroundColor:"red"}}>Delete</button>
          <button onClick={()=>likepost(el._id,el.likes)} style={{backgroundColor:"#e91e63"}}>like</button>
          <button onClick={()=>unlikepost(el._id,el.likes)} style={{backgroundColor:"#2196f3"}}>unlike</button>
        </div>
      ))}
      </div>
    </div>
  )
}

export default AllPosts