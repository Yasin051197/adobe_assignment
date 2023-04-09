import React, { useEffect, useState } from 'react'

import {Link} from "react-router-dom";
import { Box, Button, Heading } from '@chakra-ui/react';

const Navbar = () => {
  
  return (
    <div>
          <Box width={"100%"} display={"flex"} justifyContent={{sm:"space-evenly", md:"center", lg:"space-evenly"}} padding="15px">
            <Link to="/user"><Button>PostUser</Button></Link>
            <Link to="/post"><Button>Postpost</Button></Link>
            <Link to="/users"><Button>AllUsers</Button></Link>
            <Link to="/posts"><Button>AllPosts</Button></Link>
            <Link to="/users/analytics"><Button>UserAnalytics</Button></Link>
            <Link to="/posts/analytics"><Button>PostAnalytics</Button></Link>
          </Box>
    </div>
  )
}

export default Navbar
