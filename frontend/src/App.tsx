import React from 'react';
import { Grid, HStack, VStack,Flex, Box, Spacer, Breadcrumb, BreadcrumbItem, BreadcrumbLink, 
        Link, Heading, Text, Button, Divider } from '@chakra-ui/react'
import './App.css';

function App() {
  return (
    <Grid w='100%' h='100%'>
      <HStack>
        <Flex gap='500'>
          <Box p='4' bg='white'>
            <header> Mint Protocol </header>  
          </Box>
            <Spacer/>
              <Box p='4' bg='white.400'>
              <Breadcrumb spacing='8px'>
                <BreadcrumbItem>
                  <BreadcrumbLink as={Link} to='#'>About</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink as={Link} to='#'>Team</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink as={Link} to='#'>Contact Us</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
          </Box>
      </Flex>
      </HStack>

      <VStack w = '100%' h = '800px' background= '#e80b9d' alignItems='center' 
        max-width='100px'>
        <Box h='200px'></Box>
          <Heading h='100px'
            fontWeight={800}
            fontSize={{ base: '4xl', sm: '8xl', md: '10xl' }}
            textColor='white'>
              Mint Protocol
          </Heading>
            <Box h='50px'></Box>
          <Heading h='100px'
            fontWeight={400}
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            textColor='white'
            className="font">
              You are your own NFT
          </Heading>
          <Button colorScheme='teal' size='md' height='60px'
            width='200px'>
            <Text fontSize='30px'>Start</Text>
          </Button>
      </VStack>
      <VStack  alignItems='center' height= "300px" max-width= "100%" background = "white">  
      <Box h='50px'></Box>

      <Divider/>
        <VStack>
          <Box h='50px'></Box>
        </VStack>
      <Heading> About </Heading>
        <VStack>
          <Box h='100px'></Box>
            <Box>
              <Heading h='500px' w='900px'
                textAlign='center'
                fontSize='30px'
                >
                  Mint Protocol is a decentralized application that generates NFTs 
                  using artificial vision with facial recognition and neural transfer 
                  style based on convolutional neural networks.    
              </Heading>
            </Box>
        </VStack>
        </VStack> 
    </Grid> 

  );
}
export default App;
