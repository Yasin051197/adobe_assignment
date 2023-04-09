import React, { useEffect, useState } from 'react'

import {Link} from "react-router-dom";
import { Box, Button, Heading } from '@chakra-ui/react';

const Navbar = () => {
  
  return (
    <div>
          <Box display={"flex"} justifyContent={{sm:"space-evenly", md:"center", lg:"space-evenly"}} padding="15px">
            <Link to="/users"><Button>AllUsers</Button></Link>
            <Link to="/posts"><Button>AllPosts</Button></Link>
          </Box>
    </div>
  )
}

export default Navbar
