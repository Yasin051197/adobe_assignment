import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Heading, Text } from '@chakra-ui/react'
import axios from 'axios'
import "./Analytics.css"
const getPostsCount=async()=>{
    return await axios.get('https://adobe-assignment-server.onrender.com/analytics/posts')
}
const gettoplikedposts=async()=>{
    return await axios.get('https://adobe-assignment-server.onrender.com/analytics/posts/top-liked')
}
const PostAnalytics = () => {
    const [count,setCount]=useState(0)
    const [top5posts,setTop5Posts]=useState([])
    useEffect(()=>{
        getPostsCount().then((res)=>setCount(res.data.count))
        gettoplikedposts().then((res)=>setTop5Posts(res.data.top_liked_posts))
    },[])
  return (
    <div>
        <Navbar />
       <Heading>PostAnalytics</Heading>
       <div id="user_contaner">
         <div>
            <Text fontWeight={'bold'} >Total posts</Text>
            <Text fontWeight={'bold'} >{count}</Text>
         </div>
       <div id="top5posts">
        <Text fontWeight={'bold'} >Top 5 users</Text>
        {top5posts.map((el)=>(
        <div key={el._id}>
            <Text>ID:- {el._id}</Text>
            <Text>Content:- {el.content}</Text>
            <Text>likes:- {el.likes}</Text>
        </div>
       ))}
        </div>
       </div>
    </div>
  )
}

export default PostAnalytics