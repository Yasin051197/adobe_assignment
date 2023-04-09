import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import {AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon} from "@chakra-ui/icons"
import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const N = () => {
  return (
    <div id="menu">
    <Menu>
    <MenuButton
      as={IconButton}
      aria-label='Options'
      icon={<HamburgerIcon />}
      variant='outline'
      />
     <MenuList width={"100%"} padding={"2%"} backgroundColor={"#fad1d0"}>
      <MenuItem border={'none'}><Link style={{textDecoration:"none",color:"black",fontSize:"15px"}} to="/user">PostUser  </Link></MenuItem>
      <br />
      <MenuItem border={'none'}><Link style={{textDecoration:"none",color:"black",fontSize:"15px"}} to="/post">Postpost  </Link></MenuItem>
      <br />
      <MenuItem border={'none'}><Link style={{textDecoration:"none",color:"black",fontSize:"15px"}} to="/users">AllUsers  </Link></MenuItem>
      <br />
      <MenuItem border={'none'}><Link style={{textDecoration:"none",color:"black",fontSize:"15px"}} to="/posts">AllPosts</Link></MenuItem>
      <br />
      <MenuItem border={'none'}><Link style={{textDecoration:"none",color:"black",fontSize:"15px"}} to="/users/analytics">UserAnalytics</Link></MenuItem>
      <br />
      <MenuItem border={'none'}><Link style={{textDecoration:"none",color:"black",fontSize:"15px"}} to="/posts/analytics">PostAnalytics</Link></MenuItem>
    </MenuList>
  </Menu>
  </div>
  )
}

export default N