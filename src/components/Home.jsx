import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import imgsrc from "../assests/btc3.jpg";

const Home=()=>{
    return(
        <Box bgColor={"blackAlpha.900"} w={"full"} h={"90vh"}>
            <Image w={"full"} h={"full"} objectFit={"contain"} src={imgsrc}/>
            <Text fontSize={"6xl"} textAlign={"center"} fontWeight={"thin"} color={"whiteAlpha.900"} mt={"-60"} ml={"30"} fontFamily={"bebas neue"} letterSpacing={"widest"}>CRYPTO-TRADER</Text>
            {/* <Text fontSize={"6xl"} textAlign={"center"} fontWeight={"thin"} color={"whiteAlpha.700"} mt={"-20"}>Bit-Trader</Text> */}

        </Box>
    );
}
export default Home;