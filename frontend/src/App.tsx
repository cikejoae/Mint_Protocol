import React from 'react';
import { Grid, HStack, VStack,Flex, Box, Spacer, Breadcrumb, BreadcrumbItem, BreadcrumbLink, 
        Link, Heading, Text, Button, Divider, Stack, Center, Image, useColorModeValue, Container } from '@chakra-ui/react'
import { FaGithub, FaTelegramPlane, FaDiscord,FaLinkedinIn, FaTwitter} from "react-icons/fa"
import './App.css';

function App() {
  return (
    <Grid w='100%' h='100%'>
      <HStack h='100px'>

          <Box p='4' bg='white'>
            <Image src="logoMint.png"
                    boxSize="80%"></Image> 
          </Box>
            <Flex w='600px'></Flex>
              <Breadcrumb spacing='10px'>
                <BreadcrumbItem>
                <a href="#about">About</a>
                </BreadcrumbItem>

                <BreadcrumbItem>
                <a href="#team">Team</a>
                </BreadcrumbItem>

                <BreadcrumbItem>
                <a href="#contact">Contact us</a>
                </BreadcrumbItem>
              </Breadcrumb>
              
      </HStack>

      <VStack w = '100%' h = '700px' backgroundImage={"collage.jpeg"} alignItems='center' 
        max-width='100px'>
        <Box h='200px'></Box>
          <Heading h='100px'
            fontWeight={900}
            fontSize={{ base: '4xl', sm: '8xl', md: '10xl' }}
            textColor='white'>
              Mint Protocol
          </Heading>
            <Box h='50px'></Box>
          <Heading h='100px'
            fontWeight={500}
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            textColor='white'
            className="font">
              You are your own NFT
          </Heading>
      </VStack>
      <VStack  alignItems='center' background = "white"></VStack>

      <Divider/>
      <Box h='100px'></Box>
      <VStack>
      <Box h='100px'></Box>
      <Heading h='200px' w='900px'
                textAlign='center'
                fontSize='30px'
                >
                Create your own NFT collections with the best visual filters and with the style of your favorite artist..    
              </Heading>
              <Button colorScheme='pink' size='md' height='60px'
                      width='200px'
                      borderRadius='30px'
                      >
                <Text fontSize='30px'>Start</Text>
              </Button>
              
              <Box h='100px'></Box>
              
              <Container>
              <div>
              <VStack>
              <div className="carousel_items">
              <HStack  w="100px" h="300px" ></HStack>

              <article className="carousel_img">
          <Box  className="aumento" w="300px" h="300px">
              <img src={"./adan.jpg"}></img> 
          </Box>
          </article>
          
          <HStack>
          <Box w='70px'></Box>
          </HStack>

          <article className="carousel_img">
          <Box className="aumento" w="300px" h="300px">
              <img src={"./Grito.jpg"}></img>
          </Box>
          </article>

          <HStack>
          <Box w='70px'></Box>
          </HStack>

          <article className="carousel_img">
          <Box  className="aumento" w="300px" h="300px">
              <img  src={"./Mona_Lisa.jpg"}></img>
          </Box>
          </article>

          <HStack>
          <Box w='70px'></Box>
          </HStack>

          <article className="carousel_img">
          <Box  className="aumento" w="300px" h="300px">
              <img src={"./StarryNight.jpg"}></img>
          </Box>
          </article>

          <HStack>
          <Box w='70px'></Box>
          </HStack>

          <article className="carousel_img">
          <Box  className="aumento" w="300px" h="300px">
              <img width = "100%" height="100%" src={"./Persistencia_de_la_memoria.jpg"}></img>
          </Box>
          </article>
 
      </div>
      </VStack>
      </div>
      </Container>
        
        <VStack>
          <Box h='40px'></Box>
        </VStack>
        <a id="about"></a> 
        <VStack  w = '100%' h = '800px' background= '#e80b9d' alignItems='center' 
        max-width='100px' >
          <Box h='100px'></Box>
          <Heading textColor='white' > About </Heading>
          <Box h='100px'></Box>   
            <Box>
              <Heading h='400px' w='900px'
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
        <a id="team"></a>
        <Heading> Team </Heading>
        <VStack>
        <Box h='100px'></Box>
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
              @scar.rguez
            </Text>
              <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
                Frontend Developer.
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
            <Heading fontSize={'2xl'} fontFamily={'body'} textAlign="center">
              Adrián Montero
            </Heading>
              <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              @a_mont24
              </Text>
                <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}>
                Computational Physics and Artificial Intelligence.
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
    <Box h='200px'></Box>
    </VStack>
    
    <Divider/>
    <VStack  w = '100%' h = '500px' background= '#e80b9d' alignItems='center' 
            max-width='100px' >
    <VStack>
    <Box h='50px'></Box>
    </VStack>
    <a id="contact"></a>
    <Heading textColor='white'> Contact us </Heading>
    <VStack>
    <Box h='50px'></Box>
    </VStack>
    <Container p="5"></Container>
      <Flex height= "100px" alignItems='center' gap='2'>  
    <Box  px={5} h={20}>
      <FaGithub  color ="white" size = "50px"/>
    </Box>
    <Box px={5} h={20}>
      <FaTelegramPlane color ="white" size = "50px"/>
    </Box>
    <Box px={5} h={20}>
       <FaDiscord  color ="white" size = "50px"/>
    </Box>
    <Box px={5} h={20}>
       <FaLinkedinIn color ="white" size = "50px"/> 
    </Box>
    <Box px={5} h={20}>
      <FaTwitter color ="white" size = "50px"/>
    </Box>
      </Flex>
      </VStack>
        </VStack> 
    
    </Grid> 

  );
}
export default App;
