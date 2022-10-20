


import { Tooltip, Image, Heading, Flex, Collapse, Box, Text, Button, useDisclosure } from '@chakra-ui/react'


function CollapseEx() {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <>
        <Button fontSize = "4xl" font-weight=  "bold" bg="white" onClick={onToggle}> Founders </Button>
        <Collapse in={isOpen} animateOpacity>
            <Flex height= "400px" alignItems='center' gap='3'>


<Box  px={30} h={30}>

  <Image
            borderRadius='full'
            boxSize='150px'
            src='./linkedin.jpg'
            alt='PhD. Adrián Montero'
      />
      <Heading fontSize = "1xl" > CEO: Ph.D Adrián Montero</Heading>
      <Text fontSize = "1xl" >Computational Physics and </Text>
      <Text fontSize = "1xl" >Artificial Intelligence </Text>


  </Box>

<Box px={30} h={30}>
      <Image
            borderRadius='full'
            boxSize='150px'
            src='./linkedin.jpg'
            alt='PhD. Adrián Montero'
      />
      <Heading fontSize = "1x1" > CTO: Ph.D Juan Hernandez</Heading>
      <Text fontSize = "1xl" > Artificial Intelligence </Text>
</Box>

<Box px={30} h={30}> 
      <Image
            borderRadius='full'
            boxSize='150px'
            src='./linkedin.jpg'
            alt='PhD. Adrián Montero'
      />
      <Heading fontSize = "1xl" > CMO: Msc Carlos R. </Heading>
      <Text fontSize = "1xl" >Artificial Intelligence </Text>
</Box>


</Flex>
        </Collapse>
      </>

    )
  }

function Basic() {
    const { getDisclosureProps, getButtonProps } = useDisclosure()
  
    const buttonProps = getButtonProps()
    const disclosureProps = getDisclosureProps()
    return (
      <>
        <Button {...buttonProps}>Toggle Me</Button>
        <Text {...disclosureProps} mt={4}>
          This text is being visibly toggled hidden and shown by the button.
          <br />
          (Inspect these components to see the rendered attributes)
        </Text>
      </>
    )
  }


export {Basic, CollapseEx } 