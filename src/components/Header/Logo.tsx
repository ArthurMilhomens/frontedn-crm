import { Heading } from '@chakra-ui/react'

export default function Logo() {
  return (
    <Heading
      bgGradient='linear(to-l, #a0a0a0, #f7f7f7)'
      bgClip='text'
      fontSize='2xl'
      fontFamily="Kanit"
      p="2"
    >
      MTG League
    </Heading>
  );
}