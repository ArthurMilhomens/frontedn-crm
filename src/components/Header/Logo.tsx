import { Heading, Text } from '@chakra-ui/react'

export default function Logo() {
  return (
    <Heading
      bgGradient='linear(to-l, #a0a0a0, #f7f7f7)'
      bgClip='text'
      fontSize='4xl'
      fontFamily="Kanit"
      p="2"
    >
      CRM
    </Heading>
  );
}