import React, {MouseEventHandler, MouseEvent , useState,} from 'react';
import { Button as But,Flex, Heading, Box, HStack, CircularProgress, CircularProgressLabel,Tabs, TabList, TabPanels, Tab, TabPanel, VStack, Stack, Spacer,ButtonGroup,Center, ButtonProps, useColorModeValue, Tooltip, background } from '@chakra-ui/react';
import { Portal, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, PopoverAnchor,} from '@chakra-ui/react'
import { ChangeEvent } from 'react';
import { isConstructorDeclaration, isWhiteSpaceLike } from 'typescript';
import './App.css';




function Filters() {

var lst_filters = [""];

function listFilters(fil:any){ 
  lst_filters.push(fil);
  console.log(lst_filters);
}

    
    


    const [imagen, setImagen]= useState(false);
    
    const Newbutton = () => {
  
       setImagen(prevValue => !prevValue );
      
   
     };
   
     const but = imagen ? 0 : 1

     function resultado () {if (but == 1){return(<img src={"./icons/COCHINO.png"}  ></img>)};}

     


   
           




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
      body: JSON.stringify(button_signal)})
      const data = await res.json();
  
      }

 

  const activeInactive_button_nose_pork = () => {
   
    setValue(prevValue => !prevValue );

    pull_button_nose_pork();
    Newbutton();
   
    


  };

  const pull_button_nose_pork = async () => {

    
      const res = await fetch('http://localhost:5000/button_nose_pork',
      { method : "POST", 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(button_signal)})
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
          body: JSON.stringify(button_signal)})
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
              body: JSON.stringify(button_signal)})
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
          body: JSON.stringify(button_signal)})
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
            body: JSON.stringify(button_signal)})
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
              body: JSON.stringify(button_signal)})
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
                body: JSON.stringify(button_signal)})
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
                  body: JSON.stringify(button_signal)})
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
                    body: JSON.stringify(button_signal)})
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
        <div> 
   
      <VStack w="100%" h="500px" >


          
        <Flex gap="2"  >

          <Box className="aumento"  w="100px" h="100px">
           {resultado () }
            <Tooltip label="Nose pig" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px"  onClick = {(e)=> {activeInactive_button_nose_pork;}}  type="submit" > 
              <img src={"./icons/COCHINO.png"}  ></img>
              </But>
            </Tooltip>
          </Box>
          <Box  className="aumento" w="150px" h="150px">
            <Tooltip label="Nose clown" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px" onClick = {activeInactive_button_nose_clown} type="submit"> 
               <img src={"./icons/CLOWN.png"}  ></img>
              </But>
            </Tooltip>
          </Box>
          <Box  className="aumento" w="100px" h="100px">
            <Tooltip label="Mask Gavin" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px" onClick = {activeInactive_button_gavin}  type="submit">
              <img src={"./icons/GAVIN_NEW.png"}  ></img>
              </But>
            </Tooltip>
          </Box> 
          <Box className="aumento"  w="100px" h="100px">
            <Tooltip label="Polkadot" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px" onClick = {activeInactive_button_dot}  type="submit"> 
              <img src={"./icons/POLKA.png"}  ></img> 
              </But>
            </Tooltip>
          </Box>
          <Box className="aumento" w="100px" h="100px">
            <Tooltip label="Polkadot" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px" onClick = {activeInactive_button_dot_2}  type="submit"> 
              <img src={"./icons/POLKADOT.png"}  ></img> 
              </But>
            </Tooltip>
          </Box>
          <Box className="aumento" w="100px" h="100px">
            <Tooltip label="Mustache" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px" onClick = {activeInactive_button_mustache}  type="submit"> 
              <img src={"./icons/MUSTACHE.png"}  ></img> 
              </But>
            </Tooltip>
          </Box>
          <Box className="aumento" w="100px" h="100px">
            <Tooltip label="Glasses" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px" onClick = {activeInactive_button_glasses}  type="submit"> 
              <img src={"./icons/GLASSES.png"}  ></img> 
              </But>
              </Tooltip>
          </Box>
          <Box  className="aumento" w="100px" h="100px">
            <Tooltip label="Focus" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px" onClick = {activeInactive_button_focus}  type="submit"> 
              <img src={"./icons/FOCUS.png"}  ></img> 
              </But>
            </Tooltip>
          </Box>
          <Box className="aumento" w="100px" h="100px">
            <Tooltip label="Hat" aria-label='A tooltip' placement='top-start'>
              <But bg ="white" w="100px" h="100px" onClick = {activeInactive_button_hat}  type="submit"> 
              <img src={"./icons/HAT.png"}  ></img> 
              </But>
            </Tooltip>
          </Box>
          <Box  className="aumento" w="100px" h="100px">
            <Tooltip label="Beard" aria-label='A tooltip' placement='top-start'>
               <But bg ="white" w="100px" h="100px" onClick = {activeInactive_button_beard}  type="submit"> 
               <img src={"./icons/BEARD.png"}  ></img> 
              </But>
            </Tooltip>
          </Box>
          </Flex>
          </VStack>
        </div> 
    </>
    )
  }
  


export { Filters }