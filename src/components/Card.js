import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import Search1 from './search';
  
  export default function SocialProfileWithImage (props) {
let v;
let c ;

    if (props.Expiry>16){
        v = "التسجيل متاح";
        c = '#3dcc55';
      }
      else {
        v = "التسجيل مغلق";
        c = '#a0a2a5';
      }
      return (
        
    
        
      <Center py={6}>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'140'}
            w={'full'}
            src={
'https://www.alyaum.com/uploads/images/2020/09/06/884263.jpg'            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={props.Im}

              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
               {props.Name}
             
              </Heading>
              
              <Text color={'gray.500'}> </Text>
            </Stack>
  
            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>50</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                teachers
                </Text>
                {props.Description}

              </Stack>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>10K</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                graduates                </Text>
              </Stack>
            </Stack>
  
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('green')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              join now
            </Button>
          </Box>
        </Box>
      </Center>
    );
  }