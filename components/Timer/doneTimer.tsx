import { Box, Flex, HStack, Text } from "@chakra-ui/react";

export const DoneTimer = () => {
  return (
    <Flex bgColor='#F89A0A' w='404px' height='131px' borderRadius='15px' align='center' justify='center' >
      <HStack margin='30px 0 20px 10px'>
        <Flex flexDir='column' align='center'>
          <Flex bgColor='#F3E9D9' h='60px' w='40px' align='center' justify='center' borderRadius='15px'>
            <Text color='black' fontSize='32px' marginTop='10px'>C</Text>
          </Flex>
        </Flex>
        <Flex flexDir='column' align='center'>
          <Flex bgColor='#F3E9D9' h='60px' w='40px' align='center' justify='center' borderRadius='15px'>
            <Text color='black' fontSize='32px' marginTop='10px'>O</Text>
          </Flex>
        </Flex>
        <Flex flexDir='column' align='center'>
          <Flex bgColor='#F3E9D9' h='60px' w='40px' align='center' justify='center' borderRadius='15px'>
            <Text color='black' fontSize='32px' marginTop='10px'>R</Text>
          </Flex>
        </Flex>
        <Flex flexDir='column' align='center'>
          <Flex bgColor='#F3E9D9' h='60px' w='40px' align='center' justify='center' borderRadius='15px'>
            <Text color='black' fontSize='32px' marginTop='10px'>A</Text>
          </Flex>
        </Flex>
        <Flex flexDir='column' align='center'>
          <Flex bgColor='#F3E9D9' h='60px' w='40px' align='center' justify='center' borderRadius='15px'>
            <Text color='black' fontSize='32px' marginTop='10px'>L</Text>
          </Flex>
        </Flex>
      </HStack>
    </Flex>
  )
}