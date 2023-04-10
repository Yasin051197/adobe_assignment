import React, { useEffect, useState } from 'react'
import axios from "axios"

import {
  Button, 
  Heading, 
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
} from '@chakra-ui/react'
import "./AllUsers.css"
import Navbar from './Navbar'

const getData=async()=>{
    return await axios.get("https://adobe-assignment-server.onrender.com/users")
}

const AllUsers = () => {
  const initial={  
    name:"",
    bio:""
}

   const [user,setuser]=useState(initial);
    const [allusers,setAllusers]=useState([])
    const [flag,setFlag]=useState(false)
    const [data,setData]=useState([])
    const [loading, setloading] = useState(false)
    useEffect(()=>{
      getData().then((res)=>setAllusers(res.data))
    },[])

    const viewUser=(id)=>{
      axios.get(`https://adobe-assignment-server.onrender.com/users/${id}`).then((el)=>setData(el.data))
    }
   
    const deleteUser=(id)=>{
      axios.delete(`https://adobe-assignment-server.onrender.com/users/${id}`).then((res)=>alert(res.data.msg)).then(()=>getData().then((res)=>setAllusers(res.data)))
    }
;
  
    const handlechange=(e)=>{
  
      const {name,value}=e.target;
  
      setuser({...user,[name]:value});
     
    }
    const handleSubmit = async(e,id) => {
      e.preventDefault();    
          setloading(true)
          try{
            axios.put(`https://adobe-assignment-server.onrender.com/users/${id}`,{name:user.name,bio:user.bio}).then((res)=>alert(res.data.msg)).then(()=>getData().then((res)=>setAllusers(res.data)))
            setloading(false)
          }
          catch(err){
            setloading(false);
            console.log(err)
          }       
    }  
  return (
    <div>
      <Navbar />
      <Heading>AllUsers</Heading>
      <div id="container">
      {allusers.map((el)=>(
        <div id="container_div" key={el._id}>
          <Text>User:- {el.name}</Text>
          <Popover >
             <PopoverTrigger  >
              <button onClick={()=>viewUser(el._id)} style={{backgroundColor:"#bbc1c6"}}>View</button>
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
             <button  style={{backgroundColor:"#517629"}}>Edit</button>
            </PopoverTrigger>
            <PopoverContent backgroundColor={'#517629'} padding={'20px'} color='white' margin={'auto'}   >
               <PopoverCloseButton backgroundColor={'#517629'}><Button backgroundColor={"black"} color={'white'}>x</Button></PopoverCloseButton>
                <input type='text' name='name' maxLength={50} placeholder='Enter your new name'  onChange={handlechange} />
                <br />
                <input  type='text' placeholder='Enter your new bio' name="bio" maxLength={200}  onChange={handlechange} />
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
          <button onClick={()=>deleteUser(el._id)} style={{backgroundColor:"red"}}>Delete</button>
        </div>
      ))}
      </div>
    </div>
  )
}

export default AllUsers