import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast
  } from '@chakra-ui/react';
  import { useState } from 'react';
 
  import { Link } from 'react-router-dom';
  import { useNavigate } from 'react-router-dom';
  import Navbar from './Navbar';
  
  export default function UserForm() {
  
    const initial={  
            name:"",
            email:"",
            bio:""
    }
    
    const [user,setuser]=useState(initial);
    const AleretMsg = useToast()
    const [loading, setloading] = useState(false);
    const navigate=useNavigate(); 
  
    const handlechange=(e)=>{
  
      const {name,value}=e.target;
  
      setuser({...user,[name]:value});
     
    }
  
    const handleSubmit = async(e) => {
      e.preventDefault();    
          setloading(true)
          try{
          
            let res=await fetch("https://adobe-assignment-server.onrender.com/users",{
              method:'POST',
              headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify(user),

            }).then((res)=>res.json())
            
            setloading(false);
            AleretMsg({
              title: `${res.msg}`,
              position:"top",
              status: 'success',
              duration: 2000,
              isClosable: true,
            })
          }
          catch(err){
            setloading(false);
  
            AleretMsg({
              title: 'SignUp failed try again',
              position:"top",
              status: 'error',
              duration: 3000,
              isClosable: true,
            })
            console.log(err)
          }       
    }  
    const handleEdit=()=>{

    }
    return (
      <div>
        <Navbar />
        <Flex pt={14}
        minH={'80vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
             Post User
            </Heading>
           
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.600')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={8}>
              
              <FormControl id="email" isRequired>
              <FormLabel>Name</FormLabel>
                <Input type="taxt" name='name' maxLength={50} placeholder='Enter your name' value={user.name} onChange={handlechange}/>
                
              </FormControl>
              
              <FormControl id="password" isRequired>
                <FormLabel>Email</FormLabel>
                <InputGroup>
                  <Input type='email' placeholder='Enter your email' name="email" value={user.email} onChange={handlechange}/>
                </InputGroup>
                
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>bio</FormLabel>
                <InputGroup>
                  <Input type='text' placeholder='Enter your bio' name="bio" maxLength={200} value={user.bio} onChange={handlechange}/>
                </InputGroup>
                
              </FormControl>
                <Flex justifyContent={"space-evenly"}>
                <Button
                onClick={handleSubmit}
                 isLoading={loading}
                  loadingText="Submitting"
                  color={'white'}
                  size="lg"
                  bg={'green'}
                  
                >
                  Post
                </Button>
                {/* <Button
                onClick={handleEdit}
                isLoading={loading}
                  loadingText="Submitting"
                  color={'white'}
                  size="lg"
                  bg={'green'}
                 
                >
                  Edit
                </Button> */}
                </Flex>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </div>
      
    );
  }