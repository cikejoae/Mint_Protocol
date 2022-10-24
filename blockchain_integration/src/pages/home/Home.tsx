import React, {MouseEventHandler, MouseEvent , useState,} from 'react';
import { Button as But,Flex, Heading, Box, HStack, CircularProgress, CircularProgressLabel,Tabs, TabList, TabPanels, Tab, TabPanel, VStack, Stack, Spacer,ButtonGroup,Center, ButtonProps, useColorModeValue, Tooltip } from '@chakra-ui/react';
import { FaRedhat } from "react-icons/fa";
import { useEffect } from 'react';
import { truncate } from 'fs';
import './App.css';
import { Davincicollection } from './DaVincicollection';
import { Picassocollection} from './Picassocollection';
import { Filters } from './Filters';







function Home() {

 
const [value, setValue] = useState(false);

const activeInactive_button_capture = () => {
   
    setValue(prevValue => !prevValue );
    
    pull_button_capture();
    
    };

const button_signal = value ? 0 : 1
    
const pull_button_capture = async () => {
    
          
    const res = await fetch('http://localhost:5000/button_capture',
    { method : "POST", 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(button_signal)})
    const data = await res.json();
      
    }

  return (
    <>
      <Tabs variant='soft-rounded' colorScheme= "pink">
        <TabList>
          <Tab>Mint</Tab>
          <Tab>My collection</Tab>
      
        </TabList>
  <TabPanels>
    <TabPanel>
      <VStack>
      <Box w = "100%" h="20px" >

      <Flex gap="2">
       
      </Flex>
      </Box>


      <Box w = "100%" h="30px" >
          <Center className="aumento" 
           bg='white' h='30px' color='#e80b9d'>
          <h1>Mint Protocol</h1> 
          </Center>
      </Box>
      
      </VStack>
      <HStack>
      <Flex gap="3">
      <Spacer />
      <Box  w="100" h="100px">    
      </Box>
      <Box w="400px" h="400px">
          <img src={'/video_feed'}/>
          <But  colorScheme= "pink" w="100%" h="50px" bg= "#e80b9d"   type="submit" onClick = {activeInactive_button_capture } >Capture</But>    
      </Box>
      <Spacer />
          
      <VStack w="500px" h="300px" >

        <Heading size="md">Filters</Heading>
        <HStack>
        <Flex gap="2">
        <Box  border='2px' borderColor="#e80b9d" borderRadius='md' bg="white" w="100px" h="100px">
        </Box>
        <Box border='2px' borderColor="#e80b9d" borderRadius='md' bg="white" w="100px" h="100px">    
        </Box>
        <Box border='2px' borderColor="#e80b9d" borderRadius='md' bg="white" w="100px" h="100px">    
        </Box>
        </Flex>
        </HStack>
        <Heading size="md">Styles</Heading>
        <HStack>
        <Flex gap="2">
        <Box border='2px' borderColor="#e80b9d" borderRadius='md' bg="white" w="100px" h="100px">    
        </Box>
        <Box border='2px' borderColor="#e80b9d" borderRadius='md' bg="white" w="100px" h="100px">    
        </Box>
        <Box border='2px' borderColor="#e80b9d" borderRadius='md' bg="white" w="100px" h="100px">    
        </Box>
        </Flex>
        </HStack>
        <But colorScheme= "red"  borderRadius='md' w="150px" h="70px" bg= "red"  type="submit">Style transfer</But>
        

      </VStack>

      <Spacer />
  
      <Box bg = "white" w="400px" h="400px">
   
         <img  width="100%" height="100%" src={"./photo.jpg"}  ></img>

      <Box  w="100%" h="50px">
      <But  colorScheme= "pink" w="100%" h="50px" bg= "#e80b9d"  type="submit"> Mint </But>      
      </Box>
      </Box>
      <Spacer />
      </Flex>
       
      </HStack>
      
      <Tabs isFitted variant='soft-rounded' colorScheme='red'>
          <TabList mb='1em'>
                        <Tab>Add Filters</Tab>
                        <Tab>Add Styles</Tab>
          </TabList>
           <TabPanels>
            <TabPanel>
                        <h1>Add Filters</h1>
                        <Filters></Filters>
           </TabPanel>
            <TabPanel>
                        <h1>Add Styles</h1>
                        <Davincicollection></Davincicollection>
                        <Picassocollection></Picassocollection>
            </TabPanel>
            </TabPanels>
       </Tabs>

        
        

        
       
       
      </TabPanel>
    <TabPanel>
      <p>My NFT collection</p>
    </TabPanel>
    </TabPanels>
    </Tabs>
      
      
    </>
  );
}


export { Home };


