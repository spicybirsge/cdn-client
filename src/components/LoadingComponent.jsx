import { Spinner } from "@chakra-ui/react";


export default function LoadingComponent() {

    return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}><Spinner size={"xl"} color='blue.500' speed='0.65s' thickness='4px' emptyColor='gray.200'></Spinner></div>
}