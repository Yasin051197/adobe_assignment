import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserForm from '../components/UserForm'
import AllPosts from '../components/AllPosts'
import AllUsers from "../components/AllUsers"

const Routers = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<UserForm />}/>
            <Route path="/users" element={<AllUsers />}/>
            <Route path="/posts" element={<AllPosts />}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routers