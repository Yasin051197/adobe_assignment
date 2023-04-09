import React, { useEffect, useState } from 'react'

import {Link} from "react-router-dom";
import { Box, Button, Heading } from '@chakra-ui/react';
import "./Navbar.css"
import N from './N';


const Navbar = () => {

  return (
    <div id="navbar">
      <N />
      <div id="navbar_div">
      <Link style={{textDecoration:"none",color:"white",fontSize:"20px",fontWeight:"bold"}} to="/user">PostUser</Link>
      <Link style={{textDecoration:"none",color:"white",fontSize:"20px",fontWeight:"bold"}} to="/post">Postpost</Link>
      <Link style={{textDecoration:"none",color:"white",fontSize:"20px",fontWeight:"bold"}} to="/users">AllUsers</Link>
      <Link style={{textDecoration:"none",color:"white",fontSize:"20px",fontWeight:"bold"}} to="/posts">AllPosts</Link>
      <Link style={{textDecoration:"none",color:"white",fontSize:"20px",fontWeight:"bold"}} to="/users/analytics">UserAnalytics</Link>
      <Link style={{textDecoration:"none",color:"white",fontSize:"20px",fontWeight:"bold"}} to="/posts/analytics">PostAnalytics</Link>
      </div>
    </div>
  )
}

export default Navbar
