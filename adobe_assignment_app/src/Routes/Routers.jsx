import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserForm from '../components/UserForm'
import AllPosts from '../components/AllPosts'
import AllUsers from "../components/AllUsers"
import Navbar from '../components/Navbar'
import PostForm from '../components/PostForm'
import UserAnalytics from '../components/UserAnalytics'
import PostAnalytics from '../components/PostAnalytics'

const Routers = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}/>
            <Route path="/user" element={<UserForm />}/>
            <Route path="/post" element={<PostForm />}/>
            <Route path="/users" element={<AllUsers />}/>
            <Route path="/posts" element={<AllPosts />}/>
            <Route path="/users/analytics" element={<UserAnalytics />}/>
            <Route path="/posts/analytics" element={<PostAnalytics />}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routers