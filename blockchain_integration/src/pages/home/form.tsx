import { Button, Checkbox, FileInput, Input, Textarea } from '@gear-js/ui';
import { useAlert } from '@gear-js/react-hooks';
import { useForm, useFieldArray } from 'react-hook-form';
import plus from 'asset/images/form/plus.svg';
import { useIPFS, useSendNFTMessage } from 'hooks';
import { getMintDetails, getMintPayload } from 'ut';
import { Attributes } from './attributes';
import './App.css';
import React from 'react';
import { Textarea as text, Stack, Box, FormLabel, useDisclosure, Input as inpu, DrawerCloseButton , Button as Butt, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, Heading, Flex, Center, Spacer} from '@chakra-ui/react'
import { GrAdd} from "react-icons/gr";
import { useEffect, useState } from 'react';
import { ClassNames } from '@emotion/react';




type AttributesValue = { key: string; value: string };
type Values = { name: string; description: string; image: FileList; attributes: AttributesValue[]; rarity: string };

const defaultAttributes = [{ key: '', value: '' }];
const defaultValues = { name: '', description: '', attributes: defaultAttributes, rarity: '' };

const IMAGE_FILE_TYPES = ['image/png', 'image/gif', 'image/jpeg'];

const validateImage = {
  required: (files: FileList) => !!files.length || 'Add image',
  size: (files: FileList) => files[0].size / 1024 ** 2 < 10 || 'Image size should not exceed 10MB',
  extension: (files: FileList) => IMAGE_FILE_TYPES.includes(files[0].type) || 'Image should be .jpg, .png or .gif',
};







function Form() {

  const { formState, control, register, handleSubmit, resetField, reset } = useForm<Values>({ defaultValues });
  const { fields, append, remove } = useFieldArray({ control, name: 'attributes' });
  const { errors } = formState;

  const alert = useAlert();
  const ipfs = useIPFS();
  const sendMessage = useSendNFTMessage();

  const [isAnyAttribute, setIsAnyAttribute] = useState(false);
  const [isRarity, setIsRarity] = useState(false);

  const toggleAttributes = () => setIsAnyAttribute((prevValue) => !prevValue);
  const toggleRarity = () => setIsRarity((prevValue) => !prevValue);

  useEffect(() => {
    resetField('attributes');
  }, [isAnyAttribute, resetField]);

  useEffect(() => {
    resetField('rarity');
  }, [isRarity, resetField]);

  const triggerImageChange = () => {
   
    const changeEvent = new Event('change', { bubbles: true });
    document.querySelector('[name="image"]')?.dispatchEvent(changeEvent);
  };

  const resetForm = () => {
    reset();
    triggerImageChange();
    setIsAnyAttribute(false);
    setIsRarity(false);
  };

  const onSubmit = async (data: Values) => {
    const { name, description, attributes, rarity } = data;
    const image = data.image[0];

    const details = isAnyAttribute || isRarity ? getMintDetails(isAnyAttribute ? attributes : undefined, rarity) : '';

    ipfs
      .add(image)
      .then(({ cid }) => cid)
      .then(async (imageCid) => (details ? { detailsCid: (await ipfs.add(details)).cid, imageCid } : { imageCid }))
      .then(({ imageCid, detailsCid }) => getMintPayload(name, description, imageCid, detailsCid))
      .then((payload) => sendMessage(payload, { onSuccess: resetForm }))
      .catch(({ message }: Error) => alert.error(message));
  };





    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
  
    return (
      <  >
        <Butt  leftIcon={<GrAdd/>} w="100%" h="50px" bg= "white"  type="submit" onClick={onOpen}>
          Add features
        </Butt>
        <Drawer
          isOpen={isOpen}
          placement='right'

          onClose={onClose}
          
        >
          <DrawerOverlay  />
          <DrawerContent bg= "white">
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px' className='input'>
            Add features for your NFT
            </DrawerHeader>
  
            <DrawerBody className='input' bg= "white">
              
              <>

              <Stack spacing='24px'>

                <Flex gap ="10" >

      <div  background-color= "#e80b9d" className='input' >
        <form  background-color= "#e80b9d" className='input'   onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <Center>
            <Heading size ="sm">NFT name</Heading>
            </Center>
            <Box w="100%" h="10px"></Box>
          <div className='input' background-color= "#e80b9d"  >
            <Input  className='input'  {...register('name', { required: 'Please enter NFT name' })} />
            <p >{errors.name?.message}</p>
          </div>
          </Box>
          <Box className='input' background-color= "#e80b9d">
          <Box w="100%" h="20px"></Box>
            <Center>
            <Heading size ="sm" >Description</Heading>
            </Center>
            <Box w="100%" h="10px"></Box>
          <div  className='input' background-color = {"white"}  >
            <Textarea className='Textarea1' background-color={"#87CEEB"}
              {...register('description', { required: 'Please enter  NFT description' })}
            />
            <p >{errors.description?.message}</p>
          </div>
          </Box>
          <Box w="100%" h="20px"></Box>
          <Box bg ="white">
          <Center>
            <Heading size ="sm">Add features</Heading>
          </Center>
          <Box w="100%" h="10px"></Box>
          <div  className='input' background-color= "#e80b9d">
            <div className='input'  background-color= "#e80b9d">
                   <Heading size ="sm">Attributes</Heading>
              <Checkbox  background-color= "white" className='input' label="1" checked={isAnyAttribute} onChange={toggleAttributes} />
              
              {isAnyAttribute && <Button background-color= "white" icon={plus} color="transparent" onClick={() => append(defaultAttributes)} />}
              <p >
                {(errors.attributes?.[0]?.key || errors.attributes?.[0]?.value) && 'Add attributes'}
              </p>
            </div>
          </div>
          </Box>

        
          <Box bg ="white">
          {isAnyAttribute && <Attributes background-color= "white"   register={register} fields={fields} onRemoveButtonClick={remove} />}
   
          <div className='input'>
            <div  className='input'>
              <Box w="100%" h="20px"></Box>
              <Heading size ="sm">Rarity</Heading>
              <Checkbox  className='input'  label="2" checked={isRarity} onChange={toggleRarity} />
              
              <p >{errors.rarity?.message}</p>
            </div>
          </div>
          </Box>
          <Box w="100%" h="20px"></Box>
          {isRarity && (
            <div className='input' >
              <Input  className='input' label="2"  {...register('rarity', { required: 'Add rarity' })} />
            </div>
          )}
          <Box w="100%" h="30px"></Box>
          <div className='input' >
            <Center ><FileInput 
              
              accept={IMAGE_FILE_TYPES.join(', ')}
              {...register('image', { validate: validateImage })}
            />
            </Center>
            <p >{errors.image?.message}</p>
          </div>
          <Box w="100%" h="20px"></Box>
          <DrawerFooter  w="100%" h="50px" >
            <Flex  gap="5">
              <Butt className= "aumento" variant={"pink"}  mr={4} onClick={onClose}>
                Cancel
              </Butt>
              <Button  type="submit" text="Mint"  block />
              </Flex>
            </DrawerFooter>
          
        </form>
        
      </div>
      </Flex>
      </Stack>
    </>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
    
      </>
    )
  }


  export {Form } 