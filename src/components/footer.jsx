import {Box,Text,Image,Flex} from '@chakra-ui/react';
import logo from '../assets/openai.png';
const Footer = () => {
     return (
          <Box marginTop={50}>
               <Flex alignItems="center" justifyContent="center">
                    <Image src={logo} alt="logo" marginRight={1}/>
                    <Text color="black">powered by open ai</Text>
               </Flex>
          </Box>
     );
};
export default Footer;