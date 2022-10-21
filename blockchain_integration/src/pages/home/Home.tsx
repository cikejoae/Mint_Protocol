import React, { useState } from 'react';
import { Button as But,Flex, Heading, Box, HStack, CircularProgress, CircularProgressLabel,Tabs, TabList, TabPanels, Tab, TabPanel, VStack, Stack, Spacer,ButtonGroup,Center, ButtonProps, useColorModeValue, Tooltip } from '@chakra-ui/react';
import { FaRedhat } from "react-icons/fa";
import { useEffect } from 'react';
import { truncate } from 'fs';
import './App.css';


function Home() {

  const [value, setValue] = useState(false);


  const activeInactive_button_gavin = () => {
   
    setValue(prevValue => !prevValue );

    pull_button_gavin();

  };

  const button_signal = value ? 0 : 1


  const pull_button_gavin = async () => {

      
      const res = await fetch('http://localhost:5000/button_gavin',
      { method : "POST", 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(button_signal)})
      const data = await res.json();
  
      }

 

  const activeInactive_button_nose_pork = () => {
   
    setValue(prevValue => !prevValue );

    pull_button_nose_pork();


  };

  const pull_button_nose_pork = async () => {

    
      const res = await fetch('http://localhost:5000/button_nose_pork',
      { method : "POST", 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(button_signal)})
      const data = await res.json();
  
      }


  const activeInactive_button_glasses = () => {
   
        setValue(prevValue => !prevValue );
    
        pull_button_button_glasses();
    
      };
    
  const pull_button_button_glasses = async () => {
    
        
          const res = await fetch('http://localhost:5000/button_glasses',
          { method : "POST", 
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(button_signal)})
          const data = await res.json();
      
          }

  const activeInactive_button_mustache = () => {
   
            setValue(prevValue => !prevValue );
        
            pull_button_button_mustache();
        
          };
        
  const pull_button_button_mustache = async () => {
        
            
              const res = await fetch('http://localhost:5000/button_mustache',
              { method : "POST", 
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(button_signal)})
              const data = await res.json();
          
              }
    


  const activeInactive_button_nose_clown = () => {
   
        setValue(prevValue => !prevValue );
    
        pull_button_nose_clown();
    
      };
    
  const pull_button_nose_clown = async () => {
    
          
          const res = await fetch('http://localhost:5000/button_nose_clown',
          { method : "POST", 
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(button_signal)})
          const data = await res.json();
      
          }

  const activeInactive_button_dot = () => {
   
            setValue(prevValue => !prevValue );
        
            pull_button_dot();
        
          };
        
  const pull_button_dot = async () => {
        
              
            const res = await fetch('http://localhost:5000/button_dot',
            { method : "POST", 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(button_signal)})
            const data = await res.json();
          
            }

  const activeInactive_button_dot_2 = () => {
   
              setValue(prevValue => !prevValue );
          
              pull_button_dot_2();
          
            };
          
  const pull_button_dot_2 = async () => {
          
                
              const res = await fetch('http://localhost:5000/button_dot_2',
              { method : "POST", 
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(button_signal)})
              const data = await res.json();
            
              }

  const activeInactive_button_focus = () => {
   
                setValue(prevValue => !prevValue );
            
                pull_button_focus();
            
              };
            
  const pull_button_focus = async () => {
            
                  
                const res = await fetch('http://localhost:5000/button_focus',
                { method : "POST", 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(button_signal)})
                const data = await res.json();
              
                }


  const activeInactive_button_hat = () => {
   
                  setValue(prevValue => !prevValue );
              
                  pull_button_hat();
              
                };
              
  const pull_button_hat = async () => {
              
                    
                  const res = await fetch('http://localhost:5000/button_hat',
                  { method : "POST", 
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify(button_signal)})
                  const data = await res.json();
                
                  }
  const activeInactive_button_beard = () => {
   
                    setValue(prevValue => !prevValue );
                
                    pull_button_beard();
                
                  };
                
  const pull_button_beard = async () => {
                
                      
                    const res = await fetch('http://localhost:5000/button_beard',
                    { method : "POST", 
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(button_signal)})
                    const data = await res.json();
                  
                    }


  

  const activeInactive_button_capture = () => {
   
            setValue(prevValue => !prevValue );
            
            pull_button_capture();
            
            };
            
  const pull_button_capture = async () => {
            
                  
            const res = await fetch('http://localhost:5000/button_capture',
            { method : "POST", 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(button_signal)})
            const data = await res.json();
              
            }
    
  const get = async () => {
    const res = await fetch('http://localhost:5000/button')
    const data = await res.json();
    console.log(data)
    }
    
    useEffect(() => {
      get();
    },[])



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
      <Box w = "100%" h="50px" >

      <Flex gap="2">
       
      </Flex>
      </Box>


      <Box w = "100%" h="60px" >
          <Center className="aumento" 
           bg='white' h='50px' color='#e80b9d'>
          <h1>Mint Protocol</h1> 
          </Center>
      </Box>
      
      </VStack>
      <HStack>
      <Flex gap="4">
      <Box w="100px" h="100px">
          </Box>    
      <Box w="500px" h="500px">
          <img src={'/video_feed'}/>
          <But  colorScheme= "pink" w="100%" h="50px" bg= "#e80b9d"   type="submit" onClick = {activeInactive_button_capture} >Capture</But>    
      </Box>
      <Spacer />
          
      <VStack w="100px" h="500px" >

       <Box  overflowY="auto" css={{ '&::-webkit-scrollbar': { width: '8px',}, '&::-webkit-scrollbar-track': {width: '12px',},'&::-webkit-scrollbar-thumb': { background: "#e80b9d", borderRadius: '24px', }, }}>
        <Flex gap="1"  direction="column" >
          <Box className="aumento"  w="100px" h="100px">
            <Tooltip label="Nose pig" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px"  onClick = {activeInactive_button_nose_pork}  type="submit" > 
              <img src={"./icons/COCHINO.png"}  ></img>
              </But>
            </Tooltip>
          </Box>
          <Box  className="aumento" w="100px" h="100px">
            <Tooltip label="Nose clown" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px" onClick = {activeInactive_button_nose_clown} type="submit"> 
               <img src={"./icons/CLOWN.png"}  ></img>
              </But>
            </Tooltip>
          </Box>
          <Box  className="aumento" w="100px" h="100px">
            <Tooltip label="Mask Gavin" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px" onClick = {activeInactive_button_gavin}  type="submit">
              <img src={"./icons/GAVIN_NEW.png"}  ></img>
              </But>
            </Tooltip>
          </Box> 
          <Box className="aumento"  w="100px" h="100px">
            <Tooltip label="Polkadot" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px" onClick = {activeInactive_button_dot}  type="submit"> 
              <img src={"./icons/POLKA.png"}  ></img> 
              </But>
            </Tooltip>
          </Box>
          <Box className="aumento" w="100px" h="100px">
            <Tooltip label="Polkadot" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px" onClick = {activeInactive_button_dot_2}  type="submit"> 
              <img src={"./icons/POLKADOT.png"}  ></img> 
              </But>
            </Tooltip>
          </Box>
          <Box className="aumento" w="100px" h="100px">
            <Tooltip label="Mustache" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px" onClick = {activeInactive_button_mustache}  type="submit"> 
              <img src={"./icons/MUSTACHE.png"}  ></img> 
              </But>
            </Tooltip>
          </Box>
          <Box className="aumento" w="100px" h="100px">
            <Tooltip label="Glasses" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px" onClick = {activeInactive_button_glasses}  type="submit"> 
              <img src={"./icons/GLASSES.png"}  ></img> 
              </But>
              </Tooltip>
          </Box>
          <Box  className="aumento" w="100px" h="100px">
            <Tooltip label="Focus" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px" onClick = {activeInactive_button_focus}  type="submit"> 
              <img src={"./icons/FOCUS.png"}  ></img> 
              </But>
            </Tooltip>
          </Box>
          <Box className="aumento" w="100px" h="100px">
            <Tooltip label="Hat" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px" onClick = {activeInactive_button_hat}  type="submit"> 
              <img src={"./icons/HAT.png"}  ></img> 
              </But>
            </Tooltip>
          </Box>
          <Box  className="aumento" w="100px" h="100px">
            <Tooltip label="Beard" aria-label='A tooltip' placement='top-start'>
               <But bg ="white" w="100px" h="100px" onClick = {activeInactive_button_beard}  type="submit"> 
               <img src={"./icons/BEARD.png"}  ></img> 
              </But>
            </Tooltip>
          </Box>
        </Flex>

        </Box> 
    
      </VStack>

      <Spacer />
  
      <Box bg = "pink" w="500px" h="400px">
   
         <img  width="100%" height="100%" src={"./photo.jpg"}  ></img>

      <Box  w="100%" h="50px">
      <But  colorScheme= "pink" w="100%" h="50px" bg= "#e80b9d"  type="submit"> Mint </But>      
      </Box>

    
      </Box>   
      </Flex>
      </HStack>
      <VStack>
          <Center className="aumento"  bg='white' h='50px' color='#e80b9d'>
          <h1>Neural Style Transfer</h1>
          </Center>
      </VStack>

        <VStack>
        <Box w="100%" h="50px">
          
          <Center className="aumento" > Pablo Picasso </Center>
         
         </Box>
         <Box w="100%" h="50px">
         </Box>
        </VStack>
        <div  >
        <VStack  w="100%" h="350px">
        <div className="carousel_items">
          <HStack  w="100%" h="350px" >
          <Flex  gap="2" w="100%" h="350px" >
          
          <article className="carousel_img">
          <Box  className="aumento" w="300px" h="300px">
            <Tooltip  label="Portrait of ambroise vollard (1910)" aria-label='A tooltip'>
              <But  bg ="white" w="300px" h="300px"   type="submit"> 
              <img width = "100%" height="100%" src={"./style/Pablo_picasso_collection/portrait-of-ambroise-vollard-1910.jpg"}  ></img> 
              </But>
              </Tooltip>
          </Box>
          </article>
          <article className="carousel_img">
          <Box className="aumento" w="300px" h="300px">
            <Tooltip label="Old guitarist (1903)" aria-label='A tooltip'>
              <But bg ="white" w="300px" h="300px"  type="submit"> 
              <img width = "100%" height="100%" src={"./style/Pablo_picasso_collection/old-guitarist-chicago-1903.jpg"}  ></img>
              </But>
            </Tooltip>
          </Box>
          </article>
          <article className="carousel_img">
          <Box  className="aumento" w="300px" h="300px">
            <Tooltip label="Mujeres de argel (1955)" aria-label='A tooltip'>
              <But bg ="white" w="300px" h="300px"   type="submit"> 
              <img width = "100%" height="100%" src={"./style/Pablo_picasso_collection/mujeres_de_argel_picasso.jpg"}  ></img>
              </But>
            </Tooltip>
          </Box>
          </article>
          <article className="carousel_img">
          <Box  className="aumento" w="300px" h="300px">
            <Tooltip label="Girl on the ball (1905)" aria-label='A tooltip'>
              <But bg ="white" w="300px" h="300px"  type="submit">
              <img width = "100%" height="100%" src={"./style/Pablo_picasso_collection/girl-on-the-ball-1905.jpg"}  ></img>
              </But>
            </Tooltip>
          </Box>
          </article>
          <article className="carousel_img">
          <Box  className="aumento" w="300px" h="300px">
            <Tooltip label="Portrait of dora maar (1937)" aria-label='A tooltip'>
              <But bg ="white" w="300px" h="300px"   type="submit"> 
              <img width = "100%" height="100%" src={"./style/Pablo_picasso_collection/portrait-of-dora-maar-1937.jpg"}  ></img>
              </But>
            </Tooltip>
          </Box>
          </article>
          <article className="carousel_img">
          <Box  className="aumento" w="300px" h="300px">
            <Tooltip label="Figures at the seaside (1931)" aria-label='A tooltip'>
              <But bg ="white" w="300px" h="300px"   type="submit"> 
              <img width = "100%" height="100%" src={"./style/Pablo_picasso_collection/figures-at-the-seaside-1931.jpg"}  ></img>
              </But>
            </Tooltip>
          </Box>
          </article>
          <article className="carousel_img">
          <Box className="aumento" w="300px" h="300px">
            <Tooltip label="Child with dove (1901)" aria-label='A tooltip'>
              <But bg ="white" w="300px" h="300px"   type="submit"> 
              <img width = "100%"  height="100%" src={"./style/Pablo_picasso_collection/child-with-dove-1901.jpg"}  ></img>
              </But>
            </Tooltip>
          </Box>
          </article>
          <article className="carousel_img">
          <Box  className="aumento" w="300px" h="300px">
            <Tooltip label="Cat catching a bird (1939)" aria-label='A tooltip'>
              <But bg ="white" w="300px" h="300px"  type="submit"> 
              <img width = "100%" height="100%" src={"./style/Pablo_picasso_collection/cat-catching-a-bird-1939.jpg"}  ></img>
               </But>
            </Tooltip>
          </Box>
          </article>
          <article className="carousel_img">
          <Box  className="aumento" w="300px" h="300px">
            <Tooltip label="Portrait of woman in Dhermine pass (1937)" aria-label='A tooltip'>
              <But bg ="white" w="300px" h="300px"  type="submit"> 
              <img width = "100%" height="100%" src={"./style/Pablo_picasso_collection/Portrait-of-woman-in dhermine-pass-1937.jpg"}  ></img>
               </But>
            </Tooltip>
          </Box>   
          </article>
          <article className="carousel_img">
          <Box  className="aumento" w="300px" h="300px">
            <Tooltip label="The girls of avignon (1907)" aria-label='A tooltip'>
              <But bg ="white" w="300px" h="300px"  type="submit"> 
              <img width = "100%" height="100%" src={"./style/Pablo_picasso_collection/the-girls-of-avignon-1907.jpg"}  ></img>
               </But>
            </Tooltip>
          </Box>
          </article>
           
          </Flex>
      </HStack>
      </div> 
      <VStack bg="red" w="100%" h="500px">

      </VStack>
      </VStack>
      </div>
      
              

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


