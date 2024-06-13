'use client'
import { useState, useEffect } from 'react';
import { Input, InputGroup, InputRightElement, Button, Text, Stack } from '@chakra-ui/react'
import AdminLogin from '@/components/AdminLogin';
import Upload from 'rc-upload';
export default function Home() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)


 

  return (
   <div className='container2'>
    
    <div  style={{
        marginTop: "25vh",
         
      }}>
        <Text as={"b"} fontSize='xl' style={{"textAlign": "center !important"}} >Upload a file</Text> 
        <br></br>
        <input type='file' />
      </div>
    
   </div>
  );
}
