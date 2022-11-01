import React, {MouseEventHandler, MouseEvent , useState,} from 'react';
import { Button as But,Flex, Heading, Box, HStack, CircularProgress, CircularProgressLabel,Tabs, TabList, TabPanels, Tab, TabPanel, VStack, Stack, Spacer,ButtonGroup,Center, ButtonProps, useColorModeValue, Tooltip, background } from '@chakra-ui/react';
import { Portal, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, PopoverAnchor,} from '@chakra-ui/react'
import {Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, 
  useDisclosure
} from '@chakra-ui/react'
import { ChangeEvent } from 'react';
import { isWhiteSpaceLike } from 'typescript';
import './App.css';






function Salvadordalicollection() {
        
        
  ///////////////////////////////SCREEN SECUNDARY

      const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
    
    
            const { isOpen, onOpen, onClose } = useDisclosure()
            const [overlay, setOverlay] = React.useState(<OverlayOne />)
    
            
    
    
             ///PANEL CONTROL
             const [panel ,setMultipanel]= useState(0);
        
             const Multipanel = (state:any) => {
     
                          setMultipanel(state);
                          sendPanelstate();
     
                            };
     
              const Newstatepanel = panel;
     
              const sendPanelstate = async () => {
                 
                       
               const res = await fetch('http://localhost:5000/mainpanel',
               { method : "POST", 
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify(Newstatepanel)})
               const data = await res.json();
                 
               }
    
    ////////////////////////////////////////////////////////////////////////



        ///Multistate fuction
        const [multi, setMulti]= useState(0);
    
        const Multistate = (state:any) => {

                     setMulti(state);
                     sendMultistate();

                       };

         const Newstate = multi;

         const sendMultistate = async () => {
            
                  
          const res = await fetch('http://localhost:5000/Salvadordalicollection',
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
          
          <Center className="aumento" > Salvador Dalí </Center>
         
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
              <img width = "100%" height="100%" src={"./style/Salvador_dali_collection/3salvador-dali-peyzazh-bliz-figerasa-1910.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" > Peyzazh bliz figerasa (1910)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(1);  Multipanel(52); setOverlay(<OverlayOne />);  onOpen();}} type="submit">Add</But>
             <Modal isCentered isOpen={isOpen} onClose={onClose}>
                         {overlay}
                    <ModalContent >
                            <ModalHeader  border='2px' borderColor="#e80b9d"  borderRadius='md'  bg ="#e80b9d"><Heading textColor={"white"} size ="md">Added</Heading></ModalHeader>
                     <ModalCloseButton bg ="white" />
                   </ModalContent>
              </Modal>
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
              <img width = "100%" height="100%" src={"./style/Salvador_dali_collection/boat-1918.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Boat (1918)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(2);  Multipanel(53); setOverlay(<OverlayOne />);  onOpen();}} type="submit">Add</But>
             <Modal isCentered isOpen={isOpen} onClose={onClose}>
                         {overlay}
                    <ModalContent >
                            <ModalHeader  border='2px' borderColor="#e80b9d"  borderRadius='md'  bg ="#e80b9d"><Heading textColor={"white"} size ="md">Added</Heading></ModalHeader>
                     <ModalCloseButton bg ="white" />
                   </ModalContent>
              </Modal>
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
              <img width = "100%" height="100%" src={"./style/Salvador_dali_collection/Dream_for_bee_1944.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Dream for bee (1944)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(3); Multipanel(54); setOverlay(<OverlayOne />);  onOpen();}} type="submit">Add</But>
             <Modal isCentered isOpen={isOpen} onClose={onClose}>
                         {overlay}
                    <ModalContent >
                            <ModalHeader  border='2px' borderColor="#e80b9d"  borderRadius='md'  bg ="#e80b9d"><Heading textColor={"white"} size ="md">Added</Heading></ModalHeader>
                     <ModalCloseButton bg ="white" />
                   </ModalContent>
              </Modal>
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
              <img width = "100%" height="100%" src={"./style/Salvador_dali_collection/landscape-1916.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Landscape (1916)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(4);  Multipanel(55); setOverlay(<OverlayOne />);  onOpen();}} type="submit" >Add</But>
             <Modal isCentered isOpen={isOpen} onClose={onClose}>
                         {overlay}
                    <ModalContent >
                            <ModalHeader  border='2px' borderColor="#e80b9d"  borderRadius='md'  bg ="#e80b9d"><Heading textColor={"white"} size ="md">Added</Heading></ModalHeader>
                     <ModalCloseButton bg ="white" />
                   </ModalContent>
              </Modal>
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
              <img width = "100%" height="100%" src={"./style/Salvador_dali_collection/landscape-near-ampurdan-1914.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Landscape near ampurdan (1914)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(5);  Multipanel(56); setOverlay(<OverlayOne />);  onOpen();}} type="submit">Add</But>
             <Modal isCentered isOpen={isOpen} onClose={onClose}>
                         {overlay}
                    <ModalContent >
                            <ModalHeader  border='2px' borderColor="#e80b9d"  borderRadius='md'  bg ="#e80b9d"><Heading textColor={"white"} size ="md">Added</Heading></ModalHeader>
                     <ModalCloseButton bg ="white" />
                   </ModalContent>
              </Modal>
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
              <img width = "100%"  height="100%" src={"./style/Salvador_dali_collection/llane-beach-cadaques-1919.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md">llane beach cadaques (1919)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(6);  Multipanel(57); setOverlay(<OverlayOne />);  onOpen();}} type="submit">Add</But>
             <Modal isCentered isOpen={isOpen} onClose={onClose}>
                         {overlay}
                    <ModalContent >
                            <ModalHeader  border='2px' borderColor="#e80b9d"  borderRadius='md'  bg ="#e80b9d"><Heading textColor={"white"} size ="md">Added</Heading></ModalHeader>
                     <ModalCloseButton bg ="white" />
                   </ModalContent>
              </Modal>
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
                <img width = "100%" height="100%" src={"./style/Salvador_dali_collection/Persistencia_de_la_memoria.jpg"}  ></img>
               </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >The Persistence of Memory (1931)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(7);  Multipanel(58); setOverlay(<OverlayOne />);  onOpen();}} type="submit">Add</But>
             <Modal isCentered isOpen={isOpen} onClose={onClose}>
                         {overlay}
                    <ModalContent >
                            <ModalHeader  border='2px' borderColor="#e80b9d"  borderRadius='md'  bg ="#e80b9d"><Heading textColor={"white"} size ="md">Added</Heading></ModalHeader>
                     <ModalCloseButton bg ="white" />
                   </ModalContent>
              </Modal>
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
            <img width = "100%" height="100%" src={"./style/Salvador_dali_collection/portdogue-1918.jpg"}  ></img>
            </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Portdogue (1918)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(8);  Multipanel(59); setOverlay(<OverlayOne />);  onOpen();}} type="submit">Add</But>
             <Modal isCentered isOpen={isOpen} onClose={onClose}>
                         {overlay}
                    <ModalContent >
                            <ModalHeader  border='2px' borderColor="#e80b9d"  borderRadius='md'  bg ="#e80b9d"><Heading textColor={"white"} size ="md">Added</Heading></ModalHeader>
                     <ModalCloseButton bg ="white" />
                   </ModalContent>
              </Modal>
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
              <img width = "100%" height="100%" src={"./style/Salvador_dali_collection/the-disintegration-of-the-persistence-of-memory-1952.jpg"}  ></img> 
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >The disintegration of the persistence of memory (1952) </Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(9);  Multipanel(60); setOverlay(<OverlayOne />);  onOpen();}} type="submit">Add</But>
             <Modal isCentered isOpen={isOpen} onClose={onClose}>
                         {overlay}
                    <ModalContent >
                            <ModalHeader  border='2px' borderColor="#e80b9d"  borderRadius='md'  bg ="#e80b9d"><Heading textColor={"white"} size ="md">Added</Heading></ModalHeader>
                     <ModalCloseButton bg ="white" />
                   </ModalContent>
              </Modal>
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
              <img width = "100%" height="100%" src={"./style/Salvador_dali_collection/the-great-masturbator-1929.jpg"}  ></img> 
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >The great masturbator (1929) </Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(10);   Multipanel(61); setOverlay(<OverlayOne />);  onOpen();}} type="submit">Add</But>
             <Modal isCentered isOpen={isOpen} onClose={onClose}>
                         {overlay}
                    <ModalContent >
                            <ModalHeader  border='2px' borderColor="#e80b9d"  borderRadius='md'  bg ="#e80b9d"><Heading textColor={"white"} size ="md">Added</Heading></ModalHeader>
                     <ModalCloseButton bg ="white" />
                   </ModalContent>
              </Modal>
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




export {Salvadordalicollection } 