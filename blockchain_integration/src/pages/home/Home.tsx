import React, {MouseEventHandler, MouseEvent , useState,} from 'react';
import { Button as But,Flex, Heading, Box, HStack, CircularProgress, CircularProgressLabel,Tabs, TabList, TabPanels, Tab, TabPanel, VStack, Stack, Spacer,ButtonGroup,Center, ButtonProps, useColorModeValue, Tooltip } from '@chakra-ui/react';
import { Portal, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, PopoverAnchor,} from '@chakra-ui/react';
import { FaRedhat } from "react-icons/fa";
import { useEffect } from 'react';
import { truncate } from 'fs';
import './App.css';
import { Davincicollection } from './DaVincicollection';
import { Picassocollection} from './Picassocollection';
import {Vincentvangoghcollection} from './Vincentvangoghcollection';
import {Salvadordalicollection} from './Salvadordalicollection';
import {Claudemonetcollection} from  './Claudemonetcollection';
import {Edvardmunchcollection} from './Edvardmunchcollection';
import {Renoircollection} from './Renoircollection';
import {Form} from  './form';
import { Filters } from './Filters';
import { render } from '@testing-library/react';




function Home() {
  const [multi2, setMulti2]= useState(0);
    
  const Multistate2 = (state:any) => {

     setMulti2(state);
     const Newstate2 = multi2;

    
   };

   const Newstate2 = multi2;

   
   function resultado_p2 () {if ( statepanel_1 != 1 ){return(<img src={"./icons/VACIO.png"}  ></img>)}
                else if (Newstate2 == 1 ) {return(<img src={"./icons/COCHINO.png"}  ></img>)}
                else if (Newstate2 == 2 ){return(<img src={"./icons/CLOWN.png"}  ></img>)}
                else if (Newstate2 == 3 ){return(<img src={"./icons/GAVIN_NEW.png"}  ></img>)}
                else if (Newstate2 == 4 ){return(<img src={"./icons/POLKA.png"}  ></img>)}
                else if (Newstate2 == 5 ){return(<img src={"./icons/POLKADOT.png"}  ></img>)}
                else if (Newstate2 == 6 ){return(<img src={"./icons/MUSTACHE.png"}  ></img>)}
                else if (Newstate2 == 7 ){return(<img src={"./icons/GLASSES.png"}  ></img>)}
                else if (Newstate2 == 8 ){return(<img src={"./icons/FOCUS.png"}  ></img>)}
                else if (Newstate2 == 9 ){return(<img src={"./icons/HAT.png"}  ></img>)}
                else if (Newstate2 == 10 ){return(<img src={"./icons/BEARD.png"}  ></img>)}
                  }
 





  const [multi, setMulti]= useState(0);
    
  const Multistate = (state:any) => {

     setMulti(state);
     let Newstate = multi;

     

   };

   let Newstate = multi;
   let statepanel_1 = 0;
   if (Newstate > 0) { let statepanel_1 = 1;}
   function resultado_p () {if (Newstate == 0){return(<img src={"./icons/VACIO.png"}  ></img>)}
   else if (Newstate == 1 ) {return(<img src={"./icons/COCHINO.png"}  ></img>)}
   else if (Newstate == 2 ){return(<img src={"./icons/CLOWN.png"}  ></img>)}
   else if (Newstate == 3 ){return(<img src={"./icons/GAVIN_NEW.png"}  ></img>)}
   else if (Newstate == 4 ){return(<img src={"./icons/POLKA.png"}  ></img>)}
   else if (Newstate == 5 ){return(<img src={"./icons/POLKADOT.png"}  ></img>)}
   else if (Newstate == 6 ){return(<img src={"./icons/MUSTACHE.png"}  ></img>)}
   else if (Newstate == 7 ){return(<img src={"./icons/GLASSES.png"}  ></img>)}
   else if (Newstate == 8 ){return(<img src={"./icons/FOCUS.png"}  ></img>)}
   else if (Newstate == 9 ){return(<img src={"./icons/HAT.png"}  ></img>)}
   else if (Newstate == 10 ){return(<img src={"./icons/BEARD.png"}  ></img>)}
   
 }


 //////STATES PANEL

 const [beard, setBeard]= useState(false);
    
 const beardbutton = () => {

  setBeard(prevValue => !prevValue );
   

  };

  const beardbut = beard ? 0 : 1

  function beardPanel () {if (beardbut == 0 ){return(<img src={"./icons/BEARD.png"}  ></img>)};}



 const [hat, setHat]= useState(false);
    
 const hatbutton = () => {

  setHat(prevValue => !prevValue );
   

  };

  const hatbut = hat ? 0 : 1

  function hatPanel () {if (hatbut == 0 ){return(<img src={"./icons/HAT.png"}  ></img>)};}






 const [focus, setFocus]= useState(false);
    
 const focusbutton = () => {

  setFocus(prevValue => !prevValue );
   

  };

  const focusbut = focus ? 0 : 1

  function focusPanel () {if (focusbut == 0 ){return(<img src={"./icons/FOCUS.png"}  ></img>)};}




 const [glasses, setGlasses]= useState(false);
    
 const glassesbutton = () => {

  setGlasses(prevValue => !prevValue );
   

  };

  const glassesbut = glasses ? 0 : 1

  function glassesPanel () {if (glassesbut == 0 ){return(<img src={"./icons/GLASSES.png"}  ></img>)};}




 const [mustache, setMustache]= useState(false);
    
 const mustachebutton = () => {

  setMustache(prevValue => !prevValue );
   

  };

  const mustachebut = mustache ? 0 : 1

  function mustachePanel () {if (mustachebut == 0  ){return(<img src={"./icons/MUSTACHE.png"}  ></img>)};}






 const [polkadot, setPolkadot]= useState(false);
    
 const polkadotbutton = () => {

  setPolkadot(prevValue => !prevValue );
   

  };

  const polkadotbut = polkadot ? 0 : 1

  function polkadotPanel () {if (polkadotbut == 0 ){return(<img src={"./icons/POLKADOT.png"}  ></img>)};}




 const [polka, setPolka]= useState(false);
    
 const polkabutton = () => {

  setPolka(prevValue => !prevValue );
   

  };

  const polkabut = polka ? 0 : 1

  function polkaPanel () {if (polkabut == 0  ){return(<img src={"./icons/POLKA.png"}  ></img>)};}


 const [gavin, setGavin]= useState(false);
    
 const gavinbutton = () => {

  setGavin(prevValue => !prevValue );
   

  };

  const gavinbut = gavin ? 0 : 1

  function gavinPanel () {if (gavinbut == 0 ){return(<img src={"./icons/GAVIN_NEW.png"}  ></img>)};}

   



  const [pig, setPig]= useState(false);
    
    const pigbutton = () => {
  
       setPig(prevValue => !prevValue );
      
   
     };
   
     const pigbut = pig ? 0 : 1

     function pigPanel () {if (pigbut == 0 ){return(<img src={"./icons/COCHINO.png"}  ></img>)};}
  
  const [clown, setClown]= useState(false);
    
  const clownbutton = () => {
   
    setClown(prevValue => !prevValue );
       
    
      };
    
      const clownbut = clown ? 0 : 1
 
      function clownPanel () {if (clownbut == 0){return(<img src={"./icons/CLOWN.png"}  ></img>)};}

    
      

   
///////////////////////////////////////////////////////////////////////////////////////////////////////////
 

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
      body: JSON.stringify(gavinbut)})
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
      body: JSON.stringify(pigbut)})
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
          body: JSON.stringify(glassesbut)})
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
              body: JSON.stringify(mustachebut)})
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
          body: JSON.stringify(clownbut)})
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
            body: JSON.stringify(polkabut)})
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
              body: JSON.stringify(polkadotbut)})
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
                body: JSON.stringify(focusbut)})
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
                  body: JSON.stringify(hatbut)})
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
                    body: JSON.stringify(beardbut)})
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
      <Box w = "100%" h="20px" >

      <Flex gap="2">
       
      </Flex>
      </Box>


      <Box w = "100%" h="30px" >
          <Center className="aumento" 
           bg='white' h='30px' color='#e80b9d'>
          <h1>Mint Protocol</h1> 
          </Center>
      </Box>
      </VStack>
      <HStack>
      <Flex gap="3">
      <Spacer />
      <Box  w="100" h="100px">    
      </Box>
      <Box className="aumento"  w="400px" h="400px">
          <img src={'/video_feed'}/>
          <But  colorScheme= "pink" w="100%" h="50px" bg= "#e80b9d"   type="submit" onClick = {activeInactive_button_capture } >Capture</But>    
      </Box>
      <Spacer />
          
      <VStack w="500px" h="300px" >

      <Heading size="md">Filters</Heading>
        <HStack>
        <Flex gap="2">
        <Box  border='2px' borderColor="white" borderRadius='md' bg="white" w="80px" h="80px">
         <HStack>
          {pigPanel () } {clownPanel ()} {gavinPanel ()} {polkaPanel ()} {polkadotPanel()} {mustachePanel()}{glassesPanel()}{focusPanel()} {hatPanel()}{beardPanel()}
 
         </HStack>
        </Box>
        <Box w="300px" h="40px"></Box>
        
        </Flex>
        </HStack>
        <Box bg="white" w="300px" h="20px"></Box>   
        <Heading size="md">Styles</Heading>
        <HStack>
        <Flex gap="2">
        <Box border='2px' borderColor="#e80b9d" borderRadius='md' bg="white" w="100px" h="100px">    
        </Box>
        <Box border='2px' borderColor="#e80b9d" borderRadius='md' bg="white" w="100px" h="100px">    
        </Box>
        <Box border='2px' borderColor="#e80b9d" borderRadius='md' bg="white" w="100px" h="100px">    
        </Box>
        </Flex>
        </HStack>
        <But colorScheme= "red"  borderRadius='md' w="150px" h="70px" bg= "red"  type="submit">Style transfer</But>
      </VStack>

      <Spacer />
  
      <Box className="aumento"  bg = "white" w="400px" h="400px">
   
         <img  width="100%" height="100%" src={"./photo.jpg"}  ></img>

      <Box  w="100%" h="50px">
      <Popover>
            <PopoverTrigger>
            <But  colorScheme= "pink" w="100%" h="50px" bg= "#e80b9d"  type="submit"> Mint </But>     
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
            <HStack>
              <Flex gap="6">
             <But w="120px" h="50px" colorScheme='red'>NFT </But>
             <But w="120px" h="50px" colorScheme='red'>RMRK</But>
             </Flex>
             </HStack>
              </PopoverBody>
             </PopoverContent>
              </Portal>
              </Popover>
       
      </Box>
      <Form></Form>
      </Box>
      <Spacer />
      </Flex>
       
      </HStack>
      
      <Tabs isFitted variant='soft-rounded' colorScheme='red'>
          <TabList mb='1em'>
                        <Tab>Add Filters</Tab>
                        <Tab>Add Styles</Tab>
          </TabList>
           <TabPanels>
            <TabPanel>
                        <h1>Add Filters</h1>
                        <div> 
   
      <VStack w="100%" h="500px" >


          
        <Flex gap="2"  >

          <Box className="aumento"  w="100px" h="100px">
            <Tooltip label="Nose pig" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px"  onClick = {(e)=> { pigbutton(); activeInactive_button_nose_pork();}}  type="submit" > 
              <img src={"./icons/COCHINO.png"}  ></img>
              </But>
            </Tooltip>
          </Box>
          <Box  className="aumento" w="150px" h="150px">
            <Tooltip label="Nose clown" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px" onClick = {(e)=> {clownbutton(); activeInactive_button_nose_clown();}} type="submit"> 
               <img src={"./icons/CLOWN.png"}  ></img>
              </But>
            </Tooltip>
          </Box>
          <Box  className="aumento" w="100px" h="100px">
            <Tooltip label="Mask Gavin" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px" onClick = {(e)=> {gavinbutton (); activeInactive_button_gavin();}}  type="submit">
              <img src={"./icons/GAVIN_NEW.png"}  ></img>
              </But>
            </Tooltip>
          </Box> 
          <Box className="aumento"  w="100px" h="100px">
            <Tooltip label="Polkadot" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px" onClick = {(e)=> {polkabutton() ;activeInactive_button_dot();} } type="submit"> 
              <img src={"./icons/POLKA.png"}  ></img> 
              </But>
            </Tooltip>
          </Box>
          <Box className="aumento" w="100px" h="100px">
            <Tooltip label="Polkadot" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px" onClick = {(e)=> {polkadotbutton() ; activeInactive_button_dot_2();}}  type="submit"> 
              <img src={"./icons/POLKADOT.png"}  ></img> 
              </But>
            </Tooltip>
          </Box>
          <Box className="aumento" w="100px" h="100px">
            <Tooltip label="Mustache" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px" onClick ={(e)=> {mustachebutton(); activeInactive_button_mustache();}}  type="submit"> 
              <img src={"./icons/MUSTACHE.png"}  ></img> 
              </But>
            </Tooltip>
          </Box>
          <Box className="aumento" w="100px" h="100px">
            <Tooltip label="Glasses" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px" onClick = {(e)=> {glassesbutton();  activeInactive_button_glasses();}}  type="submit"> 
              <img src={"./icons/GLASSES.png"}  ></img> 
              </But>
              </Tooltip>
          </Box>
          <Box  className="aumento" w="100px" h="100px">
            <Tooltip label="Focus" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px" onClick =  {(e)=>  {focusbutton(); activeInactive_button_focus();}}  type="submit"> 
              <img src={"./icons/FOCUS.png"}  ></img> 
              </But>
            </Tooltip>
          </Box>
          <Box className="aumento" w="100px" h="100px">
            <Tooltip label="Hat" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px" onClick =  {(e)=>  {hatbutton(); activeInactive_button_hat();}}  type="submit"> 
              <img src={"./icons/HAT.png"}  ></img> 
              </But>
            </Tooltip>
          </Box>
          <Box  className="aumento" w="100px" h="100px">
            <Tooltip label="Beard" aria-label='A tooltip' placement='top-start'>
               <But bg ="white" w="100px" h="100px" onClick = {(e)=> {beardbutton();  activeInactive_button_beard();}}  type="submit"> 
               <img src={"./icons/BEARD.png"}  ></img> 
              </But>
            </Tooltip>
          </Box>
          </Flex>
          </VStack>
        </div> 
           </TabPanel>
            <TabPanel>
                        <h1>Add Styles</h1>
                        <Vincentvangoghcollection></Vincentvangoghcollection>
                        <Picassocollection></Picassocollection>
                        <Claudemonetcollection></Claudemonetcollection>
                        <Edvardmunchcollection></Edvardmunchcollection>
                        <Salvadordalicollection></Salvadordalicollection>
                        <Davincicollection></Davincicollection>
                        
            </TabPanel>
            </TabPanels>
       </Tabs>

        
        

        
       
       
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








