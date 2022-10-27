
import React, {MouseEventHandler, MouseEvent , useState,} from 'react';
import { Button as But,Flex, Heading, Box, HStack, CircularProgress, CircularProgressLabel,Tabs, TabList, TabPanels, Tab, TabPanel, VStack, Stack, Spacer,ButtonGroup,Center, ButtonProps, useColorModeValue, Tooltip, background } from '@chakra-ui/react';
import { Portal, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, PopoverAnchor,} from '@chakra-ui/react'
import { ChangeEvent } from 'react';
import { isWhiteSpaceLike } from 'typescript';
import './App.css';






function Davincicollection() {

        ///Multistate fuction
        const [multi, setMulti]= useState(0);
    
        const Multistate = (state:any) => {

                     setMulti(state);
                      let Newstate = multi;

                       };

         const Newstate = multi;

         const sendMultistate = async () => {
            
                  
          const res = await fetch('http://localhost:5000/Davincicollection',
          { method : "POST", 
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(Newstate)})
          const data = await res.json();
            
          }

         ///Carusel fuctions


         const [className, setclassName]= useState('carousel_slow');

         const fixedcarrusel = (event: MouseEvent<HTMLDivElement>) =>{
          if (event){
            setclassName("carousel_fixed");
          }
         }

         const movecarrusel = (event: MouseEvent<HTMLDivElement>) =>{
          if (event){
            setclassName("carousel_items2");
          }
         }

         const slowcarrusel = (event: MouseEvent<HTMLDivElement>) =>{
          if (event){
            setclassName("carousel_slow");
          }
         }



         
 
              
    
    return (
        <>
        <VStack w="100%">
        <Box w="100%" h="50px">
          
          <Center className="aumento" > Leonardo da Vinci </Center>
         
         </Box>
         <Box w="100%" h="50px">
         </Box>
        </VStack>
        <div >
        <VStack  w="100%" h="350px">
        <div id="01"  onMouseOver = {slowcarrusel} className={className} onMouseOut={slowcarrusel}>
          <HStack  w="100%" h="350px" >
          <Flex  gap="2" w="100%" h="350px" >
          
          <article className="carousel_img">
          <Box  className="aumento" w="300px" h="300px">

          <Popover>
            <PopoverTrigger>
            <But bg ="white" w="300px" h="300px"  type="submit"> 
              <img width = "100%" height="100%" src={"./style/Leonardo_davinci_collection/da-vinci-vitruve-luc-viatour.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Da vinci vitruve luc viatour</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red'>Add</But>
              </PopoverBody>
             </PopoverContent>
              </Portal>
              </Popover>
            
             
        
          </Box>
          </article>
          <article className="carousel_img">
          <Box  className="aumento" w="300px" h="300px">

          <Popover>
            <PopoverTrigger>
            <But bg ="white" w="300px" h="300px"   type="submit"> 
              <img width = "100%" height="100%" src={"./style/Leonardo_davinci_collection/drapery-for-a-seated-1470.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Rapery for a seated (1470)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red'>Add</But>
              </PopoverBody>
             </PopoverContent>
              </Portal>
              </Popover>
            
            
          </Box>
          </article>
          <article className="carousel_img">
          <Box  className="aumento" w="300px" h="300px">

          <Popover>
            <PopoverTrigger>

            <But bg ="white" w="300px" h="300px"  type="submit">
              <img width = "100%" height="100%" src={"./style/Leonardo_davinci_collection/mona-lisa.1503.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Mona lisa (1503)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red'>Add</But>
              </PopoverBody>
             </PopoverContent>
              </Portal>
              </Popover>
            
              
            
          </Box>
          </article>
          <article className="carousel_img">
          <Box  className="aumento" w="300px" h="300px">

             <Popover>
            <PopoverTrigger>

              <But bg ="white" w="300px" h="300px"   type="submit"> 
              <img width = "100%" height="100%" src={"./style/Leonardo_davinci_collection/profile-of-a-warrior-in-helmet-1472.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Profile of a warrior in helmet (1472)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red'>Add</But>
              </PopoverBody>
             </PopoverContent>
              </Portal>
              </Popover>
            
             
            
          </Box>
          </article>
          <article className="carousel_img">
          <Box  className="aumento" w="300px" h="300px">

          <Popover>
            <PopoverTrigger>
            
            <But bg ="white" w="300px" h="300px"   type="submit"> 
              <img width = "100%" height="100%" src={"./style/Leonardo_davinci_collection/study-of-hands-1474.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Study of hands (1474)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red'>Add</But>
              </PopoverBody>
             </PopoverContent>
              </Portal>
              </Popover>
            
              
            
          </Box>
          </article>
          <article className="carousel_img">
          <Box  className="aumento" w="300px" h="300px">

          <Popover>
            <PopoverTrigger>
            
            <But  bg ="white" w="300px" h="300px"   type="submit"> 
              <img width = "100%"  height="100%" src={"./style/Leonardo_davinci_collection/the-baptism-of-christ-c-1475.png"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md">The baptism of christ (1475)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red'>Add</But>
              </PopoverBody>
             </PopoverContent>
              </Portal>
              </Popover>
           
          
            
          </Box>
          </article>
          <article className="carousel_img">
          <Box  className="aumento" w="300px" h="300px">

          <Popover>
            <PopoverTrigger>
            
                <But bg ="white" w="300px" h="300px"  type="submit"> 
                <img width = "100%" height="100%" src={"./style/Leonardo_davinci_collection/the-madonna-of-the-carnation-1480.jpg"}  ></img>
               </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >The madonna of the carnation (1480)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red'>Add</But>
              </PopoverBody>
             </PopoverContent>
              </Portal>
              </Popover>
            
           
              
            
          </Box>
          </article>
          <article className="carousel_img">
          <Box  className="aumento" w="300px" h="300px">

          <Popover>
            <PopoverTrigger>
            
            <But bg ="white" w="300px" h="300px"  type="submit"> 
            <img width = "100%" height="100%" src={"./style/Leonardo_davinci_collection/the-lady-with-the-ermine-cecilia-gallerani-1496.jpg"}  ></img>
            </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >The lady with the ermine cecilia gallerani (1496)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red'>Add</But>
              </PopoverBody>
             </PopoverContent>
              </Portal>
              </Popover>
            
           
          </Box>   
          </article>
          <article className="carousel_img">
          <Box  className="aumento" w="300px" h="300px">
            
            <Popover>
            <PopoverTrigger>
            
              <But  bg ="white" w="300px" h="300px"   type="submit"> 
              <img width = "100%" height="100%" src={"./style/Leonardo_davinci_collection/Autorretrato.jpg"}  ></img> 
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Autorretrato </Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red'>Add</But>
              </PopoverBody>
             </PopoverContent>
              </Portal>
              </Popover>
          
          </Box>
          </article>
           
          </Flex>
      </HStack>
      </div> 
      <VStack bg="red" w="100%" h="500px">

      </VStack>
      </VStack>
      </div>
      </>
     

    )
  }




export {Davincicollection } 