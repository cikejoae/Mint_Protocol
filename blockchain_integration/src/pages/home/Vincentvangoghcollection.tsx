import React, { MouseEvent , useState,} from 'react';
import { Button as But,Flex, Heading, Box, HStack, VStack, Center, Portal, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import './App.css';





function Vincentvangoghcollection() {

 

      const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )


        const { isOpen, onOpen, onClose } = useDisclosure()
        const [overlay, setOverlay] = React.useState(<OverlayOne />)

        
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


        const [multi, setMulti]= useState(0);
    
        const Multistate = (state:any) => {

                     setMulti(state);
                     sendMultistate();

                       };

         const Newstate = multi;

         const sendMultistate = async () => {
            
                  
          const res = await fetch('http://localhost:5000/Vincentvangoghcollection',
          { method : "POST", 
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(Newstate)})
          const data = await res.json();
            
          }


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
          
          <Center className="aumento" > Vincent van gogh </Center>
          
         
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
              <img width = "100%" height="100%" src="./style/Vincent_van_gogh_collection/Irises-1889.jpg"/>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Irises (1889)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(1); Multipanel(1); setOverlay(<OverlayOne />);  onOpen(); }} type="submit"  >Add</But>
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
              <img width = "100%" height="100%" src="./style/Vincent_van_gogh_collection/landscape-with-house-and-ploughman-1889.jpg"/>
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Landscape with house and ploughman (1889)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(2); Multipanel(2); setOverlay(<OverlayOne />);  onOpen();}} type="submit" >Add</But>
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
              <img width = "100%" height="100%" src="./style/Vincent_van_gogh_collection/paul-gauguin-s-armchair-1888.jpg" />
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Paul gauguins armchair (1888)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(3); Multipanel(3); setOverlay(<OverlayOne />);  onOpen();}} type="submit"  >Add</But>
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
              <img width = "100%" height="100%" src="./style/Vincent_van_gogh_collection/prisoners-exercising-prisoners-round-1890.jpg" />
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Prisoners exercising prisoners round (1890)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {()=> {Multistate(4); Multipanel(4); setOverlay(<OverlayOne />);  onOpen();}}  type="submit" >Add</But>
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
              <img width = "100%" height="100%" src="./style/Vincent_van_gogh_collection/red-vineyards-at-arles-1888.jpg" />
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Red vineyards at arles (1888)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(5); Multipanel(5); setOverlay(<OverlayOne />);  onOpen();}} type="submit" >Add</But>
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
              <img width = "100%"  height="100%" src="./style/Vincent_van_gogh_collection/self-portrait-1887.jpg" />
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md">Self portrait (1887)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(6); Multipanel(6); setOverlay(<OverlayOne />);  onOpen(); }} type="submit">Add</But>
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
                <img width = "100%" height="100%" src="./style/Vincent_van_gogh_collection/self-portrait-with-bandaged-ear-1889.jpg"/>
               </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Self portrait with bandaged ear (1889)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(7); Multipanel(7); setOverlay(<OverlayOne />);  onOpen();}} type="submit" >Add</But>
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
            <img width = "100%" height="100%" src="./style/Vincent_van_gogh_collection/StarryNight.jpg"/>
            </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >StarryNight (1889)</Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(8); Multipanel(8); setOverlay(<OverlayOne />);  onOpen();}} type="submit">Add</But>
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
              <img width = "100%" height="100%" src="./style/Vincent_van_gogh_collection/still-life-vase-with-fifteen-sunflowers-1888.jpg" /> 
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Still life vase with fifteen sunflowers (1888) </Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(9); Multipanel(9); setOverlay(<OverlayOne />);  onOpen();}} type="submit" >Add</But>
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
              <img width = "100%" height="100%" src="./style/Vincent_van_gogh_collection/wheatfield-with-crows-1890.jpg"/> 
              </But>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader><Heading size = "md" >Heatfield with crows (1890) </Heading></PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
             <But w="20px" h="40px" colorScheme='red' onClick = {(e)=> {Multistate(10); Multipanel(10); setOverlay(<OverlayOne />);  onOpen();}} type="submit" >Add</But>
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




export {Vincentvangoghcollection } 