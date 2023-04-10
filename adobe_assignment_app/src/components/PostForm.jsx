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
  
  export default function PostForm() {
  
    const initial={  
            user_id:"",
            content:""
    }
    
    const [post,setPost]=useState(initial);
    const AleretMsg = useToast()
    const [loading, setloading] = useState(false);
    const navigate=useNavigate(); 
  
    const handlechange=(e)=>{
  
      const {name,value}=e.target;
  
      setPost({...post,[name]:value});
     
    }
  
    const handleSubmit = async(e) => {
      e.preventDefault();    
          setloading(true)
          try{
          
            await fetch("https://adobe-assignment-server.onrender.com/posts",{
              method:'POST',
              headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify(post),

            }).then((res)=>res.json()).then((res)=>alert(res.msg)).then(()=>setloading(false))
          }
          catch(err){
            setloading(false);
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
              <FormLabel>User_id</FormLabel>
                <Input type="taxt" name='user_id' maxLength={50} placeholder='Enter your name' value={post.user_id} onChange={handlechange}/> 
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>content</FormLabel>
                <InputGroup>
                  <Input type='text' placeholder='Enter your bio' name="content" maxLength={200} value={post.content} onChange={handlechange}/>
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