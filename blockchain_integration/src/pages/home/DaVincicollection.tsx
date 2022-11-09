
import React, { MouseEvent , useState,} from 'react';
import { Button as But,Flex, Heading, Box, HStack, VStack, Center, Portal, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import './App.css';





function Davincicollection() {


   const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )


        const { isOpen, onOpen, onClose } = useDisclosure()
        const [overlay, setOverlay] = React.useState(<OverlayOne />)

        

         const [panel ,setMultipanel]= useState(0);

         const sendPanelstate = async () => {

          const Newstatepanel = panel;
             
                   
          const res = await fetch('http://localhost:5000/mainpanel',
          { method : "POST", 
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(Newstatepanel)})
          const data = await res.json();
            
          }
    
         const Multipanel = (state:any) => {
 
                      setMultipanel(state);
                      sendPanelstate();
 
                        };
 
          
 
          


        const [multi, setMulti]= useState(0);

        const Newstate = multi;

        const sendMultistate = async () => {
            
                  
          const res = await fetch('http://localhost:5000/Davincicollection',
          { method : "POST", 
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(Newstate)})
          const data = await res.json();
            
          }
    
        const Multistate = (state:any) => {

                     setMulti(state);
                     sendMultistate();

                       };

      

         



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
         <Box w="100%" h="50px"/>
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
            <But bg ="white" w="300px" h="300px" type="submit"> 
              <img alt="" width = "100%" height="100%" src="./style/Leonardo_davinci_collection/da-vinci-vitruve-luc-viatour.jpg"/>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Da vinci vitruve luc viatour</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" onClick = {(e)=> {Multistate(1); Multipanel(62); setOverlay(<OverlayOne />);  onOpen();}}  colorScheme='red'>Add</But>
             <Modal isCentered isOpen={isOpen} onClose={onClose}>
                         {overlay}
                    <ModalContent >
                            <ModalHeader  border='2px' borderColor="#e80b9d"  borderRadius='md'  bg ="#e80b9d"><Heading textColor="white" size ="md">Added</Heading></ModalHeader>
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
            <But bg ="white" w="300px" h="300px"   > 
              <img alt="" width = "100%" height="100%" src="./style/Leonardo_davinci_collection/drapery-for-a-seated-1470.jpg"/>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Rapery for a seated (1470)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(2); Multipanel(63); setOverlay(<OverlayOne />);  onOpen();}} type="submit" >Add</But>
             <Modal isCentered isOpen={isOpen} onClose={onClose}>
                         {overlay}
                    <ModalContent >
                            <ModalHeader  border='2px' borderColor="#e80b9d"  borderRadius='md'  bg ="#e80b9d"><Heading textColor="white" size ="md">Added</Heading></ModalHeader>
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

            <But bg ="white" w="300px" h="300px" >
              <img alt="" width = "100%" height="100%" src="./style/Leonardo_davinci_collection/mona-lisa.1503.jpg"/>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Mona lisa (1503)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(3);  Multipanel(64); setOverlay(<OverlayOne />);  onOpen();}} type="submit" >Add</But>
             <Modal isCentered isOpen={isOpen} onClose={onClose}>
                         {overlay}
                    <ModalContent >
                            <ModalHeader  border='2px' borderColor="#e80b9d"  borderRadius='md'  bg ="#e80b9d"><Heading textColor="white" size ="md">Added</Heading></ModalHeader>
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

              <But bg ="white" w="300px" h="300px" > 
              <img alt="" width = "100%" height="100%" src="./style/Leonardo_davinci_collection/profile-of-a-warrior-in-helmet-1472.jpg" />
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Profile of a warrior in helmet (1472)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(4);  Multipanel(65); setOverlay(<OverlayOne />);  onOpen();}}   type="submit" >Add</But>
             <Modal isCentered isOpen={isOpen} onClose={onClose}>
                         {overlay}
                    <ModalContent >
                            <ModalHeader  border='2px' borderColor="#e80b9d"  borderRadius='md'  bg ="#e80b9d"><Heading textColor="white" size ="md">Added</Heading></ModalHeader>
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
            
            <But bg ="white" w="300px" h="300px" > 
              <img alt="" width = "100%" height="100%" src="./style/Leonardo_davinci_collection/study-of-hands-1474.jpg"/>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Study of hands (1474)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(5);  Multipanel(66); setOverlay(<OverlayOne />);  onOpen();}}   type="submit" >Add</But>
             <Modal isCentered isOpen={isOpen} onClose={onClose}>
                         {overlay}
                    <ModalContent >
                            <ModalHeader  border='2px' borderColor="#e80b9d"  borderRadius='md'  bg ="#e80b9d"><Heading textColor="white" size ="md">Added</Heading></ModalHeader>
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
            
            <But  bg ="white" w="300px" h="300px" > 
              <img alt="" width = "100%"  height="100%" src="./style/Leonardo_davinci_collection/the-baptism-of-christ-c-1475.jpg" />
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md">The baptism of christ (1475)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(6);  Multipanel(67); setOverlay(<OverlayOne />);  onOpen();}}  type="submit" >Add</But>
             <Modal isCentered isOpen={isOpen} onClose={onClose}>
                         {overlay}
                    <ModalContent >
                            <ModalHeader  border='2px' borderColor="#e80b9d"  borderRadius='md'  bg ="#e80b9d"><Heading textColor="white" size ="md">Added</Heading></ModalHeader>
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
            
                <But bg ="white" w="300px" h="300px" > 
                <img alt="" width = "100%" height="100%" src="./style/Leonardo_davinci_collection/the-madonna-of-the-carnation-1480.jpg"/>
               </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >The madonna of the carnation (1480)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(7);   Multipanel(68); setOverlay(<OverlayOne />);  onOpen();}} type="submit" >Add</But>
             <Modal isCentered isOpen={isOpen} onClose={onClose}>
                         {overlay}
                    <ModalContent >
                            <ModalHeader  border='2px' borderColor="#e80b9d"  borderRadius='md'  bg ="#e80b9d"><Heading textColor="white" size ="md">Added</Heading></ModalHeader>
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
            
            <But bg ="white" w="300px" h="300px" > 
            <img alt="" width = "100%" height="100%" src="./style/Leonardo_davinci_collection/the-lady-with-the-ermine-cecilia-gallerani-1496.jpg"/>
            </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >The lady with the ermine cecilia gallerani (1496)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(8);   Multipanel(69); setOverlay(<OverlayOne />);  onOpen();}} type="submit" >Add</But>
             <Modal isCentered isOpen={isOpen} onClose={onClose}>
                         {overlay}
                    <ModalContent >
                            <ModalHeader  border='2px' borderColor="#e80b9d"  borderRadius='md'  bg ="#e80b9d"><Heading textColor="white" size ="md">Added</Heading></ModalHeader>
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
            
              <But  bg ="white" w="300px" h="300px" > 
              <img alt="" width = "100%" height="100%" src="./style/Leonardo_davinci_collection/Autorretrato.jpg" /> 
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Self portrait (1513) </Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(9); Multipanel(70); setOverlay(<OverlayOne />);  onOpen();}} type="submit" >Add</But>
             <Modal isCentered isOpen={isOpen} onClose={onClose}>
                         {overlay}
                    <ModalContent >
                            <ModalHeader  border='2px' borderColor="#e80b9d"  borderRadius='md'  bg ="#e80b9d"><Heading textColor="white" size ="md">Added</Heading></ModalHeader>
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
      <VStack bg="red" w="100%" h="500px"/>
      </VStack>
      </div>
      </>
     

    )
  }




export {Davincicollection } 