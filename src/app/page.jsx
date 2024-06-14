'use client'
import { useState, useEffect } from 'react';
import { Input, InputGroup, InputRightElement, Button, Text, HStack, Center, Image, IconButton

 } from '@chakra-ui/react'
 import { Container } from '@chakra-ui/react'
import AdminLogin from '@/components/AdminLogin';
import { CopyIcon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/react'
import LoadingComponent from '@/components/LoadingComponent';
import { Link } from '@chakra-ui/next-js';
import { CopyToClipboard } from 'react-copy-to-clipboard';
export default function Home() {
  const toast = useToast()
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [imageURL, setImageURL] = useState(false)


useEffect(() => {
async function Authenticate() {
  const token = window.localStorage.getItem("token");
  if(!token) {
    setLoggedIn(false)
    setLoading(false)
  }
  const url = `https://shaheercdn.onrender.com/authorize?key=`+token
  const request = await fetch(url, {
    method: 'GET'
  })
try {
  const response = await request.json();
  if(response.success) {
    setLoggedIn(true)
    setLoading(false)
  } else {
    setLoggedIn(false)
    setLoading(false)
  }
} catch {
  setLoggedIn(false)
  setLoading(false)
}
}
Authenticate()
}, [])

if(loading) {
  return <LoadingComponent></LoadingComponent>
}

async function Upload() {
  const uploadableFile = file? file[0] : null
  setUploading(true)
if(!uploadableFile) {
  setUploading(false)
  toast({
    status: 'error',
    isClosable: true,
    position: 'top',
    description: 'Please select a file'
  })
  return;
}

const form = new FormData()
form.append("image", uploadableFile)
const url = `https://shaheercdn.onrender.com/upload?key=`+window.localStorage.getItem("token")
const request = await fetch(url, {
  method: 'POST',
  body: form
})
try {
const response = await request.json()
if(response.success) {
  setUploading(false)
  
  setImageURL("https://shaheercdn.onrender.com/"+response.url)
  toast({
    status: 'success',
    isClosable: true,
    position: 'top',
    description: 'File uploaded link is below'
  })
  return
} else {
  setUploading(false)
  toast({
    status: 'error',
    isClosable: true,
    position: 'top',
    description: response.message || response.error
  })
  return
}
} catch {
  setUploading(false)
  toast({
    status: 'error',
    isClosable: true,
    position: 'top',
    description: 'An error occured'
  })
  return;
}

}
  return (
   <Container>
      {!loading && loggedIn ?  <Center>
    <div  style={{
        marginTop: "25vh",
     
         
      }}>
      
        <Text as={"b"} fontSize='3xl' >Upload to CDN</Text> 
     <div style={{marginBottom: '30px', textAlign: 'center', alignItems: 'center'}}></div>
        <input type='file' name="upload-file" id="upload-file" className='upload-file' onChange={(e) => {setFile(e.target.files)}}/><div style={{marginBottom: '10px'}}></div>
        <Button colorScheme={"blue"} onClick={Upload} isLoading={uploading} style={{marginBottom: '10px'}}>Upload</Button>
        {imageURL ?<> <HStack><Text> <Link href={imageURL} target='_blank' color={"#2b6cb0"}>{imageURL}</Link>
          </Text> <CopyToClipboard text={imageURL} onCopy={() => { toast({
    status: 'success',
    isClosable: true,
    position: 'top',
    description: 'Copied to clipboard'
  })}}><IconButton variant='solid' icon={<CopyIcon></CopyIcon>} ></IconButton></CopyToClipboard></HStack></>:<></>}
      </div>
    
      </Center> : <AdminLogin></AdminLogin>}
   
   </Container>
  );
}
