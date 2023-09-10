import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../index.js";
import { Button, Container, HStack, Heading, Image, Radio, RadioGroup, Text, VStack } from "@chakra-ui/react";
import Loader from "./Loader.jsx";
import Error from "./Error.jsx";
import CoinCard from "./CoinCard.jsx";

const Coins=()=>{

const [coins,setCoins]=useState([]);
const [loading,setLoading]=useState(true);
const [error,setError]=useState(false);
const [page,setPage]=useState(1);
const [currency,setCurrency]=useState("inr");
const [currencySymbol,setCurrencySymbol]=useState("₹");

const changePage=(page)=>{
    setPage(page);
    setLoading(true);
}

const btns = new Array(132).fill(1);

useEffect(()=>{
  
    if(currency==="inr"){
        setCurrencySymbol("₹")
    }
    else if(currency==="eur"){
        setCurrencySymbol("€")
    }
    else{setCurrencySymbol("$")}
  
    
 const fetchCoins = async()=>{
try{
    const {data}= await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
    console.log(data)
    setCoins(data);
    
    setLoading(false);
}
catch(error){
    setLoading(false)
    setError(true);


}
    
 }

 fetchCoins();

},[currency,page]);

if(error){
    return <Error/>
}

    return(<Container bgColor={"blackAlpha.900"} maxW={"container.xl"}>
         {loading ? <Loader/>:
            <>

            <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
               <HStack spacing={"4"} color={"white"}>
                  <Radio value={"inr"} >₹</Radio>
                  <Radio value={"usd"} >$</Radio>
                  <Radio value={"eur"} >€</Radio>
               </HStack>    
                
            </RadioGroup> 

            <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
                {coins.map((i)=>(
                     <CoinCard id={i.id} key={i.id} name={i.name} price={i.current_price} image={i.image} symbol={i.symbol} currencySymbol={currencySymbol} />
                ))}
            </HStack>


            <HStack w={"full"} overflowX={"auto"} p={"8"}>
            {btns.map((item, index) => (
              <Button
                key={index}
                bgColor={"whiteAlpha.300"}
                color={"white"}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
            
            
            </>
         
         }
    </Container>
        
    );
}




export default Coins;