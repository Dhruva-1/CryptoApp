import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <HStack p={"4"} shadow={"base"} bgColor={"black"}>

        
            <Button variant={"unstyled"} color={"white"} mr={"10"}>
                <Link to="/">Home</Link>
            </Button>

            <Button variant={"unstyled"} color={"white"} mr={"10"}>
                <Link to="/Exchanges">Exchanges</Link>
            </Button>

            <Button variant={"unstyled"} color={"white"} mr={"10"}>
                <Link  to="/coins">Coins</Link>
           </Button>  

           <Button variant={"unstyled"} color={"white"} ml={"650"}>CRYPTO-TRADER</Button>
        
        
            
        

        </HStack>
    );
}
export default Header;