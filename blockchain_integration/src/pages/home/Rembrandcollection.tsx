import React, {MouseEventHandler, MouseEvent , useState,} from 'react';
import { Button as But,Flex, Heading, Box, HStack, CircularProgress, CircularProgressLabel,Tabs, TabList, TabPanels, Tab, TabPanel, VStack, Stack, Spacer,ButtonGroup,Center, ButtonProps, useColorModeValue, Tooltip, background } from '@chakra-ui/react';
import { Portal, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, PopoverAnchor,} from '@chakra-ui/react'
import { ChangeEvent } from 'react';
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
import { isWhiteSpaceLike } from 'typescript';
import './App.css';






function Rembrandcollection() {

  

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
            
                  
          const res = await fetch('http://localhost:5000/Rembrandcollection',
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
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(1); Multipanel(71); setOverlay(<OverlayOne />);  onOpen(); }} type="submit" >Add</But>
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
              <img width = "100%" height="100%" src={"./style/Rembrandt_collection/beggar-man-and-woman-behind-a-bank-1630.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Beggar man and woman behind a bank (1630)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(2);  Multipanel(72); setOverlay(<OverlayOne />);  onOpen(); }} type="submit">Add</But>
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
              <img width = "100%" height="100%" src={"./style/Rembrandt_collection/old-man-in-a-long-cloak-sitting-in-an-armchair-1630.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Old man in a long cloak sitting in an armchair (1630)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(3);  Multipanel(73); setOverlay(<OverlayOne />);  onOpen();}} type="submit">Add</But>
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
              <img width = "100%" height="100%" src={"./style/Rembrandt_collection/seated-old-man-1630.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Seated old man (1630)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(4);  Multipanel(74); setOverlay(<OverlayOne />);  onOpen();}} type="submit">Add</But>
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
              <img width = "100%" height="100%" src={"./style/Rembrandt_collection/self-portrait-1630.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Self portrait (1630)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(5);  Multipanel(75); setOverlay(<OverlayOne />);  onOpen();}} type="submit">Add</But>
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
              <img width = "100%"  height="100%" src={"./style/Rembrandt_collection/self-portrait-leaning-forward-listening-1628.jpg"}  ></img>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md">Self portrait leaning forward listening (1628)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(6);  Multipanel(76); setOverlay(<OverlayOne />);  onOpen();}} type="submit">Add</But>
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
                <img width = "100%" height="100%" src={"./style/Rembrandt_collection/st-jerome-kneeling-1630.jpg"}  ></img>
               </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >St jerome kneeling (1630)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(7);  Multipanel(77); setOverlay(<OverlayOne />);  onOpen();}} type="submit">Add</But>
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
            <img width = "100%" height="100%" src={"./style/Rembrandt_collection/st-paul-in-meditation-1629.jpg"}  ></img>
            </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >St Paul in meditation (1629)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(8); Multipanel(78); setOverlay(<OverlayOne />);  onOpen();}} type="submit">Add</But>
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
              <img width = "100%" height="100%" src={"./style/Rembrandt_collection/the-flight-into-egypt-a-sketch-1627.jpg"}  ></img> 
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >The flight into Egypt a sketch (1627) </Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(9); Multipanel(79); setOverlay(<OverlayOne />);  onOpen();}} type="submit">Add</But>
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
              <img width = "100%" height="100%" src={"./style/Rembrandt_collection/widebrim-1632.jpg"}  ></img> 
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Widebrim (1632) </Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(10); Multipanel(80); setOverlay(<OverlayOne />);  onOpen();}} type="submit">Add</But>
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




export {Rembrandcollection } 