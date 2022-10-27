import React, {MouseEventHandler, MouseEvent , useState,} from 'react';
import { Button as But,Flex, Heading, Box, HStack, CircularProgress, CircularProgressLabel,Tabs, TabList, TabPanels, Tab, TabPanel, VStack, Stack, Spacer,ButtonGroup,Center, ButtonProps, useColorModeValue, Tooltip, background } from '@chakra-ui/react';
import { Portal, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, PopoverAnchor,} from '@chakra-ui/react'
import { ChangeEvent } from 'react';
import { isWhiteSpaceLike } from 'typescript';
import './App.css';






function Rembrandcollection() {

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
          
          <Center className="aumento" > Rembrand </Center>
         
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
              <img width = "100%" height="100%" src={"./style/Rembrandt_collection/beggar-man-and-woman-1628.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Beggar man and woman (1628)</Heading></PopoverHeader>
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
              <img width = "100%" height="100%" src={"./style/Rembrandt_collection/beggar-man-and-woman-behind-a-bank-1630.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Beggar man and woman behind a bank (1630)</Heading></PopoverHeader>
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
              <img width = "100%" height="100%" src={"./style/Rembrandt_collection/old-man-in-a-long-cloak-sitting-in-an-armchair-1630.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Old man in a long cloak sitting in an armchair (1630)</Heading></PopoverHeader>
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
              <img width = "100%" height="100%" src={"./style/Rembrandt_collection/seated-old-man-1630.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Seated old man (1630)</Heading></PopoverHeader>
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
              <img width = "100%" height="100%" src={"./style/Rembrandt_collection/self-portrait-1630.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Self portrait (1630)</Heading></PopoverHeader>
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
              <img width = "100%"  height="100%" src={"./style/Rembrandt_collection/self-portrait-leaning-forward-listening-1628.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md">Self portrait leaning forward listening (1628)</Heading></PopoverHeader>
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
                <img width = "100%" height="100%" src={"./style/Rembrandt_collection/st-jerome-kneeling-1630.jpg"}  ></img>
               </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >St jerome kneeling (1630)</Heading></PopoverHeader>
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
            <img width = "100%" height="100%" src={"./style/Rembrandt_collection/st-paul-in-meditation-1629.jpg"}  ></img>
            </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >St Paul in meditation (1629)</Heading></PopoverHeader>
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
              <img width = "100%" height="100%" src={"./style/Rembrandt_collection/the-flight-into-egypt-a-sketch-1627.jpg"}  ></img> 
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >The flight into Egypt a sketch (1627) </Heading></PopoverHeader>
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
              <img width = "100%" height="100%" src={"./style/Rembrandt_collection/widebrim-1632.jpg"}  ></img> 
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Widebrim (1632) </Heading></PopoverHeader>
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




export {Rembrandcollection } 