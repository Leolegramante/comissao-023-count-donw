import type { NextPage } from 'next'
import Image from "next/image"
import { Box, Center, Flex, Heading, HStack, Icon, Text } from '@chakra-ui/react'
import { MdLocationOn } from 'react-icons/md'
import { TimeCard } from "../components/Timer"
//1661631180000
//1661914800000 OFICIAL
const Home: NextPage = () => {
  return (
    <Box bgGradient='linear(#F89A0A, #DB0A63)' color='#F3E9D9' height='100%' paddingTop='40px'>
      <Heading>
        <Center>
          <Text fontSize='42px'>023 VAI AO BAR</Text>
        </Center>
      </Heading>
      <Box marginTop="63px">
        <Center>
          <TimeCard countdownTimestampMs={1661914800000} />
        </Center>
      </Box>
      <Box marginTop='50px'>
        <Center>
          <Text fontSize='48px' fontWeight='medium'>
            Lançamento do <br></br> mascote <strong>31.08</strong>
          </Text>
        </Center>
      </Box>
      <Box marginTop='40px'>
        <Center>
          <Text fontSize='28px' fontWeight='medium' align='center'>
            A senha para entrada no evento <br></br>
            estará disponível no dia 31.08
          </Text>
        </Center>
      </Box>
      <Box marginTop='32px'>
        <Center>
          <Image src='/Logo.png' width='122px' height='122px' alt='logo comissao' />
        </Center>
      </Box>
      <Box bgColor='black' p='10px'>
        <Box position='absolute' top='112px' left='50%' >
        </Box>
        <Center>
          <Flex flexDirection='row' alignItems='center'  >
            <Icon h='80px' w='80px' marginTop='25px' color='#F89A0A' viewBox="0 0 18 18">
              <MdLocationOn />
            </Icon>
            <Flex flexDirection='column' align='start' color='#F89A0A'>
              <Text fontSize='28px' fontWeight='bold' >
                LAB DA GROOVE
              </Text>
              <Text fontSize='24px' fontWeight='bold' >
                Avenida Barão de Itapura, 3309
              </Text>
            </Flex>
          </Flex>
        </Center>
      </Box>
    </Box>
  )
}

export default Home
