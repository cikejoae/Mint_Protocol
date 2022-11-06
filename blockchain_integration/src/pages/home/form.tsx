import { Button, Checkbox, FileInput, Input, Textarea } from '@gear-js/ui';
import { useAlert } from '@gear-js/react-hooks';
import { useForm, useFieldArray } from 'react-hook-form';
import clsx from 'clsx';
import plus from 'asset/images/form/plus.svg';
import { useIPFS, useSendNFTMessage } from 'hooks';
import { getMintDetails, getMintPayload } from 'utils';
import { Attributes } from './attributes';
import React, {MouseEventHandler, MouseEvent , useState, useEffect} from 'react';
import {Heading, Stack, Box, FormLabel, useDisclosure, Button as Butt, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Center, Flex, HStack, VStack, } from '@chakra-ui/react'
import { GrAdd} from "react-icons/gr";
import { FaRedhat } from "react-icons/fa";



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
    // hacky fix cuz reset() doesn't trigger file input's onChange
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
      <>
        <Butt w="100%" h="50px" bg= "white"  type="submit" onClick={onOpen}>
        <GrAdd></GrAdd><Heading size="md">Add features</Heading>
        </Butt>
        <Drawer
          isOpen={isOpen}
          placement='right'

          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader className ="formu"  borderBottomWidth='1px'>
            Add features for your NFT
            </DrawerHeader>
  
            <DrawerBody>
            <>
      <VStack>
      <Flex gap="4">
      <div >
        <form  onSubmit={handleSubmit(onSubmit)}>
          <Box w="100%" h="100px">
            <Center><Heading className ="formu" size ="sm">NFT name</Heading></Center>
            <Box >
          <div  className ="formu" >
            <Input label="" {...register('name', { required: 'Name is required' })} />
            <p >{errors.name?.message}</p>
          </div>
          </Box>
          </Box>
          <Box w="100%">
          <div className ="formu" >
            <Center><Heading  className ="formu" size ="sm">Description</Heading></Center>
            <Textarea className ="formu"
              label=""
              
              {...register('description', { required: 'Add description' })}
            />
            <p >{errors.description?.message}</p>
          </div>
          </Box>
          <Box>
          <div >
            <div  >
              <Center><Heading className ="formu"  size ="sm">Add attributes</Heading></Center>
              <Heading className ="formu"  size ="sm">Attributes</Heading>
              <Checkbox label="" checked={isAnyAttribute} onChange={toggleAttributes} />
              {isAnyAttribute && <Button icon={plus} color="transparent" onClick={() => append(defaultAttributes)} />}
              <p >
                {(errors.attributes?.[0]?.key || errors.attributes?.[0]?.value) && 'Add attributes'}
              </p>
            </div>
            
          </div>
          {isAnyAttribute && <Attributes register={register} fields={fields} onRemoveButtonClick={remove} />}
          </Box>
          <Box w="100%" h="20px">
          <div >
            <Heading className ="formu"  size ="sm">Rarity</Heading>
            <div className ="formu" >
              <Checkbox label="" checked={isRarity} onChange={toggleRarity} />
              <p >{errors.rarity?.message}</p>
            </div>
          </div>
          </Box>
          {isRarity && (
            <div >
              <Input className ="formu" label="Rarity"  {...register('rarity', { required: 'Add rarity' })} />
            </div>
          )}
          <div >
            <Center>
              <FileInput className ="buttoninf"
              label=""
              
              accept={IMAGE_FILE_TYPES.join(', ')}
              {...register('image', { validate: validateImage })}
            />
            </Center>
            <p >{errors.image?.message}</p>
          </div>
          <Box w="100%" h="30px">
          <DrawerFooter >
              <Butt bg="white" className ="buttoninf" variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Butt>
              <Button className ="buttoninf" type="submit" text="Mint"  block />
            </DrawerFooter>
            </Box>
        </form>
      </div>
      </Flex>
      </VStack>
    </>
            </DrawerBody>
  
            
          </DrawerContent>
        </Drawer>
      </>
    )
  }


  export {Form } 