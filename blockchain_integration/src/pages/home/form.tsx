import React from 'react';
import {
    Textarea,
    Stack,
    Box,
    FormLabel,
    useDisclosure,
    Input,
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
  import { GrAdd} from "react-icons/gr";



function Form() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
  
    return (
      <>
        <Button leftIcon={<GrAdd/>} w="100%" h="50px" bg= "white"  type="submit" onClick={onOpen}>
          Add features
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'

          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
            Add features for your NFT
            </DrawerHeader>
  
            <DrawerBody>
              <Stack spacing='24px'>
                <Box>
                  <FormLabel htmlFor='username'>NFT Name</FormLabel>
                  <Input
                    id='username'
                    placeholder='Please enter NFT name'
                  />
                  <FormLabel htmlFor='username'>Rarity</FormLabel>
                  <Input
                    id='Rarity'
                    placeholder='Please enter rarety'
                  />
                  <FormLabel htmlFor='username'>Type</FormLabel>
                  <Input
                    id='Type'
                    placeholder='Please enter type'
                  />
                  <FormLabel htmlFor='username'>Royalty</FormLabel>
                  <Input
                    id='royalty'
                    placeholder='Please enter user royalty'
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor='desc'>Description</FormLabel>
                  <Textarea id='desc' />
                </Box>
              </Stack>
            </DrawerBody>
  
            <DrawerFooter borderTopWidth='1px'>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button bg= "#e80b9d">Add features</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }


  export {Form } 