import React, {MouseEventHandler, MouseEvent , useState,} from 'react';
import { Button as But,Flex, Heading, Box, HStack, CircularProgress, CircularProgressLabel,Tabs, TabList, TabPanels, Tab, TabPanel, VStack, Stack, Spacer,ButtonGroup,Center, ButtonProps, useColorModeValue, Tooltip, background } from '@chakra-ui/react';
import { Portal, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, PopoverAnchor,} from '@chakra-ui/react'
import { ChangeEvent } from 'react';
import { isWhiteSpaceLike } from 'typescript';
import './App.css';






function Claudemonetcollection() {

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
          
          <Center className="aumento" > Claude Monet  </Center>
         
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
              <img width = "100%" height="100%" src={"./style/Claude_monet_collection/autumn-on-the-seine-at-argenteuil-1873.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Autumn on the seine at argenteuil (1873)</Heading></PopoverHeader>
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
              <img width = "100%" height="100%" src={"./style/Claude_monet_collection/camille-with-green-parasol-1876.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Camille with green parasol (1876)</Heading></PopoverHeader>
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
              <img width = "100%" height="100%" src={"./style/Claude_monet_collection/claude-monet-irises-in-monets-garden-1899.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Irises in monets garden (1899)</Heading></PopoverHeader>
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
              <img width = "100%" height="100%" src={"./style/Claude_monet_collection/impression-sunrise-1872.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Impression sunrise (1872)</Heading></PopoverHeader>
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
              <img width = "100%" height="100%" src={"./style/Claude_monet_collection/madame-monet-and-child-1875.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Madame monet and child (1875)</Heading></PopoverHeader>
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
              <img width = "100%"  height="100%" src={"./style/Claude_monet_collection/poplars-at-giverny-1887.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md">Poplars at giverny (1887)</Heading></PopoverHeader>
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
                <img width = "100%" height="100%" src={"./style/Claude_monet_collection/snow-at-argenteuil-1875.jpg"}  ></img>
               </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Snow at argenteuil (1875)</Heading></PopoverHeader>
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
            <img width = "100%" height="100%" src={"./style/Claude_monet_collection/the-boat-studio-1876.jpg"}  ></img>
            </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >The boat studio (1876)</Heading></PopoverHeader>
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
              <img width = "100%" height="100%" src={"./style/Claude_monet_collection/the-shoot-1876.jpg"}  ></img> 
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >The shoot (1876) </Heading></PopoverHeader>
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
              <img width = "100%" height="100%" src={"./style/Claude_monet_collection/waterloo-bridge-london-1903.jpg"}  ></img> 
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Waterloo bridge london (1903) </Heading></PopoverHeader>
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




export {Claudemonetcollection } 