import { Button as But,Flex, Heading, Box, HStack, CircularProgress, CircularProgressLabel,Tabs, TabList, TabPanels, Tab, TabPanel, VStack, Stack, Spacer,ButtonGroup,Center, ButtonProps, useColorModeValue, Tooltip } from '@chakra-ui/react';


function Picassocollection() {
    
    return (
        <>
        <VStack w="100%">
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
      
      <VStack>        
        <Box w="100%" h="50px">
      
         
         </Box>
         <Box w="100%" h="50px">
         </Box>
        </VStack>
    
      
      
      </VStack>
      </div>
      </>
     

    )
  }




export {Picassocollection } 