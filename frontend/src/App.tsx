import React from 'react';
import {Grid, HStack, Flex, Box, Spacer, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Link} from '@chakra-ui/react'
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

      </Grid> 
  );
}

export default App;
