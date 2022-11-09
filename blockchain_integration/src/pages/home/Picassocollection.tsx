import React, { MouseEvent , useState,} from 'react';
import { Button as But,Flex, Heading, Box, HStack, VStack, Center, Portal, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import './App.css';






function Picassocollection() {


  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )


        const { isOpen, onOpen, onClose } = useDisclosure()
        const [overlay, setOverlay] = React.useState(<OverlayOne />)


          const [panel ,setMultipanel]= useState(0);

          const Newstatepanel = panel;


          const sendPanelstate = async () => {
              
                    
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
            
                  
          const res = await fetch('http://localhost:5000/Picassocollection',
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
          
          <Center className="aumento" > Pablo Picasso </Center>
         
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
            <But bg ="white" w="300px" h="300px"  type="submit"> 
              <img alt="" width = "100%" height="100%" src="./style/Pablo_picasso_collection/cat-catching-a-bird-1939.jpg"/>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Cat catching a bird (1939)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(1); Multipanel(11); setOverlay(<OverlayOne />);  onOpen(); }} type="submit">Add</But>
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
            <But bg ="white" w="300px" h="300px"   type="submit"> 
              <img alt="" width = "100%" height="100%" src="./style/Pablo_picasso_collection/child-with-dove-1901.jpg"/>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Child with dove (1901) </Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(2); Multipanel(12); setOverlay(<OverlayOne />);  onOpen(); }} type="submit">Add</But>
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

            <But bg ="white" w="300px" h="300px"  type="submit">
              <img alt="" width = "100%" height="100%" src="./style/Pablo_picasso_collection/figures-at-the-seaside-1931.jpg"/>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Figures at the seaside (1931)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(3); Multipanel(13); setOverlay(<OverlayOne />);  onOpen(); }} type="submit" >Add</But>
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

              <But bg ="white" w="300px" h="300px"   type="submit"> 
              <img alt="" width = "100%" height="100%" src="./style/Pablo_picasso_collection/girl-on-the-ball-1905.jpg"/>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Girl on the ball (1905)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(4); Multipanel(14); setOverlay(<OverlayOne />);  onOpen();}} type="submit" >Add</But>
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
            
            <But bg ="white" w="300px" h="300px"   type="submit"> 
              <img alt="" width = "100%" height="100%" src="./style/Pablo_picasso_collection/mujeres_de_argel_picasso.jpg"/>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >The Women of Alger (1834) </Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(5);  Multipanel(15); setOverlay(<OverlayOne />);  onOpen();}} type="submit" >Add</But>
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
            
            <But  bg ="white" w="300px" h="300px"   type="submit"> 
              <img alt="" width = "100%"  height="100%" src="./style/Pablo_picasso_collection/old-guitarist-chicago-1903.jpg"/>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md">Old guitarist (1903)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(6); Multipanel(16); setOverlay(<OverlayOne />);  onOpen();}} type="submit">Add</But>
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
            
                <But bg ="white" w="300px" h="300px"  type="submit"> 
                <img alt="" width = "100%" height="100%" src="./style/Pablo_picasso_collection/portrait-of-ambroise-vollard-1910.jpg"/>
               </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Portrait of ambroise vollard (1910)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(7); Multipanel(17); setOverlay(<OverlayOne />);  onOpen();}} type="submit">Add</But>
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
            
            <But bg ="white" w="300px" h="300px"  type="submit"> 
            <img alt="" width = "100%" height="100%" src="./style/Pablo_picasso_collection/portrait-of-dora-maar-1937.jpg"/>
            </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Portrait of dora maar (1937)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(8);  Multipanel(18); setOverlay(<OverlayOne />);  onOpen();}} type="submit" >Add</But>
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
            
              <But  bg ="white" w="300px" h="300px"   type="submit"> 
              <img alt="" width = "100%" height="100%" src="./style/Pablo_picasso_collection/Portrait-of-woman-in-dhermine-pass-1937.jpg"/> 
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Portrait of woman in dhermine pass (1937) </Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(9);  Multipanel(19); setOverlay(<OverlayOne />);  onOpen();}} type="submit">Add</But>
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
            
              <But  bg ="white" w="300px" h="300px"   type="submit"> 
              <img alt="" width = "100%" height="100%" src="./style/Pablo_picasso_collection/the-girls-of-avignon-1907.jpg"/> 
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >The girls of avignon (1907) </Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(10);  Multipanel(20); setOverlay(<OverlayOne />);  onOpen();}} type="submit" >Add</But>
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




export {Picassocollection } 