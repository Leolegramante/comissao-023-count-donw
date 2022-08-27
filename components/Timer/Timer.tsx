import { Flex, HStack, Text } from "@chakra-ui/react";

interface DefaultRemainingTime {
  timer: {
    seconds: string
    minutes: string
    hours: string
    days: string
    now: boolean
  }
}

export const Timer = ({ timer }: DefaultRemainingTime) => {
  const day0 = Number(timer.days) >= 10 ? timer.days.charAt(0) : 0
  const day1 = Number(timer.days) >= 10 ? timer.days.charAt(1) : timer.days.charAt(0)
  const hours1 = Number(timer.hours) >= 10 ? timer.hours.charAt(0) : 0
  const hours2 = timer.hours.charAt(1)
  const minutes1 = Number(timer.minutes) >= 10 ? timer.minutes.charAt(0) : 0
  const minutes2 = timer.minutes.charAt(1)
  const seconds1 = Number(timer.seconds) >= 10 ? timer.seconds.charAt(0) : 0
  const seconds2 = timer.seconds.charAt(1)
  return (
    <Flex bgColor='#F89A0A' w='404px' height='131px' borderRadius='15px' >
      <HStack margin='30px 0 20px 10px'>
        <Flex flexDir='column' align='center'>
          <Flex flexDir='row' align='center' >
            <Flex bgColor='#F3E9D9' h='60px' w='40px' align='center' justify='center' borderRadius='15px'>
              <Text color='black' fontSize='32px' marginTop='10px'>{day0}</Text>
            </Flex>
            <Text fontSize='28px' fontWeight='semibold'>:</Text>
            <Flex bgColor='#F3E9D9' h='60px' w='40px' align='center' justify='center' borderRadius='15px'>
              <Text color='black' fontSize='32px' marginTop='10px'>{day1}</Text>
            </Flex>
          </Flex>
          <Text fontSize='24px' fontWeight='bold'>Dias</Text>
        </Flex>
        <Flex flexDir='column' align='center'>
          <Flex flexDir='row' align='center' >
            <Flex bgColor='#F3E9D9' h='60px' w='40px' align='center' justify='center' borderRadius='15px'>
              <Text color='black' fontSize='32px' marginTop='10px'>{hours1}</Text>
            </Flex>
            <Text fontSize='28px' fontWeight='semibold'>:</Text>
            <Flex bgColor='#F3E9D9' h='60px' w='40px' align='center' justify='center' borderRadius='15px'>
              <Text color='black' fontSize='32px' marginTop='10px'>{hours2}</Text>
            </Flex>
          </Flex>
          <Text fontSize='24px' fontWeight='bold'>Horas</Text>
        </Flex>
        <Flex flexDir='column' align='center'>
          <Flex flexDir='row' align='center' >
            <Flex bgColor='#F3E9D9' h='60px' w='40px' align='center' justify='center' borderRadius='15px'>
              <Text color='black' fontSize='32px' marginTop='10px'>{minutes1}</Text>
            </Flex>
            <Text fontSize='28px' fontWeight='semibold'>:</Text>
            <Flex bgColor='#F3E9D9' h='60px' w='40px' align='center' justify='center' borderRadius='15px'>
              <Text color='black' fontSize='32px' marginTop='10px'>{minutes2}</Text>
            </Flex>
          </Flex>
          <Text fontSize='24px' fontWeight='bold'>Minutos</Text>
        </Flex>
        <Flex flexDir='column' align='center'>
          <Flex flexDir='row' align='center' >
            <Flex bgColor='#F3E9D9' h='60px' w='40px' align='center' justify='center' borderRadius='15px'>
              <Text color='black' fontSize='32px' marginTop='10px'>{seconds1}</Text>
            </Flex>
            <Text fontSize='28px' fontWeight='semibold'>:</Text>
            <Flex bgColor='#F3E9D9' h='60px' w='40px' align='center' justify='center' borderRadius='15px'>
              <Text color='black' fontSize='32px' marginTop='10px'>{seconds2}</Text>
            </Flex>
          </Flex>
          <Text fontSize='24px' fontWeight='bold'>Segundos</Text>
        </Flex>
      </HStack>
    </Flex>
  )
}