import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Heading, Text } from '@chakra-ui/react'
import axios from 'axios'
const getPostsCount=async()=>{
    return await axios.get('https://adobe-assignment-server.onrender.com/analytics/posts')
}
const gettoplikedposts=async()=>{
    return await axios.get('https://adobe-assignment-server.onrender.com/analytics/posts/top-liked')
}
const PostAnalytics = () => {
    const [count,setCount]=useState(0)
    const [Top5posts,setTop5Posts]=useState([])
    useEffect(()=>{
        getPostsCount().then((res)=>setCount(res.data.count))
        gettoplikedposts().then((res)=>setTop5Posts(res.data.top_liked_posts))
    },[])
  return (
    <div>
        <Navbar />
       <Heading>PostAnalytics</Heading>
       <Text fontWeight={'bold'} >Total posts:- {count}</Text>
       {Top5posts.map((el)=>(
        <div id="top5posts" key={el._id}>
            <Text>ID:- {el._id}</Text>
            <Text>Content:- {el.content}</Text>
            <Text>likes:- {el.likes}</Text>
        </div>
       ))}
    </div>
  )
}

export default PostAnalytics