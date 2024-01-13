import { Box, Button, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function CardsList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <>
      <Head>
        <title>Cartas - MTGL</title>
      </Head>
      <main>
        <Box>
          <Header />

          <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
            <Sidebar />

            <Box flex="1" borderRadius={8} bg="gray.800" p="8">
              <Flex mb="8" justify="space-between" align="center">
                <Heading size="lg" fontWeight="normal">Cartas</Heading>
              </Flex>

              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>Usuário</Th>
                    <Th>Data de criação</Th>
                    <Th w="8"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>01</Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">Arthur Milllione</Text>
                        <Text fontSize="sm" color="gray.300">arthur@email.com</Text>
                      </Box>
                    </Td>
                    <Td>04 de Abril, 2022</Td>
                    <Td>
                      {isWideVersion && <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        variant="outline"
                        colorScheme="purple"
                        _hover={{
                          bgColor: 'purple.500',
                          color: 'white'
                        }}
                      >
                        <Icon as={RiPencilLine} />
                      </Button>}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </Flex>
        </Box>
      </main>
    </>
  );
}