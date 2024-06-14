'use client'
import { useState } from 'react'
import { Input, InputGroup, InputRightElement, Button, Text, Stack } from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'


export default function AdminLogin() {
  const [submitting, setSubmitting] = useState(false)
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const toast = useToast()

  const [key, setKey] = useState('')

  const login = async () => {
    setSubmitting(true)
    const url = `https://shaheercdn.onrender.com/authorize?key=` + key;

    const request = await fetch(url, {
      method: 'GET'

    })

    try {
      const response = await request.json()
      if (response.success) {
        setSubmitting(false)
        window.localStorage.setItem("token", key)
        window.location.href = '/'
      } else {
        setSubmitting(false)
        toast({
          status: 'error',
          isClosable: true,
          position: 'top',
          description: 'Invalid auth key'
        })
      }
    } catch {
      setSubmitting(false)
      toast({
        status: 'error',
        isClosable: true,
        position: 'top',
        description: 'Invalid auth key'
      })
    }
  }



  return <div style={{
    marginTop: "25vh",

  }}>
    <Stack align={"center"} style={{ marginBottom: "20px" }}>
      <Text fontSize='xl' as={"b"} style={{ "textAlign": "center !important" }}>Hello Admin 👋</Text>

    </Stack>
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Auth Key'
        value={key}
        onChange={(e) => { setKey(e.target.value) }}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>

    </InputGroup>
    <div style={{ marginTop: "10px" }}></div>
    <Button colorScheme={"blue"} size='md' isLoading={submitting} onClick={login}>Login</Button>
  </div>
}