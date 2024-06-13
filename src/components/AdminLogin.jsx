'use client'
import { useState } from 'react'
import { Input, InputGroup, InputRightElement, Button, Text, Stack } from '@chakra-ui/react'
export default function AdminLogin() {
    const [submitting, setSubmitting] = useState(false)
  const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return <div  style={{
        marginTop: "25vh",
         
      }}>
<Stack align={"center"} style={{marginBottom: "20px"}}>
 <Text fontSize='xl' as={"b"} style={{"textAlign": "center !important"}}>Hello Admin 👋</Text>

 </Stack>
<InputGroup size='md'>
  <Input
    pr='4.5rem'
    type={show ? 'text' : 'password'}
    placeholder='Auth Key'
  />
  <InputRightElement width='4.5rem'>
    <Button h='1.75rem' size='sm' onClick={handleClick}>
      {show ? 'Hide' : 'Show'}
    </Button>
  </InputRightElement>
 
</InputGroup>
<div style={{marginTop: "10px"}}></div>
<Button colorScheme={"blue"}  size='md' isLoading={submitting}>Login</Button>
</div>
}