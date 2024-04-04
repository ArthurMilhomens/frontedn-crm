import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Box,
  Text,
  Divider,
  HStack,
  Image,
} from "@chakra-ui/react";

export default function HistoryTable() {
  return (
    <Box borderRadius={8} border="1px solid" borderColor="gray.700" p={2}>
      <Table colorScheme="whiteAlpha" bgColor="gray.800">
        <Thead>
          <Tr>
            <Th fontSize={{ base: 10, sm: 12 }} color="purple.400">Data</Th>
            <Th fontSize={{ base: 10, sm: 12 }} color="purple.400">Deck utilizado</Th>
            <Th fontSize={{ base: 10, sm: 12 }} color="purple.400">Posição</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr bgGradient="linear(to-r, #00701c7b 0%, gray.800 5%)">
            <Td fontSize={{ base: 10, sm: 14 }}>04/04/2022</Td>
            <Td>
              <HStack>
                <Text fontSize={{ base: 10, sm: 14 }}>Hidra</Text>
                <Divider orientation="vertical" color="red" h="4" />
                <HStack spacing="1">
                  {/* {deck.colors.map((color) => (
                  <Image
                  key={color}
                  w="4"
                  h="4"
                  src={`../mana/${color}.svg`}
                  alt="Mana"
                  />
                ))} */}
                  <Image w={{ base: 3, sm: 4 }} h={{ base: 3, sm: 4 }} src={`../mana/G.svg`} alt="Mana" />
                  <Image w={{ base: 3, sm: 4 }} h={{ base: 3, sm: 4 }} src={`../mana/U.svg`} alt="Mana" />
                </HStack>
              </HStack>
            </Td>
            <Td>
              <Box>
                <Text fontWeight="bold" fontSize={{ base: 10, sm: 14 }}>
                  1/6
                </Text>
              </Box>
            </Td>
            {/* <Td>
            {isWideVersion && (
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                variant="outline"
                colorScheme="purple"
                _hover={{
                  bgColor: "purple.500",
                  color: "white",
                }}
              >
                <Icon as={RiPencilLine} />
              </Button>
            )}
          </Td> */}
          </Tr>
          <Tr bgGradient="linear(to-r, #b400007b 0%, gray.800 5%)">
            <Td fontSize={{ base: 10, sm: 14 }}>04/04/2022</Td>
            <Td>
              <HStack>
                <Text fontSize={{ base: 10, sm: 14 }}>Hidra</Text>
                <Divider orientation="vertical" color="red" h="4" />
                <HStack spacing="1">
                  {/* {deck.colors.map((color) => (
                  <Image
                  key={color}
                  w="4"
                  h="4"
                  src={`../mana/${color}.svg`}
                  alt="Mana"
                  />
                ))} */}
                  <Image w={{ base: 3, sm: 4 }} h={{ base: 3, sm: 4 }} src={`../mana/G.svg`} alt="Mana" />
                  <Image w={{ base: 3, sm: 4 }} h={{ base: 3, sm: 4 }} src={`../mana/U.svg`} alt="Mana" />
                </HStack>
              </HStack>
            </Td>
            <Td>
              <Box>
                <Text fontWeight="bold" fontSize={{ base: 10, sm: 14 }}>
                  1/6
                </Text>
              </Box>
            </Td>
            {/* <Td>
            {isWideVersion && (
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                variant="outline"
                colorScheme="purple"
                _hover={{
                  bgColor: "purple.500",
                  color: "white",
                }}
              >
                <Icon as={RiPencilLine} />
              </Button>
            )}
          </Td> */}
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
}
