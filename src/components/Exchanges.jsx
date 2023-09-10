import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../index.js";
import { Container, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Loader from "./Loader.jsx";
import Error from "./Error.jsx";

const Exchanges=()=>{

const [exchanges,setExchanges]=useState([]);
const [loading,setLoading]=useState(true);
const [error,setError]=useState(false);

useEffect(()=>{
 const fetchExchanges = async()=>{
try{
    const {data}= await axios.get(`${server}/exchanges`);
    setExchanges(data);
    setLoading(false);
}
catch(error){
    setLoading(false)
    setError(true);


}
    
 }

 fetchExchanges();

},[]);

if(error){
    return <Error/>
}

    return(
    
    <Container maxW={"container.xl"} bgColor={"blackAlpha.900"}>
         {loading ? <Loader/>:
            <>
            <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
                {exchanges.map((i)=>(
                     <ExchangeCard key={i.id} name={i.name} image={i.image} rank={i.rank} url={i.url} />
                ))}
            </HStack>
            
            
            </>
         
         }
    </Container>
        
    );
}

const ExchangeCard=({name,image,rank,url})=>(
    <a href={url}>
        <VStack bgColor={"whiteAlpha.100"} w={"52"} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.3s"}
         m={"4"}
         css={{
           "&:hover" :{
            transform:"scale(1.1)"
           }    
        }}
        >
        <Image src={image} w={"10"} h={"10"} objectFit={"contain"} alt={"Exchange"} />
        <Heading color={"white"} size={"md"} noOfLines={1}>{rank}</Heading>
        <Text color={"white"} noOfLines={1} >{name}</Text>
        </VStack>
    </a>

);


export default Exchanges;