import React from 'react';
import { Grid, HStack, VStack,Flex, Box, Spacer, Breadcrumb, BreadcrumbItem, BreadcrumbLink, 
        Link, Heading, Text, Button, Divider, Stack, Center, Image, useColorModeValue } from '@chakra-ui/react'
import './App.css';

function App() {
  return (
    <Grid w='100%' h='100%'>
      <HStack h='80px'>
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

      <VStack w = '100%' h = '700px' background= '#e80b9d' alignItems='center' 
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
      </VStack>
      <VStack  alignItems='center' height= "300px" max-width= "100%" background = "white">  
      <Box h='50px'></Box>

      <Divider/>
      <VStack>
          <Box h='50px'></Box>
        </VStack>
        <VStack>
          <Box h='100px'></Box>
            <Box>
              <Heading h='200px' w='900px'
                textAlign='center'
                fontSize='30px'
                >
                Create your own collection of NFTs with the best visual filters and with the style of your favorite artist..    
              </Heading>
              <Button colorScheme='pink' size='md' height='60px'
                      width='200px'
                      borderRadius='30px'
                      >
                <Text fontSize='30px'>Start</Text>
              </Button>
              <Box bg ="black" w="100%" h="300px"> 
              <div className="carousel">
              <div className="carousel_items" >
              <img  src={"./adan.jpg"} alt="" className="carousel_img" ></img>
              <img  src={"./Grito.jpg"} alt="" className="carousel_img" ></img>
              <img  src={"./Mona_Lisa.jpg"} alt="" className="carousel_img" ></img>
              <img  src={"./StarryNight.jpg"} alt="" className="carousel_img" ></img>
              <img  src={"./Persistencia_de_la_memoria.jpg"} alt="" className="carousel_img" ></img>
              </div>
              </div>
              </Box>

            </Box>
        </VStack>
        <VStack>
          <Box h='50px'></Box>
        </VStack>
        <VStack  w = '100%' h = '800px' background= '#e80b9d' alignItems='center' 
        max-width='100px' >
          <Heading textColor='white' > About </Heading>
          <Box h='100px'></Box>   
            <Box>
              <Heading h='500px' w='900px'
                textAlign='center'
                fontSize='30px'
                textColor='white'
                >
                  Mint Protocol is a decentralized application that generates NFTs 
                  using artificial vision with facial recognition and neural transfer 
                  style based on convolutional neural networks.    
              </Heading>
            </Box>
        </VStack>

        <Divider/>
        <VStack>
        <Box h='50px'></Box>
        </VStack>
        <Heading> Team </Heading>
        <VStack>
        <Box h='50px'></Box>
        </VStack>

   <HStack spacing={20}>
    <Center py={6} className="aumento">
      <Stack 
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '400px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}>
          <Flex flex={1} bg="blue.200">
            <Image 
              objectFit="cover"
              boxSize="100%"
            />
          </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Scarlet Rangel
          </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              @-
            </Text>
              <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
                -
            </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          </Stack>
          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Follow
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>

    <Center py={6} className="aumento">
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '400px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}>
          <Flex flex={1} bg="blue.200">
            <Image 
              objectFit="cover"
              boxSize="100%"
            />
          </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              Adrián Montero
            </Heading>
              <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              @-
              </Text>
                <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}>
                -
              </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          </Stack>
          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Follow
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
    </HStack>

    <VStack>
    <Box h='150px'></Box>
    </VStack>


        </VStack> 
    </Grid> 

  );
}
export default App;
